import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';
import { resetTheAuthValues } from '../redux/User/action';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account'});


export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
FacebookProvider.setCustomParameters({ prompt: 'select_account'});


export const handleUserAccount = async ({userAuth, additionalData}) => {
    if (!userAuth) return;

    const { uid } = userAuth;

    const userRef = firestore.doc(`users/${uid}`);
    const capture = await userRef.get();

    if (!capture.exists){

        const { displayName, email} = userAuth;
        const timestamp = new Date();
        const rolesUI = ['user'];

        try{
            await userRef.set({
                displayName,
                email,
                joined: timestamp,
                rolesUI,
                ...additionalData

            });

        }catch(err){

        }
    }
    return userRef;
};

export const fetchCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const deregister = auth.onAuthStateChanged(userAuth =>{
            deregister();
            resolve(userAuth);
        }, reject);
    })
}