import React from 'react';
import '../style.css';

const Footer = props => {
    return (
        <footer className="footer">
        <div className="container">
               <div className="row">
                   <div className="footer-col">
                       <h4>Furballs Corner</h4>
                           <ul>
                               <li><a href="">About Us</a></li>
                               <li><a href="">How to Order</a></li>
                               <li><a href="">Privacy and Policies</a></li>
                               <li><a href="">Terms and conditions</a></li>
                           </ul>   
                   </div>
                   <div className="footer-col">
                       <h4>Payment Methods</h4>
                           <ul>
                               <li><img className="icons" src="/assets/icon/cod.png"/> </li>
                               <li><img className="icons" src="/assets/icon/gcash.jpg"/></li>
                           </ul>
                   </div>
                   <div className="footer-col">
                       <h4>Contact Us</h4>
                           <ul>
                               <li>+(63)961-818-7625</li>
                               <li>furballscorner@gmail.com</li>
                           </ul>
                   </div>
               </div>
        </div>     
    </footer>
    );
};

export default Footer;