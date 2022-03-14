import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const authenticationActions = {
    init: actionCreator<void>('INIT'),
};
