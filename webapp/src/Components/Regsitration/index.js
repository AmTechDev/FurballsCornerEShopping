import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../style.scss';

//Forms
import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';
import Button from './../Forms/Button';


//Firebase Authentication
import{ signInWithGoogle,auth, handleUserAccount} from './../../firebase/code';

const initialState = {
    displayName:'',
    email:'',
    password: '',
    confirmPassword:'',
    errorRecognition: []
};

const Registration = props => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorRecognition, setErrorRecognition] = useState('');

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorRecognition([]);
    }


    const handleSubmitForm = async event => {
        event.preventDefault();
       

        if (password !== confirmPassword){
            const err = ['Password Doesn\'t Match'];
            setErrorRecognition(err);
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserAccount(user, { displayName});

            reset();
            props.history.push('/');



        } catch(err){

        }
    }

       
        const configSubsContainer = {headline:'Registration'};
        return(
            <SubsContainer {...configSubsContainer}>

                    <div className="wrapForm">
                    {errorRecognition.length > 0 && (
                        <ul>
                            {errorRecognition.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                )

                            })}
                        </ul>
                    )}
                    <form onSubmit={handleSubmitForm}>

                        <TextfieldForm 
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Enter Fullname"
                        handleChange={e => setDisplayName(e.target.value)}
                        
                        />

                        <TextfieldForm 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter Email"
                        handleChange={e => setEmail(e.target.value)}
                        
                        />

                        <TextfieldForm 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter Password"
                        handleChange={e => setPassword(e.target.value)}
                        
                        />

                        <TextfieldForm 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e => setConfirmPassword(e.target.value)}
                        
                        />

                        <Button type="submit">
                            Register
                        </Button>
                        <Link to="/Login">
                            <Button type="button">
                                Login
                             </Button>
                         </Link>

                        <div className="labelsocial">
                        <span><p>or connect with</p></span>
                         </div>

                    <div className="socialLogin">
                        <div className="row">
                            <Button onClick={signInWithGoogle}> 
                                <i className="fa fa-google"></i> 
                            </Button> 
                        </div>
                        <div className="row">
                            <Button onClick={signInWithGoogle}> 
                                <i className="fa fa-facebook"></i> 
                            </Button> 
                        </div>
                    </div>

                    </form>
                    </div>
              
           </SubsContainer>
        );
    }


export default withRouter(Registration);