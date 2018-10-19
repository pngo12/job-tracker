import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {createUser} from '../../Redux/actions'

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        success:false,
        login: false
    }

    handleSubmit = e => {
        e.preventDefault()
        let {email, password, confirm, name} = this.state
        if(password !== confirm) window.alert('Please make sure the passwords match')
        if (password === confirm) this.setState({ success: true })
        this.props.createUser({name,email,password})
    }

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    toggleLogin = () => {
        this.setState({login: true})
    }

    render() {
        if(this.state.success === true) {
            return <Redirect to='/dashboard'/>
        }
        if(this.state.login === true){
            return <Redirect to='/login' />
        }
        return (
            <section className="section is-large">
                <div className="columns">
                    <div className="column is -4"></div>
                        <div className="column is-4">
                            <p className="title">Let's get you signed up</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="field">
                                <label>Name</label>
                                <input
                                    type="name"
                                    onChange={this.handleOnChange}
                                    value={this.state.name}
                                    name='name'
                                    className="input"
                                />
                            </div>
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
                    <div className="field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            textAlign='center'
                            onChange={this.handleOnChange}
                            value={this.state.value}
                            name='confirm'
                            className="input"
                        />
                    </div>
                        <button className="button">Sign up</button>
                    </form>
                    <a onClick={this.toggleLogin}>Already have an account? Login here.</a>
                </div>
                    <div className="column is-4"></div>
                </div> 
            </section>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    createUser: (email, password) => dispatch(createUser({email,password}))
})

export default connect(null, mapDispatchToProps)(SignUp)