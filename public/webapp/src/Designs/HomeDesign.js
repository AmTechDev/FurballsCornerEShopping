import React from 'react';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

const HomeDesign = props => {
    return(
        <div className="highPoint">
            <Header {...props}/>
                {props.children}
            <Footer />
        </div>

    );
};

export default HomeDesign;