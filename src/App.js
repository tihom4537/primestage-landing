import React from 'react';
import Header from './components/Header';
// import Service from './components/Service';
// import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
// import Accordion from './components/Accordian';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import DownloadSection from './components/DownloadSection'
import CommentsSection from './components/CommentsSection'
import BenefitsSection from './components/BenefitsSection';
import WhyTrinkerr from './components/WhyTrinkerr';
// import RotatingPhones from './components/RotatingPhones';
import CombinedComponent from './components/CombinedComponent';


// import global from './styles/global.css';

const App = () => {



    
    return (
        <div>
            <Header title="Homestage"/>
            {/* <Service /> */}
            <CombinedComponent/>
            {/* <RotatingPhones/>
            <Features /> */}
            <About />
            
            
            <WhyTrinkerr/>
            <CommentsSection/>
            <BenefitsSection/>
            <DownloadSection />
            {/* <hr /> */}
            <div className="apple">
            <h1>Frequently Asked Questions</h1>  
            <Accordian/>
            </div>
            {/* <hr /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
