import { firestore } from './../../firebase/code';

export const handleAddProduct = product => {
    return new Promise((resolve, reject) =>{
        firestore
            .collection('Products')
            .doc()
            .set(product)
            .then(() =>{
                resolve()
            })
            .catch(err => {
                reject(err);
            })
    });
}

export const handleGetProduct = () => {
    return new Promise((resolve, reject) => {
        firestore
        .collection('Products')
        .get()
        .then(capture =>{
            const arrayProducts = capture.docs.map(doc => {
                return{
                    ...doc.data(),
                    documentID: doc.id
                }
            });
            resolve(arrayProducts);
        })
        .catch(err => {
            reject(err);
        })
    })
}