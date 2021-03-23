import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminverification } from './../../service';
import '../style.css';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})
const RedirectAdminPage = props => {
    const { currentUser } = useSelector(mapState);

    const theAdmin = adminverification(currentUser);
    if (!theAdmin) return null;

    
    return (
        <div className="adminBTN">
            <ul>
                <li>
                    <Link to="/Admin">
                    My Admin
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default RedirectAdminPage;