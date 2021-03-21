import React from 'react';
import '../style.css';

const SubsContainer = ({headline, children })=> {
    return(
        <div className="subscontainer">
            <div className="wrap">
                {headline && <h3>{headline}</h3>}

                <div className="children">
                     {children && children}
                </div>

            </div>
        </div>
    );
}

export default SubsContainer;