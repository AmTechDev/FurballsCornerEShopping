import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

const FacebookProvider = new firebase.auth.FacebookAuthProvider();
FacebookProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithFacebook = () => auth.signInWithPopup(FacebookProvider);

export const handleUserAccount = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const { uid } = userAuth;

    const userRef = firestore.doc(`users/${uid}`);
    const capture = await userRef.get();

    if (!capture.exitst){

        const { displayName, email} = userAuth;
        const timestamp = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                joined: timestamp,
                ...additionalData

            });

        }catch(err){

        }
    }
    return userRef;
};