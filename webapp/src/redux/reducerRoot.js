import { combineReducers } from 'redux';
import reducerUser from './User/reducer';
import reducerProducts from './Products/reducer'
export default combineReducers({
    user:reducerUser,
    dataProducts: reducerProducts
});