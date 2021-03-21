import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import '../style.css';
import { withRouter } from 'react-router-dom';
import { resetPassword, resetTheAuthValues } from '../../redux/User/action';

import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';
import Button from './../Forms/Button';


const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
})
const Retrieve = props => {
    const { resetPasswordSuccess,resetPasswordError } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [errorRecognition, setErrorRecognition] = useState([]);

    useEffect(() => {
        if (resetPasswordSuccess){
            dispatch(resetTheAuthValues());
            props.history.push('/login');
        }
    }, [resetPasswordSuccess]);

    useEffect(() => {
        if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0){
            setErrorRecognition(resetPasswordError);
        }
    }, [resetPasswordError]);


   const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPassword({ email }));

        
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
