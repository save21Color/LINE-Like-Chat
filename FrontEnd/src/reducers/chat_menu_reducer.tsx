import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { chatMenuActions } from '../actions/chat_menu_action';
import { chatRoomActions } from '../actions/chat_room_action';

export interface ChatMenuState {
    userId: string;
    roomList: any[];
    open: boolean;
    selectedRoom: ChatRoomState;
}

export interface ChatRoomState {
    roomId: string;
    roomName: string;
}

const getUserId = () => {
    const storage = localStorage.getItem('currentUser');
    if (storage) {
        const value = JSON.parse(storage);
        return value.currentUser;
    }
    return '';
};

const initialState: ChatMenuState = {
    userId: getUserId(),
    roomList: [],
    open: false,
    selectedRoom: { roomId: '', roomName: '' },
};

export const chatMenuReducer = reducerWithInitialState(initialState)
    .case(chatMenuActions.requestAllChat, (state, userId) => {
        return Object.assign({}, state, { userId });
    }).case(chatMenuActions.receiveAllChat, (state, roomList) => {
        state.roomList = roomList as any[];
        return Object.assign({}, state);
    }).case(chatMenuActions.updateOpen, (state, open) => {
        return Object.assign({}, state, { open });
    }).case(chatRoomActions.exitRoom, (state) => {
        state.open = false;
        return Object.assign({}, state, { open:state.open });

    }).case(chatMenuActions.updateSelectedRoom, (state, selectRoom) => {
        const selectedRoom: ChatRoomState = {
            roomId: selectRoom.roomId,
            roomName: selectRoom.roomName,
        };
        return Object.assign({}, state, { selectedRoom });
    });
