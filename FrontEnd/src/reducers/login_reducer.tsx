import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { loginActions } from '../actions/login_action';

export interface LoginState {
    userid: string;
    password: string;
    showPassword: boolean;
    isSuccess: boolean;
}

const initialState: LoginState = {
    userid: '',
    password: '',
    showPassword: false,
    isSuccess: false,
};

export const loginReducer = reducerWithInitialState(initialState)
    .case(loginActions.updateUserid, (state, userid) => {
        return Object.assign({}, state, { userid });
    })
    .case(loginActions.updatePassword, (state, password) => {
        return Object.assign({}, state, { password });
    })
    .case(loginActions.changeShowPassword, (state) => {
        const showPassword = !state.showPassword;
        return Object.assign({}, state, { showPassword });
    })
    .case(loginActions.login, (state) => {
        localStorage.setItem('currentUser', JSON.stringify({ currentUser: state.userid, password: state.password, isLoggedIn: true }));
        state.isSuccess = true;
        return Object.assign({}, state);
    })
    .case(loginActions.logout, (state) => {
        return Object.assign({}, state, { });
    });
