import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logInUser } from './../../redux/User/actions';
import '../style.scss';
//Form
import Buttons from './../Forms/Button';
import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';
//Firebase Authentication
import {signInWithGoogle, signInWithFacebook} from '../../firebase/code';


const mapState = ({ user }) => ({
    logInSuccess:user.logInSuccess,
    logInError:user.logInError
    
});

const Loggin = props =>{
    const { logInSuccess, logInError } = useSelector(mapState);
    const dispatch = useDispatch();
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorRecognition, setErrorRecognition] = useState('');

    useEffect(() =>{
        if(logInSuccess){
            defaultform()
            props.history.push('/');
        }

    }, [logInSuccess]);
    useEffect(() =>{
        if(logInError){
            if(Array.isArray(logInError) && logInError.length > 0){
                setErrorRecognition(logInError);
            }
        }

    }, [logInError]);

    const defaultform = () =>{
        setEmail('');
        setPassword('');
    }


const handleSubmit = async e =>{
        e.preventDefault();
        dispatch(logInUser({email, password}));
        
    }


        const configSubsContainer = {headline:'Login'};
    return(
        <SubsContainer {...configSubsContainer}>
            <div className="wrapForm">
            <div className="formContainer">
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
                <form onSubmit={handleSubmit}>
                
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
                        value={ password}
                        placeholder="Enter Password"
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <div className="link">
                        <Link to="/RecoverPass">
                            Forgot Password
                        </Link>
                    </div>

                    <Buttons type="submit">
                        Login
                    </Buttons>
                    <Link to="/Register">
                        <Buttons type="button">
                            Register
                        </Buttons>
                    </Link>
                   
                    

                    <div className="labelsocial">
                        <span><p>or connect with</p></span>
                    </div>

                    <div className="socialLogin">
                        <div className="row">
                            <Buttons onClick={signInWithGoogle}> 
                                <i className="fa fa-google"></i> 
                            </Buttons> 
                        </div>
                        <div className="row">
                            <Buttons onClick={signInWithFacebook}> 
                                <i className="fa fa-facebook"></i> 
                            </Buttons> 
                        </div>
                    </div>

                    
                </form>

            </div>
            </div>

        </SubsContainer>
    );
}


export default withRouter(Loggin);