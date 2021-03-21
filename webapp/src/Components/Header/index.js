import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  {NavLink, Link } from 'react-router-dom';
import { logOutStart } from './../../redux/User/action';
import '../style.css';



const mapState = ({user}) =>({
    currentUser:user.currentUser

});

const Header = props => {
const dispatch = useDispatch();
const [click, setClick] = useState (false);
const handleClick = () => setClick(!click);
const { currentUser} = useSelector(mapState);
const signOut = () => {
    dispatch(logOutStart());
};
    return (
        <div class="navigation">
        <header className="header">
            <div className="head">
                <span><i className="fa fa-phone"></i> +(63)936-253-6583   </span>
               
               
            </div>
        </header>
        <nav className="nav">
            <div className="navbar" onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
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
            <div className= {click ? "nav-links active" : "nav-links"}>
                { currentUser &&(
                     <ul className="nav-links">
                
                     <NavLink to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink>
                     <NavLink to="/AboutUs" className="main-nav" className="main-nav" activeClassName="main-nav-active">About</NavLink>
                     <li ><a href="#category">Category</a></li>
                     <NavLink to="/Account" className="main-nav" activeClassName="main-nav-active">Account</NavLink>
                     <NavLink to="/" onClick={() => signOut()} className="main-nav" activeClassName="main-nav-active">Logout</NavLink>
                 </ul>
                )}
                { !currentUser &&(
                    <ul  className="nav-links">
                
                        <NavLink to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink>
                        <Link to="/AboutUs" className="main-nav" activeClassName="main-nav-active">About</Link>
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


export default Header;
