import typesUser from './types';
import { auth, handleUserAccount, GoogleProvider, FacebookProvider } from '../../firebase/code';


export const resetTheAuthValues = () => ({
    type: typesUser.RESET_AUTH_VALUE
});
export const logInStart = userCredentials => ({
    type: typesUser.LOG_IN_START,
    payload: userCredentials
});

export const logInSuccess = user  => ({
    type: typesUser.LOG_IN_SUCCESS,
    payload: user
});

export const userCheckSession =  () => ({
    type: typesUser.USER_CHECK_SESSION
});

export const logOutStart = () => ({
    type: typesUser.LOG_OUT_START
});
export const logOutSuccess = () => ({
    type: typesUser.LOG_OUT_SUCCESS
});

export const registerStart = userCredentials => ({
    type: typesUser.REGISTER_START,
    payload: userCredentials
});

export const errorUser = err =>({
    type: typesUser.ERROR_USER,
    payload: err
});


export const signInWithGoogle = () => async dispatch => {
    try{
        await auth.signInWithPopup(GoogleProvider)
        .then(() => {
            dispatch({
                type: typesUser.LOG_IN_SUCCESS,
                payload: true
            });
        })
    } catch(err) {

    }

};

export const signInWithFacebook = () => async dispatch => {
    try{
        auth.signInWithPopup(FacebookProvider);
    } catch(err) {

    }
    
};



export const setCurrentUser = user => ({
    type: typesUser.SET_CURRENT_USER,
    payload: user
});

export const registerUser = ({displayName, email, password, confirmPassword }) => async dispatch => {
    
    
};

//export const logInUser = ({ email, password }) => async dispatch => {
  

//};



export const resetPassword = ({ email }) => async dispatch => {
     const config = {
            url: 'http://localhost:3000/Login'
        };

        try{
        await auth.sendPasswordResetEmail(email, config)
         .then(() => {
             dispatch({
                 type: typesUser.RESET_PASSWORD_SUCCESS,
                 payload: true
             })

         })
         .catch(() => {
             
             const err = ['the email does not exist in any account.'];
             dispatch({
                 type: typesUser.RESET_PASSWORD_ERROR,
                 payload: err
             })
             
            
         });
    }catch(err){
        //console.log(err);
    }

};



