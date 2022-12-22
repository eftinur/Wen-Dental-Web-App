import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({children, handler}) => {
    return (
        <button
        onClick={handler}
        className='secondary-btn'
        >
        {children}
        </button>
    );
};

export default SecondaryButton;