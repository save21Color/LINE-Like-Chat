import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const loginActions = {
    login: actionCreator('LOGIN'),
    logout: actionCreator('LOGOUT'),
    changeShowPassword: actionCreator('CHANGE_SHOWPASSWORD'),
    updateUserid: actionCreator<string>('UPDATE_USERID'),
    updatePassword: actionCreator<string>('UPDATE_PASSWORD'),
};
