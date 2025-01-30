import React from 'react';
import '../styles/Service.css';
// import phoneImage from '../assets/phone.png'; // Replace with your phone image path

const Service = () => {
    return (
        <section className="service">
            <div className="service-content">
                <h1>Revolutionize Your Business</h1>
                <p>Experience the future of mobile technology with our cutting-edge solutions.</p>
                <a href="#contact" className="cta-button">Get Started</a>
            </div>
            <div className="phone-container">
                <img src="https://www.google.com/imgres?imgurl=https://i.pinimg.com/736x/74/12/29/7412292b1867eea3faffdba8033bcc50.jpg&imgrefurl=https://www.pinterest.com/pin/trading-wallpaper--644788871650137356/&h=1104&w=621&tbnid=5R2T4UV9WHRq9M&source=sa.im&tbnh=300&tbnw=168&usg=AI4_-kQsfx9i87FKT2Wiqi75b3XEjuXR_w&vet=1&docid=9XPpQXwooRLACM" alt="Mobile Phone" className="phone-image" />
            </div>
        </section>
    );
};

export default Service;
