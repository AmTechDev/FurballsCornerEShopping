import React from 'react';
import { connect } from 'react-redux'
import {NavLink, Link } from 'react-router-dom'
import '../style.scss';

//Firebase Authentication
import {auth} from './../../firebase/code';

const Header = props => {
    const { currentUser} = props;
    return (
        <div class="navigation">
        <header className="header">
            <div className="head">
                <span><i className="fa fa-phone"></i> +(63)936-253-6583   </span>
               
               
            </div>
        </header>
        <nav className="nav">
            <div className="navbar">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="logo">
             
                  <img src="/assets/fclogo.png"/>
            
                <Link to="/">
                   <h1>Furballs Corner</h1>  
                </Link>
                   
               
                
            </div>
             <div className="box">
                <div className="search-box">
                     <input type="text" placeholder="Type here..."/>
                    <label for="" className="icon">
                         <i className="fa fa-search"></i>
                    </label>  
                </div>
             </div>
             <label for=""  className="searchicon">
                <i className="fa fa-search"></i>
             </label>  
            <ul div className="cart">
                <li><a href="#"><i className="fa fa-shopping-basket"></i></a></li>
            </ul>
            <div className="nav-links">
                { currentUser &&(
                     <ul className="nav-links">
                
                     <NavLink to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink>
                     <NavLink to="#" className="main-nav" activeClassName="main-nav-active">About</NavLink>
                     <li><a href="#category">Category</a></li>
                     <NavLink to="/ControlPanel" className="main-nav" activeClassName="main-nav-active">Account</NavLink>
                     <NavLink to="/Register" onClick={() => auth.signOut()} className="main-nav" activeClassName="main-nav-active">Logout</NavLink>
                 </ul>
                )}
                { !currentUser &&(
                    <ul  className="nav-links">
                
                        <NavLink to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink>
                        <Link to="#" className="main-nav" activeClassName="main-nav-active">About</Link>
                        <li><a href="#category">Category</a></li>
                        <NavLink to="/Login" className="main-nav" activeClassName="main-nav-active">Login</NavLink>
                        <NavLink to="/Register" className="main-nav" activeClassName="main-nav-active">Register</NavLink>
                    </ul>
                )}
                
            </div>
            
        </nav>
        </div>
    );
};

Header.defaultProps = {
    currentUser: null
};

const mapStateToProps = ({user}) =>({
    currentUser:user.currentUser

});
export default connect(mapStateToProps, null) (Header);
