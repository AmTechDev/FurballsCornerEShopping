import typesUser from './types';


//export const setCurrentUser = user => ({
//    type: typesUser.SET_CURRENT_USER,
//    payload: user
//});
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

export const resetPasswordStart = userCredentials => ({
    type: typesUser.RESET_PASSWORD_START,
    payload: userCredentials
});

export const resetPasswordSuccess = () => ({
    type: typesUser.RESET_PASSWORD_SUCCESS,
    payload: true
});

export const errorUser = err =>({
    type: typesUser.ERROR_USER,
    payload: err
});

export const resettingUser = () => ({
    type:typesUser.RESETTING_USER
});

export const googleLogInStart = () => ({
    type: typesUser.GOOGLE_LOG_IN_START
});
export const facebookLogInStart = () => ({
    type: typesUser.facebook_LOG_IN_START
});






