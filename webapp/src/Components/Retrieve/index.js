import React, { useState} from 'react';
import '../style.scss';
import { withRouter } from 'react-router-dom';

import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';
import Button from './../Forms/Button';

//Firebase Authentication
import { auth } from './../../firebase/code'


const Retrieve = props => {
    const [email, setEmail] = useState('');
    const [errorRecognition, setErrorRecognition] = useState([])


   const handleSubmit = async (e) => {
        e.preventDefault();

        try{
          
            const config = {
                url: 'http://localhost:3000/Login'
            };

            await auth.sendPasswordResetEmail(email, config)
             .then(() => {
                 props.history.push('/login');

             })
             .catch(() => {
                 
                 const err = ['There\'s no account assosiating with this email.'];
                 setErrorRecognition(err);
             });

         

        }catch(err){

        }
    }

        const configSubsContainer = {headline:'Forget Password'};
        return(
            <SubsContainer {...configSubsContainer}>
                <div className="wrapForm">

                { errorRecognition.length > 0 && (
                        <ul>
                            { errorRecognition.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                );

                            })}
                        </ul>
                    )}

                    <form onSubmit={handleSubmit}>
                        <TextfieldForm 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter Email"
                            handleChange={e => setEmail(e.target.value)}
                        />
                        <Button type="submit">
                            Send Link
                        </Button>
                    </form>
                </div>

            </SubsContainer>

        );
    }


export default withRouter(Retrieve);
