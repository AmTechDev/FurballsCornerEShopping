import typesUser from './types';

const INITIAL_STATE = {
    currentUser: null,
    logInSuccess: false,
    logInError: [],
    registerSuccess: false,
    registerError: [],
    resetPasswordSuccess: false,
    resetPasswordError: []

};

const reducerUser = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case typesUser.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        case typesUser.LOG_IN_SUCCESS:
            return{
                ...state,
                logInSuccess: action.payload
            }
        case typesUser.LOG_IN_ERROR:
            return{
                ...state,
                logInError: action.payload
            }    
        case typesUser.REGISTER_SUCCESS:
            return{
                ...state,
                registerSuccess: action.payload
            }
        case typesUser.REGISTER_ERROR:
            return{
                ...state,
                registerError: action.payload
            }
        case typesUser.RESET_PASSWORD_SUCCESS:
            return{
                ...state,
                resetPasswordSuccess: action.payload
            }
        case typesUser.RESET_PASSWORD_ERROR:
            return{
                 ...state,
                 resetPasswordError: action.payload
            }

            default:
                return state;
    }
};

export default reducerUser;