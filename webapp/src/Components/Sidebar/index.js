import React from 'react';
import { useSelector } from 'react-redux';
import '../style.css';
import AccountUser from './../AccountUser';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const Sidebar = ({ children }) => {
  const { currentUser } = useSelector(mapState);

  const configAccountUser = {
    currentUser
  };

  return (
    <div className="sidebar">

      <AccountUser {...configAccountUser} />

      <div className="menu">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;