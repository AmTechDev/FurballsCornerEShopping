import { createStore, applyMiddleware, } from 'redux';
import logger from 'redux-logger';
import reducerRoot from './reducerRoot';
import sagaMiddleware from 'redux-saga';
import thunk from'redux-thunk';
import saga from './sagaRoot';


const createSaga = sagaMiddleware();

export const middlewares = [thunk, createSaga,logger];

export const store = createStore(reducerRoot, applyMiddleware(...middlewares));
createSaga.run(saga);

export default store;
