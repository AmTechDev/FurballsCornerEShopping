import { takeLatest, call, all, put } from 'redux-saga/effects';
import typesUser from  './types';
import {  manageResetPasswordAPI } from './support';
import './errStyle.css';
import { logInSuccess, logOutSuccess, resetPasswordSuccess, errorUser} from './action';

//Firebase 
import { auth, handleUserAccount, fetchCurrentUser, GoogleProvider, FacebookProvider } from '../../firebase/code';

export function* getCaptureFromUserAuth(user, additionalData={}) {
    try{
              const userRef = yield call (handleUserAccount, {userAuth: user, additionalData});
              const capture = yield userRef.get();
              yield put(
                logInSuccess({
                    id: capture.id,
                    ...capture.data()
                })
             );
    } catch(err){
        //console.log(err)
    }
}
export function* elogIn({ payload: {email, password}}){
   //if (email!== password){
   //    const err = [<div className="err">Email and Password Doesn't Match</div>];
   //    yield put(
   //       errorUser(err)
   //     );
   //    return;
     //Can't put error recognition it will always read the false value after re entering the correct password  
  //  }
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getCaptureFromUserAuth(user);
        dispatch({
            type: typesUser.LOG_IN_SUCCESS,
            payload: true
       });
    } catch(err){
        //console.log(err);
        //alert(err)

    };
    //try{
    //    yield call(invalidPasswordLogin, email);
    //    yield put(
    //        logInSuccess()
    //    );
       
    //}catch(err){
    //    yield put(
    //        errorUser(err)
    //    )
            //console.log(err);
    //    }
}
export function* onLogInStart(){
    yield takeLatest(typesUser.LOG_IN_START, elogIn);
}
export function* isAuthenticated(){
    try{
        const userAuth = yield fetchCurrentUser();
        if(!userAuth) return;
        yield getCaptureFromUserAuth(userAuth);
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
        const err = [<div className="err">Password Doesn't Match</div>];
        yield put(
            errorUser(err)
        );
        return;
      
    }
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData = { displayName };
        yield getCaptureFromUserAuth(user, additionalData );
        //yield call (handleUserAccount, { userAuth: user, additionalData: { displayName } });
       
    } catch(err){
        //console.log(err);

    }

}
export function* onRegisterStart(){
    yield takeLatest(typesUser.REGISTER_START, registerUser);
}

export function* googleLogIn(){
    try{
        const { user } = yield auth.signInWithPopup(GoogleProvider);
        yield getCaptureFromUserAuth(user);
    } catch(err) {

    }
}
export function* onGoogleLogInStart(){
    yield takeLatest(typesUser.GOOGLE_LOG_IN_START, googleLogIn)
}

export function* facebookLogIn(){
    try{
       const { user } = yield auth.signInWithPopup(FacebookProvider);
       yield getCaptureFromUserAuth(user);
    } catch(err) {

    }
}
export function* onfacebookLogInStart(){
    yield takeLatest(typesUser.FACEBOOK_LOG_IN_START, facebookLogIn)
}

export function* resetPassword({ payload: { email}}){
    try{
        yield call(manageResetPasswordAPI, email);
        yield put(
          resetPasswordSuccess()  
        );
    }catch(err){
        yield put(
            errorUser(err)
        )
            //console.log(err);

        }
};

export function* onResetPasswordStart(){
    yield takeLatest(typesUser.RESET_PASSWORD_START, resetPassword);
};

export default function* sagaUser(){
    yield all([call(onLogInStart), call (onUserCheckSession), call(onLogOutStart), call(onRegisterStart), call(onResetPasswordStart), call(onGoogleLogInStart), call(onfacebookLogInStart),])
};

