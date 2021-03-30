import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutStart } from '../redux/User/action';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';



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
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/admin">
                  My Order
                </Link>
              </li>
              <li>
                <span className="logOut" onClick={() => logOut()}>
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