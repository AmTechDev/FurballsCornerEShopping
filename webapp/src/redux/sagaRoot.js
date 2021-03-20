import {all, call} from 'redux-saga/effects';
import sagaUser from './User/saga';
export default function* saga() {
    yield all([call(sagaUser)])
}