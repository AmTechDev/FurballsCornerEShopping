import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutStart } from './../redux/User/action';
import Header from './../Components/Header';
import Sidebar from './../Components/Sidebar';

//icon
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const AdminUIDesign = props => {
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
                <Link to="/admin">
                <FormControlLabel 
                control ={<AssignmentIcon />}
                label = ""
                /> Home
                </Link>
              </li>
              <li>
                <Link to="/admin">
                <FormControlLabel 
                control ={<LocalShippingIcon />}
                label = ""
                />Process Order
                </Link>
              </li>
        
              <li>
                <Link to="/admin">
                <FormControlLabel 
                control ={<GroupAddIcon />}
                label = ""
                /> Employee Account
                </Link>
              </li>
              <li>
                <Link to="/admin">
                <FormControlLabel 
                control ={<PeopleAltIcon />}
                label = ""
                />Customer Account
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

export default AdminUIDesign;