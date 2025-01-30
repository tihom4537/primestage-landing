import React from 'react';
import '../styles/RotatingPhones.css';
// import  '../Assets/phone1.png'; // Add your images
// import  '../Assets/phone2.png';
// import  '../Assets/phone3.png';

const RotatingPhones = () => {
    return (
        <div className="rotating-phones">
            <div className="phone phone1">
                <img src="../Assets/first.png" alt="First" />
            </div>
            <div className="phone phone2">
                <img src= "../Assets/third.png" alt="Second" />
            </div>
            <div className="phone phone3">
                <img src= "../Assets/third.png" alt="Third" />
            </div>
        </div>
    );
};

export default RotatingPhones;
