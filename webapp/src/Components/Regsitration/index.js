import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { registerStart, signInWithGoogle, signInWithFacebook, resetTheAuthValues } from '../../redux/User/action';
import '../style.css';
//Forms
import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';
import Button from './../Forms/Button';


const initialState = {
    displayName:'',
    email:'',
    password: '',
    confirmPassword:'',
    errorRecognition: []
};

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    errorUser: user.errorUser
});
const Registration = props => {

    const { currentUser, errorUser} = useSelector(mapState);
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorRecognition, setErrorRecognition] = useState('');

    useEffect(() => {
        if (currentUser){
            reset();
            props.history.push('/');
        }
    }, [currentUser]);
    useEffect(() => {
        if(Array.isArray(errorUser) && errorUser.length > 0){
            setErrorRecognition(errorUser);
        }
    }, [errorUser]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorRecognition([]);
    }


    const handleSubmitForm =  event => {
        event.preventDefault();
        dispatch(registerStart({
            displayName,
            email,
            password,
            confirmPassword
        }));
    }

    const handleGoogleLoggingIn = () => {
        dispatch(signInWithGoogle());

    }
    const handleFacebookLoggingIn = () => {
        dispatch(signInWithFacebook());

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

                         <Link to="/">
                             <Button>
                                Cancel
                             </Button>
                            
                        </Link>

                        <div className="labelsocial">
                        <span><p>or connect with</p></span>
                         </div>

                    <div className="socialLogin">
                        <div className="row">
                            <Button onClick={handleGoogleLoggingIn}> 
                                <i className="fa fa-google"></i> 
                            </Button> 
                        </div>
                        <div className="row">
                            <Button onClick={handleFacebookLoggingIn}> 
                                <i className="fa fa-facebook"></i> 
                            </Button> 
                        </div>
                    </div>
                    <div className = "linkLogOrReg">
                        <p>Already have an account? <Link to="/Login">Login here</Link></p>

                    </div>

                    </form>
                    </div>
              
           </SubsContainer>
        );
    }


export default withRouter(Registration);