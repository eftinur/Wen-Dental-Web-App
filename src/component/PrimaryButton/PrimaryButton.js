import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({children}) => {
    return (
        <button
        className='primary-btn'
        >
        {children}
        </button>
    );
};

export default PrimaryButton;