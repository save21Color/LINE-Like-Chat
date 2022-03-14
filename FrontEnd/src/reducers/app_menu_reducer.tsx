import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { appMenuActions } from '../actions/app_menu_action';
import { chatMenuActions } from '../actions/chat_menu_action';

export interface AppMenuState {
    openChat: boolean;
}

const initialState: AppMenuState = {
    openChat: false,
};

export const appMenuReducer = reducerWithInitialState(initialState)
    .case(appMenuActions.updateOpenChat, (state, openChat) => {
        return Object.assign({}, state, { openChat });
    }).case(chatMenuActions.updateSelectedRoom, (state) => {
        const openChat = false;
        return Object.assign({}, state, { openChat });
    });
