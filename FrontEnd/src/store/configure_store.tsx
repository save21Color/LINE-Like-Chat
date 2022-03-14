import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import createHashHistory from 'history/createHashHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as ReduxSaga from 'redux-saga';
import root_saga from '../middlewares/root_saga';
import chat_menu_saga from '../middlewares/chat_menu_saga';
import chat_saga from '../middlewares/chat_saga';

export const history = createHashHistory();
const createSagaMiddleware = ReduxSaga.default;
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
    ),
);

function configureStore(initialState: any) {
    const store = createStore(connectRouter(history)(rootReducer), initialState, enhancer);
    sagaMiddleware.run(root_saga);
    sagaMiddleware.run(chat_menu_saga);
    sagaMiddleware.run(chat_saga);
    return store;
}

export { configureStore };
