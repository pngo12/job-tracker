import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        badEntry: false
    }

    handleSubmit = e => {
        e.preventDefault();
        
    }

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    confirmPass = e => {
        e.preventDefault()
        if (e.target.name === this.state.password) {
            this.setState({
                [e.target.name]: e.target.value
            })
        } 
    }

    render() {
        return (
            <div>
                <div>This is the SignUp Component</div>
                <form onSubmit={this.submitUser} className='form'>
                    <label>Username</label>
                    <input
                        onChange={this.handleOnChange}
                        value={this.state.username}
                        name='username'
                    />
                    <label>Email</label>
                    <input
                        onChange={this.handleOnChange}
                        value={this.state.email}
                        name='email'
                    />
                    <label>Password</label>
                    <input
                        textAlign='center'
                        onChange={this.handleOnChange}
                        value={this.state.password}
                        name='password'
                    />
                    <label>Confirm Password</label>
                    <input
                        textAlign='center'
                        onChange={this.handleOnChange}
                        value={this.state.value}
                        name='confirm'
                    />
                    <input type="submit" value="Submit" className="button" />
                </form>
            </div>

        );
    }
}

export default SignUp;