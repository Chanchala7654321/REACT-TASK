// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
