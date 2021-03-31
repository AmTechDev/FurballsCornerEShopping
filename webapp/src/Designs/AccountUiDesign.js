import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutStart } from '../redux/User/action';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

//icon
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const AccountUiDesign = props => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutStart()); 
  };

  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="sideNav">
        <div className="side">
          <Sidebar>
            <ul>
              <li>
                <Link to="/Account">
                <FormControlLabel 
                control ={<PersonRoundedIcon />}
                label = ""
                /> 
                 My Profile
                </Link>
              </li>
              <li>
                <Link to="/Account">
                <FormControlLabel 
                control ={<CreditCardIcon />}
                label = ""
                />  My Order
                </Link>
              </li>
              <li>
                <span className="logOut" onClick={() => logOut()}>
                <FormControlLabel 
                control ={<ExitToAppIcon />}
                label = ""
                /> 
                  Logout
                </span>
              </li>
            </ul>
          </Sidebar>
        </div>
        <div className="adminbody">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AccountUiDesign;