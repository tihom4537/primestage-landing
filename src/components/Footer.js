import React from 'react';
import '../styles/Footer.css'; // Ensure to create and import the corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-heading">
        <img src="path/to/your/logo.png" alt="Logo" className="footer-logo" />
        {/* <div className="join">
              <h1><b>Lightning-fast interface</b></h1>
              <h3>Join a community of over 7 Lakh investors</h3>
             
        </div> */}
        <h1>Home Stage
            <h4><p>Discover everything about the stock market on Trinkerr, India‘s best learning platform for trading and investing. Our mission is to educate and empower the next 100 million investors in the country.
            </p></h4>
            <h5>For support: support@trinkerr.com</h5>
        </h1>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="#ebooks">Ebooks</a></li>
          <li><a href="#podcasts">Podcasts</a></li>
          <li><a href="#terms-conditions">Terms and Conditions</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="path/to/facebook-logo.png" alt="Facebook" />
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="path/to/twitter-logo.png" alt="Twitter" />
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="path/to/linkedin-logo.png" alt="LinkedIn" />
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="path/to/instagram-logo.png" alt="Instagram" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
