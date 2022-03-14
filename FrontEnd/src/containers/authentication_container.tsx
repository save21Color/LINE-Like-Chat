import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import { authenticationActions } from '../actions/authentication_action';
import { AuthenticationComponent } from '../components/authentication_component';

export interface AuthenticationActions {
    init: () => Action<void>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<any>>) {
    return {
        getCurrentUser: () => dispatch(authenticationActions.init()),
    };
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.authentication);
}

const authoricationContainer = connect(mapStateToProps, mapDispatchToProps)(AuthenticationComponent);
export { authoricationContainer as AuthoricationContainer };
