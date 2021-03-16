import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../style.scss';
import Buttons from './../Forms/Button';
import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';


//firebase Authentication
import {signInWithGoogle, auth} from '../../firebase/code';




const Loggin = props =>{
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const defaultform = () =>{
        setEmail('');
        setPassword('');
    }


const handleSubmit = async e =>{
        e.preventDefault();
        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            defaultform()
            props.history.push('/');

        } catch(err){

        }
    }


        const configSubsContainer = {headline:'Login'};
    return(
        <SubsContainer {...configSubsContainer}>
            <div className="wrapForm">
            <div className="formContainer">
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
                   

                    <Buttons type="submit">
                        Login
                    </Buttons>
                    <div className="link">
                        <Link to="/RecoverPass">
                            Forgot Password
                        </Link>
                    </div>

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
                            <Buttons > 
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