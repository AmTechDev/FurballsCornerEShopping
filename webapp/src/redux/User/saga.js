import { takeLatest, call, all, put } from 'redux-saga/effects';
import typesUser from  './types';
import { logInSuccess, logOutSuccess, errorUser} from './action';
//Firebase 
import { auth, handleUserAccount, fetchCurrentUser, GoogleProvider, FacebookProvider } from '../../firebase/code';

export function* getSnapshotFromUserAuth(user) {
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
export function* elogIn({ payload: {email, password}}){
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
export function* onLogInStart(){
    yield takeLatest(typesUser.LOG_IN_START, elogIn);
}
export function* isAuthenticated(){
    try{
        const userAuth = yield fetchCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(err){
        //console.log(err);
    }
}
export function* onUserCheckSession() {
    yield takeLatest(typesUser.USER_CHECK_SESSION, isAuthenticated)
}
export function* logOutUser(){
    try{
        yield auth.signOut();
        yield put(
            logOutSuccess()
        )
    } catch(err){
        //console.log(err);
    }
}
export function* onLogOutStart () {
    yield takeLatest(typesUser.LOG_OUT_START, logOutUser );
}

export function* registerUser( {payload: {
    displayName,
    email,
    password,
    confirmPassword

}}){
    if (password !== confirmPassword){
        const err = ['Password Doesn\'t Match'];
        yield put(
            errorUser(err)
        );
    }
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield call (handleUserAccount, { userAuth: user, additionalData: { displayName } });
       
    } catch(err){
        //console.log(err);
    }

}
export function* onRegisterStart(){
    yield takeLatest(typesUser.REGISTER_START, registerUser);
}

export default function* sagaUser(){
    yield all([call(onLogInStart), call (onUserCheckSession), call(onLogOutStart), call(onRegisterStart)])
}

