import React from 'react';
import '../style.css';

const Timeline = props => {
    return (
        <div className="timeline">
        <div className="centered">
            <h2>Hello, Fur Parents! allow Your Pets to partake in the finer aspects of life, and let Furballs Corner E-Shopping assist you.</h2>
            <p>We Offer Pet necessities that keep you coming back, so<a href="#ShopNow">SHOP NOW!</a></p>   
        </div>
        <img className="mainban" src="/assets/banner.jpg"/>
        <img className="resbanner" src="/assets/banner_mobile.jpg"/>
        <img className="mobbanner" src="/assets/banner_mobiles.jpg"/>
    </div>
    );
};

export default Timeline;