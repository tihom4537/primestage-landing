import React from 'react';
import '../styles/Header.css';

export default function Header(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '1000',
        backgroundColor: 'black', // Set background color to black
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="../Assets/logo1.jpg" // Replace with the path to your logo image
            alt="Logo"
            style={{
              height: '40px', // Adjust the size of the logo
              width: 'auto', // Maintain aspect ratio
              margin: 14,
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search" style={{ marginRight: '20px' }}>
            <button
              className="btn btn-outline-success"
              type="submit"
              style={{ marginRight: '20px', color: 'white', borderColor: 'white' }}
            >
              About
            </button>
          </form>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                color: 'black', // Set dropdown toggle text to white
              }}
            >
              {/* Hamburger icon */}
              <div style={{ display: 'inline-block', width: '24px', height: '24px' }}>
                <div
                  style={{
                    backgroundColor: 'white', // White hamburger lines for contrast
                    height: '3px',
                    margin: '4px 0',
                    borderRadius: '2px',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: 'white',
                    height: '3px',
                    margin: '4px 0',
                    borderRadius: '2px',
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: 'white',
                    height: '3px',
                    margin: '4px 0',
                    borderRadius: '2px',
                  }}
                ></div>
              </div>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end" // Bootstrap class for right-aligned dropdown
              style={{
                whiteSpace: 'nowrap', // Prevent text wrapping
              }}
            >
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
            
          </li>
          
        </div>
        
      </div>
      <div>
        <h1 style={{
                padding: '0',
                font:'40',
                display: 'flex',
                alignItems: 'center',
                color: 'white', // Set dropdown toggle text to white
              }}> PRIMESTAGE</h1>
      </div>
    </nav>
    
    
  );
}
