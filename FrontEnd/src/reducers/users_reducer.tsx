import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { userActions } from '../actions/user_action';

export const initialState = {
    data: [],
};

export const userReducer = reducerWithInitialState(initialState)
    .case(userActions.init, (state) => {
        return Object.assign({}, state);
    });
