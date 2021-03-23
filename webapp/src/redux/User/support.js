import { auth } from './../../firebase/code';
import './errStyle.css';
export const manageResetPasswordAPI = (email) => {
    const config = {
        url: 'http://localhost:3000/Login'
    };
    return new Promise((resolve, reject ) => {
       

        auth.sendPasswordResetEmail(email, config)
         .then(() => {
             resolve();

         })
         .catch(() => {
             
             const err = [<div className="err">the email does not exist in any account.</div>];
            reject(err);
             
            
         });
    });
};

