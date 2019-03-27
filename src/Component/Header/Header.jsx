import React from 'react';
import './Header.scss';
import Navbar from './Navbar/Navbar';
import Hello from '../../img/white-hello.svg';

const Header = (props) => {
    return (
      <header className="header" id="header">
        <div className="header-logo">
            <img src={Hello} className="logo" alt="none" />
        </div>
        <Navbar />
      </header>
    );
}

export default Header;