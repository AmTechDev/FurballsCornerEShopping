import React, { Component } from 'react';
import '../style.scss';

//Forms
import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';
import Button from './../Forms/Button';


//Firebase Authentication
import{ auth, handleUserAccount} from './../../firebase/code';

const initialState = {
    displayName:'',
    email:'',
    password: '',
    confirmPassword:'',
    errorRecognition: []
};

class Registration extends Component {
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

    handleSubmitForm = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state; 

        if (password !== confirmPassword){
            const err = ['Password Doesn\'t Match'];
            this.setState({
                errorRecognition: err
            });
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserAccount(user, { displayName});

            this.setState({
                ...initialState
            });



        } catch(err){

        }
    }
    render(){

        const { displayName, email, password, confirmPassword, errorRecognition } = this.state;
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
                    <form onSubmit={this.handleSubmitForm}>

                        <TextfieldForm 
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Enter Fullname"
                        onChange={this.handleChange}
                        
                        />

                        <TextfieldForm 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={this.handleChange}
                        
                        />

                        <TextfieldForm 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={this.handleChange}
                        
                        />

                        <TextfieldForm 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        
                        />

                        <Button type="submit">
                            Register
                        </Button>

                        <div className="labelsocial">
                        <span><p>or connect with</p></span>
                         </div>

                    <div className="socialLogin">
                        <div className="row">
                            <Button> 
                                <i className="fa fa-google"></i> 
                            </Button> 
                        </div>
                        <div className="row">
                            <Button > 
                                <i className="fa fa-facebook"></i> 
                            </Button> 
                        </div>
                    </div>

                    </form>
                    </div>
              
           </SubsContainer>
        );
    }
}

export default Registration;