import React from "react";

class Form extends React.Component {
    constructor() {
        super();

        this.state = {

        };
    }

    handleUsernameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleLogin = (event) => {
        event.preventDefault();

        if (this.state.userName === '') {
            this.setState({ errorMessage: 'Enter a description' });
        }
        if (this.state.password === '') {
            this.setState({ errorMessage: 'Enter a password' });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                {this.state.loginErrorMessage && (
                    <div className="error">
                        Invalid Username:
                        {this.state.loginErrorMessage}
                    </div>
                    <div className="error">
                        Invalid Password:
                        {this.state.loginErrorMessage}
                    </div>
                )}

                <div className="field">
                    <label>Username:</label>
                    <input 
                        type='text'
                        maxLength={50}
                        value={this.state.userName}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="field">
                    <label>Password:</label>
                    <input
                        type='password'
                        maxLength={25}
                        value={this.state.password}
                        onChange={handlePassword}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        );
    }
}

export default Form;