import { combineReducers } from 'redux';
import { loginReducer, LoginState } from './login_reducer';
import { authenticationReducer, AuthenticationState } from './authentication_reducer';
import { AppMenuState, appMenuReducer } from './app_menu_reducer';
import { ChatMenuState, chatMenuReducer } from './chat_menu_reducer';
import { ChatRoomValueState, chatRoomReducer } from './chat_room_reducer';

export type AppState =
    {
        login: LoginState,
        user: LoginState,
        authentication: AuthenticationState,
        appMenu: AppMenuState,
        chatMenu: ChatMenuState,
        chatroom: ChatRoomValueState,
    };

export const rootReducer = combineReducers({
    login: loginReducer,
    user: loginReducer,
    authentication: authenticationReducer,
    appMenu: appMenuReducer,
    chatMenu: chatMenuReducer,
    chatroom: chatRoomReducer,
});
