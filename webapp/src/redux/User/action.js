import typesUser from './types';
import { auth, handleUserAccount, GoogleProvider, FacebookProvider } from '../../firebase/code';

export const resetTheAuthValues = () => ({
    type: typesUser.RESET_AUTH_VALUE
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

export const logInSuccess = user  => ({
    type: typesUser.LOG_IN_SUCCESS,
    payload: user
});

export const logInStart = userCredentials => ({
    type: typesUser.LOG_IN_START,
    payload: userCredentials
});
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
    
    if (password !== confirmPassword){
        const err = ['Password Doesn\'t Match'];
        dispatch({
            type: typesUser.REGISTER_ERROR,
            payload: err
        });
        return;
        
    }
    try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await handleUserAccount(user, { displayName});
        dispatch({
            type: typesUser.REGISTER_SUCCESS,
            payload: true
        })
        
        



    } catch(err){
        //console.log(err);
    }
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



