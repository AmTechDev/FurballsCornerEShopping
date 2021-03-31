import React from 'react';
import { useSelector } from 'react-redux';
import '../style.css'


const mapState = ({ user }) => ({
    currentUser: user.currentUser,
   
  }); 
const Account = props => {
    const { currentUser } = useSelector(mapState);
    return(
        <div className="account">
           <h1>
             Your Logged in!
            </h1> 
        </div>
        
    );
};

export default Account;