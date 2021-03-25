import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { logInStart, googleLogInStart, facebookLogInStart, resetTheAuthValues } from '../../redux/User/action';
import '../style.css';
//Form
import Buttons from './../Forms/Button';
import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';



const mapState = ({ user }) => ({
    currentUser:user.currentUser
   
    
});

const Loggin = props =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);  
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorRecognition, setErrorRecognition] = useState('');

    useEffect(() =>{
        if(currentUser){
            defaultform();
            history.push('/');
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
        dispatch(googleLogInStart());

    }
    const handleFacebookLogIn = () => {
        dispatch(facebookLogInStart());

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
                        <Link to="/RecoverPass" className="resetpass" >
                            Forgot Password
                        </Link>
                    </div>

                    <Buttons type="submit">
                        Login
                    </Buttons>
                    <div className="cancelbtn">
                       <Link to="/">
                        <Buttons>
                          Cancel
                        </Buttons>  
                        </Link> 
                    </div>
                    

                    
                    
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
                        <p>Don't have account? <Link to="/Register" className="here">Register here</Link></p>

                    </div>

                    
                </form>

            </div>
            </div>

        </SubsContainer>
    );
}


export default Loggin;