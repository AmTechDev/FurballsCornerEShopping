import { createStore, applyMiddleware, } from 'redux';
import logger from 'redux-logger';
import reducerRoot from './reducerRoot';
import thunk from'redux-thunk';



export const middlewares = [thunk,logger];

export const store = createStore(reducerRoot, applyMiddleware(...middlewares));

export default store;
