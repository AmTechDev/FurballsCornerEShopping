import React from 'react';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

const MainDesign = props => {
    return(
        <div>
            <Header {...props} />
            <div className="thebody">
                {props.children}
            </div>
            <Footer />

        </div>

    );
};

export default MainDesign;