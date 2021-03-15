import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.scss';
import Buttons from './../Forms/Button';
import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';


//firebase Authentication
import {signInWithGoogle, auth} from '../../firebase/code';

const initialState = {
    email:'',
    password:''
};


class Loggin extends Component{

    constructor(props){
        super(props);
        this.state = {
            ...initialState
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const { email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });

        } catch(err){

        }
    }
    render(){

        const { email, password } = this.state;

        const configSubsContainer = {headline:'Login'};
    return(
        <SubsContainer {...configSubsContainer}>
            <div className="wrapForm">
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                
                    <TextfieldForm 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter Email"
                        handleChange={this.handleChange}
                    />

                    <TextfieldForm 
                        type="password"
                        name="password"
                        value={ password}
                        placeholder="Enter Password"
                        handleChange={this.handleChange}
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
    };
};

export default Loggin;