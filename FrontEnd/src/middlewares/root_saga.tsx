import { call, put, takeEvery } from 'redux-saga/effects';
import { chatMenuActions } from '../actions/chat_menu_action';

import axios from 'axios';

export const fetchData = async () => {
   /* return new Promise((resolve: () => void, reject: () => void) => {
        resolve();
        reject();
    }).then(() => {
        return [
            {
                roomId: userId,
                roomName: 'aaa',
                selected: false,
            },
            {
                roomId: '0002',
                roomName: 'aab',
                selected: false,
            },
            {
                roomId: '0003',
                roomName: 'aac',
                selected: false,
            },
        ];
    });*/
    const res = await axios.get('/ChatRoomList/req');
    return res;
};

export function* getRoomList() {
    // const userId = action.payload;
    const res = yield call(fetchData);
    yield put(chatMenuActions.receiveAllChat(res.data));
}

export default function* rootSaga() {
    yield takeEvery('REQUEST_ALL_CHAT', getRoomList);
}
