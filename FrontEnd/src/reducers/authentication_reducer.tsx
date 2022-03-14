import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { authenticationActions } from '../actions/authentication_action';

export interface AuthenticationState {
    currentUser: string;
    password: string;
    isLoggedIn: boolean;
}

const initialState: AuthenticationState = {
    currentUser: '',
    password: '',
    isLoggedIn: false,
};

export const authenticationReducer = reducerWithInitialState(initialState)
    .case(authenticationActions.init, (state) => {
        return Object.assign({}, state, { });
    });
