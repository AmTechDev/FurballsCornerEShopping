import {all, call} from 'redux-saga/effects';
import sagaUser from './User/saga';
import sagasProducts from './Products/saga';
export default function* sagaRoot() {
    yield all([call(sagaUser), call(sagasProducts)])
}
