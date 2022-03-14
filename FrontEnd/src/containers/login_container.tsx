import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { loginActions } from '../actions/login_action';
import { withStylesLoginComponent } from '../components/login_component';
import { withRouter } from 'react-router-dom';

export interface LoginActions {
    updateUserid: (v: string) => Action<string>;
    updatePassword: (v: string) => Action<string>;
    changeShowPassword: () => Action<void>;
    login: () => Action<void>;
    logout: () => Action<void>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        updateUserid: (v: string) => dispatch(loginActions.updateUserid(v)),
        updatePassword: (v: string) => dispatch(loginActions.updatePassword(v)),
        changeShowPassword: () => dispatch(loginActions.changeShowPassword()),
        login: () => dispatch(loginActions.login()),
        logout: () => dispatch(loginActions.logout()),
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.login);
}

const loginContainer =
    withRouter(connect(mapStateToProps, mapDispatchToProps)(withStylesLoginComponent));
export { loginContainer as LoginContainer };

// export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);
