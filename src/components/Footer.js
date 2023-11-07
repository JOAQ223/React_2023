import React from 'react';
import '../css/Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://twitter.com">
          <img src="twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com">
          <img src="instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://linkedin.com">
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://youtube.com">
          <img src="youtube-icon.png" alt="YouTube" />
        </a>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
