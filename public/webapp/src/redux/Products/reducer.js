import typesProducts from './types';


const INITIAL_STATE = {
    products: []
}
const reducerProducts = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case typesProducts.SETTING_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
};

export default reducerProducts;