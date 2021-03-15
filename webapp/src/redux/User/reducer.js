import typesUser from './types';

const INITIAL_STATE = {
    currentUser: null
};

const reducerUser = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case typesUser.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
            default:
                return state;
    }
};

export default reducerUser;