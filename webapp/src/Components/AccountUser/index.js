import React from 'react';
import '../style.css';
import iconIMG from './../../image/usericon.png';



const AccountUser = props => {
  //const mapState = ({ user }) => ({
  //  currentUser: user.currentUser
  //})
  //const { currentUser } = useSelector(mapState);  
  const { currentUser } = props;
  const { displayName } = currentUser;

  
  return (
    <div className="accountUser">
      <ul>
        <li>
          <div className="profile">
            <img src={iconIMG} />
          </div>
        </li>
        <li>
          <span className="displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AccountUser;