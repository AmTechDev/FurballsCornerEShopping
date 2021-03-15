import { createStore, compose, applyMiddleware, combineReducers, } from 'redux';
import logger from 'redux-logger';
import reducerRoot from './reducerRoot';



export const middlewares = [logger];

export const store = createStore(reducerRoot, applyMiddleware(...middlewares));

export default store;
