import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {task:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit() {
        const newTask = {this.state}
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task'></label>
                    <input
                        name='task'
                        id='task'
                        // type='text'
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add task</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;
