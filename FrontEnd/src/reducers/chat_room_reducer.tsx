import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';
import { chatRoomActions } from '../actions/chat_room_action';
import { chatMenuActions } from '../actions/chat_menu_action';

export interface ChatRoomValueState {
    roomId:string;
    roomName: string;
    userId:string;
    userName: string;
    textValue: string;
    isEnter: boolean;
    message: string[];
    input: NowInputUserState;
}

export interface NowInputUserState {
    isInput: boolean;
    userName: string;
}

const initialState: ChatRoomValueState = {
    roomId:'',
    roomName: '',
    userId:'',
    userName: '名無し',
    textValue: '',
    isEnter: false,
    message: [],
    input: { isInput: false, userName: '' },
};

export const chatRoomReducer = reducerWithInitialState(initialState)
    .case(chatRoomActions.exitRoom, (state) => {
        state.isEnter = false;
        state.roomId = '';
        state.roomName = '';
        state.message = [];
        state.textValue = '';
        state.input.isInput = false;
        state.input.userName = '';
        localStorage.removeItem('selectedRoom');
        return Object.assign({}, state);

    }).case(chatRoomActions.connectRoom, (state) => {
        let idState;
        const strage = localStorage.getItem('currentUser');
        if (strage) {
            idState = JSON.parse(strage);
        } else {
            idState = { currentUser:'NullId' };
        }
        state.userId = idState.currentUser;
        return Object.assign({}, state, { userId:state.userId });

    }).case(chatRoomActions.updateTodo, (state, textValue) => {
        const splitVal = textValue.split(':');
        state.textValue = splitVal[2];
        return Object.assign({}, state);

    }).case(chatRoomActions.nowinputTodo, (state, inputState) => {
        if (state.userName !== inputState.userName) {
            state.input.userName = inputState.userName;
            state.input.isInput = true;
            sessionStorage.setItem('inputNow', JSON.stringify({ userName: state.input.userName, isInput: state.input.isInput }));
            return Object.assign({}, state, { inputState });
        }
        return state;

    }).case(chatRoomActions.removeNowInput, (state, inputState) => {
        console.log('入力状況をリセットします');
        if (state.userName !== inputState.userName && state.input.userName === inputState.userName) {
        state.input.isInput = inputState.isInput;
        state.input.userName = '';
        return Object.assign({}, state, { inputState });
        }
        return state;

    }).case(chatRoomActions.updateName, (state, userName) => {
        state.userName = userName;
        return Object.assign({}, state);

    }).case(chatRoomActions.sendTodo, (state, text) => {
        return Object.assign({}, state, { message: state.message.concat(text) });

    }).case(chatRoomActions.receiveTodo, (state, text) => {
        sessionStorage.setItem('receive', JSON.stringify({ log: text }));
        const splitVal = text.split(':');
        state.input.userName = '';
        state.input.isInput = false;
        if (state.userId !== splitVal[0]) {
            return Object.assign({}, state, { message: state.message.concat(text) });
        }
        return state;

    }).case(chatRoomActions.removeTodo, (state) => {
        state.textValue = '';
        return Object.assign({}, state);

    }).case(chatRoomActions.receiveAllLog, (state, logs) => {
        state.message = logs;
        return Object.assign({}, state);

    }).case(chatMenuActions.updateSelectedRoom, (state , selectRoom) => {
            state.roomId = selectRoom.roomId;
            state.roomName = selectRoom.roomName;
            sessionStorage.setItem('nowRoom', JSON.stringify({ roomId: selectRoom.roomId, roomName: selectRoom.roomName }));
        return Object.assign({}, state);

    }).case(chatRoomActions.requestAllLog, (state) => {
        return Object.assign({}, state);
    });
