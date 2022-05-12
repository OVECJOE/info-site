import React from 'react';
import navLogo from '../images/navLogo.png';

export default function Navbar(props) {
    return (
        <nav className={`App-nav ${props.darkMode ? 'dark-nav' : ''}`}>
            <div className='nav-logo'>
                <img
                    src={navLogo}
                    alt="Website Logo"
                    className='App-logo'
                />
                <h3 className='nav-logo-text'>ReactFacts</h3>
            </div>
            <div className='theme-switch'>
                <span className={props.darkMode ? 'faded' : ''}>Light</span>
                <button type='button'
                    className={props.darkMode ? "dark-toggler" : "mode-toggler"}
                    onClick={props.toggler}>
                    <span className='circle'></span>
                </button>
                <span className={props.darkMode ? '' : 'faded'}>Dark</span>
            </div>
        </nav>
    )
}