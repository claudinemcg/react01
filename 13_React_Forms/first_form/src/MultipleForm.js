import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', email:'', password:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        // this.setState({ username: evt.target.value });
        this.setState({ [evt.target.name]: evt.target.value });
        // if the email changes then [evt.target.name] means email
        // name is included in <input below and must match the name in the state
        // e.g. <input name="email">
        // password updates, then evt.target.name means password
        // same for username- anything that is in the state at the beginning
    } // this is an event so we need to bind it

    handleSubmit(evt) {
        evt.preventDefault(); // stops page refreshing
        alert(`You typed: ${this.state.username}`);
        this.setState({ username: "" });
    }
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username" // name neeeds to match what we did in the state
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit!</button>
                </form>
            </div>
        );
    }
}

export default Form;

