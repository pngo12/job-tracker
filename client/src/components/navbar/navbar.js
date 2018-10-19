import React from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="navbar-brand container">
                <a className="navbar-item" href="/">
                <img src={logo} width="140" height="40" alt="a logo"/>
                </a>
        </div>
            <div className="navbar-end">
            <div className="navbar-item">
                <a className="button is-primary">
                    <strong>Add a Job</strong>
                </a>
            </div>
            </div>
        </nav>
    );
}
        
export default Navbar;