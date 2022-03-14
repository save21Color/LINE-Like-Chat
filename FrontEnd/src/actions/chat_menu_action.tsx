import { actionCreatorFactory } from 'typescript-fsa';
import { ChatRoomState } from '../reducers/chat_menu_reducer';

const actionCreator = actionCreatorFactory();

export const chatMenuActions = {
    requestAllChat: actionCreator<string>('REQUEST_ALL_CHAT'),
    receiveAllChat: actionCreator<{}>('RECEIVE_ALL_CHAT'),
    updateOpen: actionCreator<boolean>('UPDATE_OPEN'),
    updateSelectedRoom: actionCreator<ChatRoomState>('UPDATE_SELECTED_ROOM'),
};
