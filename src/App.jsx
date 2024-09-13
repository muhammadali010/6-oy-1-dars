import React from 'react';
import img from './Images/Image (3).png'
import icon from './Images/icon.svg'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">RouteX</div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
        <div className="contact-info">
          <span>Contact Us</span>
          <span>(073) 888-0553</span>
        </div>
      </header>
      <section className="hero">
        <h1>Journey With Confidence <br />  <span>Migrate </span>With Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet <br /> rcus nunc. Duis egestas ac ante sed tincidunt.</p>
        <button className="cta-btn">Learn More  <img src={icon} alt="" /> </button>
      </section>

      <section className="about">
        <div className="info-img">
          <img src={img} alt="" />
        </div>
        <div className="info-box">
          <h2>Unknown Wanderlust <br /> Your Journey into</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet <br /> rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          <div >
            <h4>Safety Guides</h4>
            <h4>Passport Assistance</h4>
          </div>
         <p>Lorem ipsum dolor sit amet, <br /> cons ectetur adipiscing elit</p>
      
          <button className="read-more-btn">Read More     <img src={icon} alt="" /> </button>
        </div>
      </section>
    </div>
  );
};

export default App;
