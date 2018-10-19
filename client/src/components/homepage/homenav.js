import React from 'react';
import logo from '../images/logo.png'

const homeNav = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand container">
                <a className="navbar-item" href="/">
                    <img src={logo} width="140" height="40" alt="a logo" />
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">

                </div>
            </div>
        </nav>
    );
}

export default homeNav;