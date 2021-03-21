import typesUser from './types';

const INITIAL_STATE = {
    currentUser: null,
    resetPasswordSuccess: false,
    errUser: []
    //logInSuccess: false,
   //registerSuccess: false,
   // registerError: [],
   // resetPasswordSuccess: false,
    //resetPasswordError: [],
    

};

const reducerUser = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case typesUser.LOG_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                errUser: []
            }
            case typesUser.RESET_PASSWORD_SUCCESS:
                return{
                    ...state,
                    resetPasswordSuccess: action.payload
                }
            case typesUser.ERROR_USER:
                return{
                    ...state,
                    errUser: action.payload
                }
        //case typesUser.SET_CURRENT_USER:
        //    return{
        //        ...state,
        //        currentUser: action.payload
        //    }
        //case typesUser.LOG_IN_SUCCESS:
        //    return{
        //        ...state,
        //        logInSuccess: action.payload
        //    }  
        //case typesUser.REGISTER_SUCCESS:
        //    return{
        //        ...state,
        //        registerSuccess: action.payload
        //    }
        //case typesUser.REGISTER_ERROR:
        //    return{
        //        ...state,
        //        registerError: action.payload
        //    }
        //case typesUser.RESET_PASSWORD_SUCCESS:
        //    return{
        //        ...state,
        //        resetPasswordSuccess: action.payload
        //    }
        //case typesUser.RESET_PASSWORD_ERROR:
        //    return{
        //         ...state,
        //         resetPasswordError: action.payload
        //    }
        //case typesUser.RESET_AUTH_VALUE:
        //    return{
        //        ...state,
        //        logInSuccess: false,
        //        registerSuccess: false,
        //        registerError: [],
        //        resetPasswordSuccess: false,
        //        resetPasswordError: [],
        //    }
        case typesUser.LOG_OUT_SUCCESS:
            case typesUser.RESETTING_USER:
                return{
                    ...state,
                    ...INITIAL_STATE
                }
            default:
                return state;
    }
};

export default reducerUser;