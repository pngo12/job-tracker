import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: '',
        success: false,
        login: false
    }

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (this.state.success === true) {
            return <Redirect to='/dashboard' />
        }
        if (this.state.login === true) {
            return <Redirect to='/login' />
        }
        return (
            <section className="section is-large">
                <div className="columns">
                    <div className="column is -4"></div>
                    <div className="column is-4">
                        <p className="title">Welcome back!</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    onChange={this.handleOnChange}
                                    value={this.state.email}
                                    name='email'
                                    className="input"
                                />
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input
                                    type="password"
                                    textAlign='center'
                                    onChange={this.handleOnChange}
                                    value={this.state.password}
                                    name='password'
                                    className="input"
                                />
                            </div>
                            <button className="button is-info">Login</button>
                        </form>
                    </div>
                    <div className="column is-4"></div>
                </div>
            </section>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    // createUser: (email, password) => dispatch(createUser({email,password}))
})

export default connect(null, mapDispatchToProps)(Login)