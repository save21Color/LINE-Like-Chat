import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const appMenuActions = {
    updateOpenChat: actionCreator<boolean>('UPDATE_OPEN_CHAT'),
};
