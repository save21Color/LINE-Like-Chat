// redux-sagaで使用する非同期処理 全て頭にyieldを付けて使用する
import { put, call, take, fork, cancel , cancelled , takeEvery } from 'redux-saga/effects';
import { eventChannel, delay } from 'redux-saga';
import { chatRoomActions } from '../actions/chat_room_action';
import { ChatRoomState } from '../reducers/chat_menu_reducer';
import { NowInputUserState } from '../reducers/chat_room_reducer';
import * as Io from 'socket.io-client';
import axios from 'axios';
import { selectRoom, fetchselectItem } from './chat_menu_saga';
import { getRoomList } from './root_saga';

const sendRoom: ChatRoomState = {
    roomId: '',
    roomName: '',
};
let state:any;
let name:string = '名無し';

export function fetchConnect() {
    return new Promise((resolve: () => void, reject: () => void) => {
        resolve();
        reject();
    }).then(() => {
        // サーバとsoket.ioの通信を行う
        const socket = Io();
        return socket;
    });
}

// ログ取得
export async function fetchRequest() {
    const params = { roomId:sendRoom.roomId };
    // サーバにgetリクエストを送信、実行結果をresに格納する
    const res = await axios.get('/ChatRoom/sendReq', { params });
    console.log(res);
    // axios.getの返り値はPromise型なのでresを返すとPromiseが完了する
    return res;
}

// サーバからsocket.io通信でemitされるイベントを待機して対応するアクションを返す
function subscribe(socket: any) {
    return eventChannel((emit) => {
        // メッセージ受信イベント
        socket.on('RECEIVE_TODO', (msg: string) => {
            // emitの引数にイベント受信時の対応アクションを設定することで対応アクションがeventochannelの返り値になる
            emit(chatRoomActions.receiveTodo(msg));
        },
        );
        // チャットログ取得イベント 未使用
        socket.on('RECEIVE_ALLLOG', (logs: string[]) => {
            emit(chatRoomActions.receiveAllLog(logs));
        },
        );
        // メッセージ入力中イベント
        socket.on('NOWINPUT_TODO', (val: string) => {

            if (!val.split(':')[2]) {
                const value: NowInputUserState =
                    {
                        isInput: false,
                        userName: val.split(':')[1],
                    };
                emit(chatRoomActions.removeNowInput(value));
            } else {
                const value: NowInputUserState =
                    {
                        isInput: true,
                        userName: val.split(':')[1],
                    };
                emit(chatRoomActions.nowinputTodo(value));
            }
        },
        );
        return () => { };
    },
    );
}

// メッセージ送信タスク
function* transmissionTodo(socket: any) {
    while (true) {
        let action: { type: any, payload: any };
        // メッセージ送信アクションまで待機、変数に格納するとアクションタイプ(type)とアクションの引数(payload)を格納する
        // このアクションのpayloadには送信するテキストが格納されている
        action = yield take('SEND_TODO');
        if (yield cancelled()) {
            break;
        }
        name = action.payload.split(':')[1];
        const textValue = action.payload;
        // サーバーに送信イベント発火 最初に戻ってまたアクションを待機する 他のタスクも同様
        socket.emit('SEND_TODO', textValue, state.currentUser, sendRoom.roomId);
    }
}

// チャットログ取得タスク
function* requestAllLog(socket:any) {
    // ログ取得リクエストアクションまで待機
    const action = yield take('REQUEST_ALLLOG');
    socket.emit('DEBUG', action);
    // putで指定した関数のPromise完了まで待機
    const res = yield call(fetchRequest);
    // メッセージ受信イベント発火
    yield put(chatRoomActions.receiveAllLog(res.data));
}

// イベント受信タスク
function* actionReceiver(socket: any) {
    socket.emit('DEBUG', 'wait...');
    // サーバーから送信されるイベントをeventChannelを使って待機
    const channel = yield call(subscribe, socket);
    while (true) {
        // サーバから送られたイベントをキャッチして対応するアクションを発火する
        const action = yield take(channel);
        if (yield cancelled()) {
            break;
        }
        socket.emit('DEBUG', action);
        yield put(action);
    }
}

// メッセージ入力中タスク
function* nowInput(socket: any) {
    while (true) {
        // メッセージ入力アクションまで待機
        const action = yield take('UPDATE_TODO');
        if (yield cancelled()) {
            break;
        }
        socket.emit('DEBUG', action.payload);
        socket.emit('UPDATE_TODO', action.payload);
    }
}

// チャットのメイン機能タスク
function* taskMeditor(socket: any) {
    // 入室アクションまで待機
    yield take('CONNECT_ROOM');
    const strage = localStorage.getItem('currentUser');
    if (strage) {
        state = JSON.parse(strage);
    } else {
        state = { currentUser:'NullId' };
    }

    sendRoom.roomId = selectRoom.roomId;
    sendRoom.roomName = selectRoom.roomName;
    // 入室イベントをサーバーに発火(emit)
    socket.emit('ENTER_ROOM', sendRoom.roomId, sendRoom.roomName, state.currentUser);
    sessionStorage.setItem('selectedRoom', JSON.stringify({ selectRoom }));

    // 上から順に、メッセージ送信タスク、イベント受信タスク、メッセージ入力タスクを走らせる
    const transmissionTask = yield fork(transmissionTodo, socket);
    const receiveTask = yield fork(actionReceiver, socket);
    const inputTask = yield fork(nowInput, socket);

    socket.emit('INFORMATION', `${name}さんが入室しました。`);

    delay(1000);
    // 退出まで待機
    yield take('EXIT_CHATROOM');

    yield cancel(transmissionTask);
    yield cancel(receiveTask);
    yield cancel(inputTask);

}

// 非同期処理のメインフロー
function* flow() {
    // 初回起動時、サーバーとsocket.io通信を行う
    const socket = yield call(fetchConnect);
    // 入室~退室を何度でも繰り返して動作出来るようにするため無限ループ
    while (true) {
        // ログ取得タスクを走らせる
        const requestTask = yield fork(requestAllLog, socket);
        const mainTask = yield fork(taskMeditor, socket);

        // 退出イベント発生まで待機
        yield take('EXIT_CHATROOM');
        socket.emit('EXIT_CHATROOM', state.currentUser);
        socket.emit('INFORMATION', `${name}さんが退出しました。`, sendRoom.roomId);

        // 現在動作しているタスクをキャンセル
        yield cancel(mainTask);
        yield cancel(requestTask);

        // 退出時に再度ルーム選択イベントと、ルームリスト取得イベントを待機
        yield takeEvery('UPDATE_SELECTED_ROOM', fetchselectItem);
        yield takeEvery('REQUEST_ALL_CHAT', getRoomList);
    }
}

export default function* chat_Saga() {
    // storeでmiddlewere.run()されている場合、起動時に一度のみ呼ばれる
    // なのでここはメインフロータスクを走らせるだけ
    yield fork(flow);
}
