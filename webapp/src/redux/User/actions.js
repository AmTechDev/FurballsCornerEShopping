import typesUser from './types';
import { auth } from './../../firebase/code';
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
         //setErrorRecognition(err);
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
}

export const logInUser = ({ email, password }) => async dispatch =>{
    if (password !== email){
        const err = ['Email and Password Doesn\'t Match'];
        dispatch({
            type: typesUser.LOG_IN_ERROR,
            payload: err
        });
        return;
         //setErrorRecognition(err);
    }
    try{
        await auth.signInWithEmailAndPassword(email, password);
        dispatch({
            type: typesUser.LOG_IN_SUCCESS,
            payload: true
        });
       

    } catch(err){
        //console.log(err);

    }

}

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
             //props.history.push('/login');

         })
         .catch(() => {
             
             const err = ['the email does not exist in any account.'];
             dispatch({
                 type: typesUser.RESET_PASSWORD_ERROR,
                 payload: err
             })
             //setErrorRecognition(err);
         });
    }catch(err){
        //console.log(err);
    }

}
