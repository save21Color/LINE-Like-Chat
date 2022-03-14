import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { chatMenuActions } from '../actions/chat_menu_action';
import { ChatRoomState } from '../reducers/chat_menu_reducer';
import { withStylesChatMenuComponent } from '../components/chat_menu_component';
import { withRouter } from 'react-router-dom';

export interface ChatMenuActions {
    requestAllChat: (v: string) => Action<string>;
    receiveAllChat: (v: {}) => Action<{}>;
    updateOpen: (v: boolean) => Action<boolean>;
    updateSelectedRoom: (v: ChatRoomState) => Action<ChatRoomState>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        requestAllChat: (v: string) => dispatch(chatMenuActions.requestAllChat(v)),
        receiveAllChat: (v: {}) => dispatch(chatMenuActions.receiveAllChat(v)),
        updateOpen: (v: boolean) => dispatch(chatMenuActions.updateOpen(v)),
        updateSelectedRoom: (v: ChatRoomState) => dispatch(chatMenuActions.updateSelectedRoom(v)),
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.chatMenu);
}

const chatMenuContainer =
    withRouter(connect(mapStateToProps, mapDispatchToProps)(withStylesChatMenuComponent));
export { chatMenuContainer as ChatMenuContainer };

// export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);
