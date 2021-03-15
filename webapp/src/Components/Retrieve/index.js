import React, { Component} from 'react';
import '../style.scss';
import { withRouter } from 'react-router-dom';

import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';
import Button from './../Forms/Button';

//Firebase Authentication
import { auth } from './../../firebase/code'

const initialState = {
    email: '', 
    errorRecognition: [] 
};
class Retrieve extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...initialState
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const{ email } = this.state;

            const config = {
                url: 'http://localhost:3000/Login'
            };

            await auth.sendPasswordResetEmail(email, config)
             .then(() => {
                 this.props.history.push('/login');

             })
             .catch(() => {
                 
                 const err = ['There\'s no account assosiating with this email.'];
                 this.setState({
                    errorRecognition: err
                 });

             });

        }catch(err){

        }
    }

    render(){
        const{ email, errorRecognition } = this.state;
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

                    <form onSubmit={this.handleSubmit}>
                        <TextfieldForm 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={this.handleChange}
                        />
                        <Button type="submit">
                            Send Link
                        </Button>
                    </form>
                </div>

            </SubsContainer>

        );
    }
}

export default withRouter(Retrieve);
