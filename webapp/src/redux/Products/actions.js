import typesProducts from './types';

export const addProductStart = dataProduct => ({
    type: typesProducts.ADD_NEW_PRODUCT_START,
    payload: dataProduct
});

export const getProductStart = () => ({
    type: typesProducts.GET_PRODUCT_START
});

export const settingProducts = products =>({
    type: typesProducts.SETTING_PRODUCTS,
    payload:products
});