import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import '../style.css';
import { useHistory } from 'react-router-dom';
import { resetPasswordStart, resetTheAuthValues, resettingUser } from '../../redux/User/action';

import SubsContainer from './../SubsContainer';
import TextfieldForm from './../Forms/TextfieldForm';
import Button from './../Forms/Button';


const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    errUser: user.errUser
    //resetPasswordError: user.resetPasswordError

});
const Retrieve = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { resetPasswordSuccess,errUser } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [errorRecognition, setErrorRecognition] = useState([]);

    useEffect(() => {
        if (resetPasswordSuccess){
            dispatch(resettingUser());
            history.push('/login');
        }
    }, [resetPasswordSuccess]);

    useEffect(() => {
        if(Array.isArray(errUser) && errUser.length > 0){
            setErrorRecognition(errUser);
        }
    }, [errUser]);


   const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPasswordStart({ email }));

        
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


export default Retrieve;
