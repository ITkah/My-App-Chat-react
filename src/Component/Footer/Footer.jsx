import React from 'react';
import './Footer.scss';

const Footer = (props) => {
    return (
      <footer className="footer" id="footer">
            <div className="copyright">copyright <span>{new Date().getFullYear()}</span></div>
      </footer>
    );
}

export default Footer;