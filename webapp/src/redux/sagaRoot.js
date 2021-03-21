import {all, call} from 'redux-saga/effects';
import sagaUser from './User/saga';
export default function* sagaRoot() {
    yield all([call(sagaUser)])
}