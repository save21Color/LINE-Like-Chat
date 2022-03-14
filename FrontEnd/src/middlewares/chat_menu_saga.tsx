import { put, takeEvery } from 'redux-saga/effects';
import { appMenuActions } from '../actions/app_menu_action';
import { ChatRoomState } from '../reducers/chat_menu_reducer';

export let selectRoom: ChatRoomState;

export function* fetchselectItem(action: { type: string, payload: ChatRoomState }) {

    selectRoom = {
        roomId: action.payload.roomId,
        roomName: action.payload.roomName,
    },
        yield put(appMenuActions.updateOpenChat(false));
}

export default function* chat_menu_saga() {
    yield takeEvery('UPDATE_SELECTED_ROOM', fetchselectItem);
}
