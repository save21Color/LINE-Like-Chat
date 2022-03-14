import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { chatRoomActions } from '../actions/chat_room_action';
import { NowInputUserState } from '../reducers/chat_room_reducer';
import { withStyleschatRoomComponent } from '../components/chat_room_component';
import { withRouter } from 'react-router-dom';

export interface ChatRoomActions {
    connectRoom: () => Action<void>;
    exitRoom: () => Action<void>;
    updateTodo: (v: string) => Action<string>;
    nowinputTodo: (v: NowInputUserState) => Action<NowInputUserState>;
    removeNowInput: (v: NowInputUserState) => Action<NowInputUserState>;
    sendTodo: (v: string) => Action<string>;
    updateName: (v: string) => Action<string>;
    removeTodo: () => Action<void>;
    requestAllLog: () => Action<void>;
    receiveAllLog: (v: string[]) => Action<string[]>;
    receiveTodo: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        connectRoom: () => dispatch(chatRoomActions.connectRoom()),
        exitRoom: () => dispatch(chatRoomActions.exitRoom()),
        updateTodo: (v: string) => dispatch(chatRoomActions.updateTodo(v)),
        nowinputTodo: (v: NowInputUserState) => dispatch(chatRoomActions.nowinputTodo(v)),
        removeNowInput: (v: NowInputUserState) => dispatch(chatRoomActions.removeNowInput(v)),
        updateName: (v: string) => dispatch(chatRoomActions.updateName(v)),
        sendTodo: (v: string) => dispatch(chatRoomActions.sendTodo(v)),
        removeTodo: () => dispatch(chatRoomActions.removeTodo()),
        requestAllLog: () => dispatch(chatRoomActions.requestAllLog()),
        receiveAllLog: (v: string[]) => dispatch(chatRoomActions.receiveAllLog(v)),
        receiveTodo: (v: string) => dispatch(chatRoomActions.receiveTodo(v)),
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.chatroom);
}

const chatRoomContainer =
    withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyleschatRoomComponent));
export { chatRoomContainer as ChatRoomContainer };
