import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const userActions = {
    init: actionCreator('INIT'),
    addTodo: actionCreator('ADD_TODO'),
    removeTodo: actionCreator('REMOVE_TODO'),
};
