// src/components/WhyTrinkerr.js
import React from 'react';
import '../styles/WhyTrinkerr.css';

function WhyTrinkerr() {
    return (
        <section className="why-trinkerr">
            <h2>Why Trinkerr?</h2>
            <div className="reasons">
                <div className="reason">
                    <h3>
                        <img src="/assets/seamless-interface.png" alt="Seamless Interface Icon" className="icon" />
                        Seamless Interface
                    </h3>
                    <p>Our user-friendly interface ensures you have a smooth experience navigating through the app, whether you're a beginner or a pro.</p>
                </div>
                <div className="reason">
                    <h3>
                        <img src="/assets/free-virtual-capital.png" alt="Free Virtual Capital Icon" className="icon" />
                        Free Virtual Capital
                    </h3>
                    <p>Start investing without any risk using our virtual capital feature, perfect for learning and testing strategies.</p>
                </div>
                <div className="reason">
                    <h3>
                        <img src="/assets/verified-data.png" alt="Verified Data Icon" className="icon" />
                        Verified Data
                    </h3>
                    <p>Access reliable and verified data to make informed decisions, with real-time market analysis at your fingertips.</p>
                </div>
                <div className="reason">
                    <h3>
                        <img src="/assets/engaging-feed.png" alt="Engaging Feed Icon" className="icon" />
                        Engaging Feed
                    </h3>
                    <p>Stay updated with an engaging feed filled with the latest news, market trends, and expert insights tailored for you.</p>
                </div>
                <div className="reason">
                    <h3>
                        <img src="/assets/exclusive-groups.png" alt="Exclusive Groups Icon" className="icon" />
                        Exclusive Groups
                    </h3>
                    <p>Join exclusive groups to discuss strategies and insights with like-minded investors, enhancing your trading journey.</p>
                </div>
            </div>
        </section>
    );
}

export default WhyTrinkerr;
