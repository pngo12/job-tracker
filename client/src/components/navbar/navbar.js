import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import logo from '../images/logo.png'

class Navbar extends Component {
    state = {
        clicked: false
    }

    redirectJob = () => this.setState({ clicked: true })

    render() {
        if (this.state.clicked === true) return <Redirect to='/newjob' />
        return (
            <nav className="navbar container">
                <div className="navbar-brand container">
                    <a className="navbar-item" href="/">
                        <img src={logo} width="140" height="40" alt="a logo" />
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a onClick={this.redirectJob} className="button is-primary">
                            <strong>Add a Job</strong>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;