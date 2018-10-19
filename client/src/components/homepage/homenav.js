import React from 'react';
import logo from '../images/logo.png'

const homeNav = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand container">
                <a class="navbar-item" href="/">
                    <img src={logo} width="140" height="40" alt="a logo" />
                </a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">

                </div>
            </div>
        </nav>
    );
}

export default homeNav;