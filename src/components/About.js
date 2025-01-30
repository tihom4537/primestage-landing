import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2>About Us</h2>
                <p>Trinkerr provides powerful tools and insights for traders to optimize their strategies and achieve their investment goals.</p>
                <a href="#contact" className="cta-button">Get Started</a>
            </div>
        </section>
    );
};

export default About;
