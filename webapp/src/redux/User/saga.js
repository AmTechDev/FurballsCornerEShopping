import { takeLatest, call, all, put } from 'redux-saga/effects';
import typesUser from  './types';
import { logInSuccess} from './action';
//Firebase 
import { auth, handleUserAccount, GoogleProvider, FacebookProvider } from '../../firebase/code';


export function* logIn({ payload: {email, password}}){
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
       
        //dispatch({
        //    type: typesUser.LOG_IN_SUCCESS,
        //    payload: true
        //});
        
       

    } catch(err){
        //console.log(err);

    }
}

export function* getSnapshotFromUserAuth() {
    try{
              const userRef = yield call (handleUserAccount, {userAuth: user});
              const snapshot = yield userRef.get();
              yield put(
                logInSuccess({
                    id: snapshot.id,
                    ...snapshot.data()
                })
             );
    } catch(err){
        //console.log(err)
    }
}
export default function* sagaUser(){
    yield all([call(onLogInStart)])
}
export function* onLogInStart(){
    yield takeLatest(typesUser.LOG_IN_START, logIn);
}
