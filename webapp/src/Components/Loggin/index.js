import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logInStart, signInWithGoogle, signInWithFacebook, resetTheAuthValues } from '../../redux/User/action';
import '../style.scss';
//Form
import Buttons from './../Forms/Button';
import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';



const mapState = ({ user }) => ({
    currentUser:user.currentUser
    
    
});

const Loggin = props =>{
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorRecognition, setErrorRecognition] = useState('');

    useEffect(() =>{
        if(currentUser){
            defaultform();
            props.history.push('/');
        }

    }, [currentUser]);


    const defaultform = () =>{
        setEmail('');
        setPassword('');
    }


    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(logInStart({email, password}));
        
    }

    const handleGoogleLogIn = () => {
        dispatch(signInWithGoogle());

    }
    const handleFacebookLogIn = () => {
        dispatch(signInWithFacebook());

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
                    <Link to="/">
                        <Buttons>
                          Cancel
                        </Buttons>
                            
                    </Link>

                    
                    
                    <div className="labelsocial">
                        <span><p>or connect with</p></span>
                    </div>

                    <div className="socialLogin">
                        <div className="row">
                            <Buttons onClick={handleGoogleLogIn}> 
                                <i className="fa fa-google"></i> 
                            </Buttons> 
                        </div>
                        <div className="row">
                            <Buttons onClick={handleFacebookLogIn}> 
                                <i className="fa fa-facebook"></i> 
                            </Buttons> 
                        </div>
                    </div>

                    <div className = "linkLogOrReg">
                        <p>Don't have account? <Link to="/Register">Register here</Link></p>

                    </div>

                    
                </form>

            </div>
            </div>

        </SubsContainer>
    );
}


export default withRouter(Loggin);