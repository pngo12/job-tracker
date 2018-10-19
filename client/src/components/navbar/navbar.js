import React from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar container">
            <div class="navbar-brand container">
                <a class="navbar-item" href="/">
                <img src={logo} width="140" height="40" alt="a logo"/>
                </a>
        </div>
            <div class="navbar-end">
            <div class="navbar-item">
                <a class="button is-primary">
                    <strong>Add a Job</strong>
                </a>
            </div>
            </div>
        </nav>
    );
}
        
export default Navbar;