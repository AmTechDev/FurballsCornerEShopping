import { takeLatest, put, all, call } from 'redux-saga/effects';
import typesProducts from './types';
import { handleAddProduct, handleGetProduct } from './support';
import { settingProducts } from './actions';
//Firebase Auth
import { auth } from './../../firebase/code';

export function* addProduct({ payload:{
    productCategory,
    productName,
    productImage,
    productDesc,
    productPrice,
    productStock
}}){

    try{
        const timecreated = new Date();
        yield handleAddProduct({
            productCategory,
            productName,
            productImage,
            productDesc,
            productPrice,
            productStock,
            productAdminUID: auth.currentUser.uid,
            createdDate: timecreated
        }); 
    }catch(err){
        //console.log(err);
    }
}
export function* onAddProductStart(){
    yield takeLatest(typesProducts.ADD_NEW_PRODUCT_START, addProduct);
}
export function* getProduct(){
    try{
        const products = yield handleGetProduct();
        yield put(
            settingProducts(products)
        );
    } catch (err){
        //console.log(err);
    }
}
export function* onGetProductStart(){
    yield takeLatest(typesProducts.GET_PRODUCT_START, getProduct);
}
export default function* sagasProducts(){
    yield all([ call(onAddProductStart), call(onGetProductStart)])
};