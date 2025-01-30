import React, { useState, useEffect } from 'react';
import '../styles/Features.css';

const featuresData = [
    {
        title: "Real-Time Analytics",
        description: "Track your investments with real-time data and insights."
    },
    {
        title: "Advanced Charts",
        description: "Visualize your trading patterns with advanced charting tools."
    },
    {
        title: "Personalized Alerts",
        description: "Get alerts tailored to your trading preferences and strategies."
    }
];

const Features = () => {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false); // Hide the current feature
            setTimeout(() => {
                setCurrentFeature((prev) => (prev + 1) % featuresData.length);
                setVisible(true); // Show the next feature
            }, 600); // Delay for the scrolling effect
        }, 4000); // Change feature every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="features" className="features">
            <div className="container">
                <h2>Our Features</h2>
                <div className={`feature ${visible ? 'visible' : ''}`}>
                    <h3>{featuresData[currentFeature].title}</h3>
                    <p>{featuresData[currentFeature].description}</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
