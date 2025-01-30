import React, { useEffect, useRef, useState } from 'react';
import '../styles/BenefitsSection.css';

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current; // Store ref value in a local variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Use the local variable
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (element) {
      observer.observe(element); // Observe the element
    }

    // Cleanup function
    return () => {
      if (element) {
        observer.unobserve(element); // Use the local variable
      }
    };
  }, []);

  return (
    <div
      className={`benefits-section ${isVisible ? 'animate' : ''}`}
      ref={sectionRef}
    >
      <h1 className={`benefits-heading ${isVisible ? 'animate-heading' : ''}`}>
        Benefits of Virtual Trading
      </h1>
     <div className={`benefits-grid ${isVisible ? 'animate-grid' : ''}`}>
        <div className="benefit-item">
            <h3><b>Real-time Experience</b></h3>
            Gain actual market knowledge by delving deep into different trading strategies across multiple indices on a simulated platform.

        </div>
        <div className="benefit-item">
            <h3><b>Risk-free Learning</b></h3>
            Test out bullish, bearish, and neutral strategies. Experiment as much as you want and learn from your mistakes, without risking one bit of your hard-earned money.
        </div>
        <div className="benefit-item">
            <h3><b>The Perfect Gateway To The Stock Market</b></h3>
            Good traders are made, not born. Trinkerrs virtual trading platform acts as the perfect playground for you to discover, explore, and master different nuances of the stock market before you transition to real trading.

        </div>
        <div className="benefit-item">
            <h3><b>Personal Trading Technique</b></h3>
            Virtual trading is ideal for you to discover and perfect your unique trading style rather than following news, trends, or finfluencers.
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
