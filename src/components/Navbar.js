import React from 'react';
import navLogo from '../images/navLogo.png';

export default function Navbar() {
    return (
        <nav className="App-nav">
            <div className='nav-logo'>
                <img
                    src={navLogo}
                    alt="Website Logo"
                    className='App-logo'
                />
                <h3 className='nav-logo-text'>ReactFacts</h3>
            </div>
            <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
    )
}