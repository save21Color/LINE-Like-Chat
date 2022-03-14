import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { appMenuActions } from '../actions/app_menu_action';
import { withStylesAppMenuComponent } from '../components/app_menu_component';
import { withRouter } from 'react-router-dom';

export interface AppMenuActions {
    updateOpenChat: (v: boolean) => Action<boolean>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        updateOpenChat: (v: boolean) => dispatch(appMenuActions.updateOpenChat(v)),
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.appMenu);
}

const appMenuContainer =
    withRouter(connect(mapStateToProps, mapDispatchToProps)(withStylesAppMenuComponent));
export { appMenuContainer as AppMenuContainer };

// export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);
