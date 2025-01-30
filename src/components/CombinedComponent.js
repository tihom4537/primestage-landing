import React from 'react';
import RotatingPhones from './RotatingPhones'; // Adjust the import path as necessary
import Features from './Features'; // Adjust the import path as necessary
import '../styles/CombinedComponent.css'; // Create a new CSS file for styling

const CombinedComponent = () => {
    return (
        <div className="combined-container">
            <div className="rotating-phones-container">
                <RotatingPhones />
            </div>
            <div className="features-container">
                <Features />
            </div>
        </div>
    );
};

export default CombinedComponent;
