import { combineReducers } from 'redux';
import reducerUser from './User/reducer';

export default combineReducers({
    user:reducerUser
});