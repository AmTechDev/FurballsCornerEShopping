import React from 'react';
import './style.scss';

const TextfieldForm = ({handleChange, label, ...otherProps }) => {
    return(
        <div className="lineForm">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="typeForm" onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default TextfieldForm;