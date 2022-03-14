import { actionCreatorFactory } from 'typescript-fsa';
import { NowInputUserState } from '../reducers/chat_room_reducer';

const actionCreator = actionCreatorFactory();

export const chatRoomActions = {
    connectRoom: actionCreator('CONNECT_ROOM'),
    exitRoom: actionCreator('EXIT_CHATROOM'),
    updateTodo: actionCreator<string>('UPDATE_TODO'),
    nowinputTodo: actionCreator<NowInputUserState>('NOWINPUT_TODO'),
    removeNowInput: actionCreator<NowInputUserState>('REMOVE_NOWINPUT'),
    updateName: actionCreator<string>('UPDATE_NAME'),
    sendTodo: actionCreator<string>('SEND_TODO'),
    receiveTodo: actionCreator<string>('RECEIVE_TODO'),
    removeTodo: actionCreator('REMOVE_TODO'),
    requestAllLog: actionCreator('REQUEST_ALLLOG'),
    receiveAllLog: actionCreator<string[]>('RECEIVE_ALLLOG'),
};
