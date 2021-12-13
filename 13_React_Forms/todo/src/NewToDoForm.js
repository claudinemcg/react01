import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {task:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newTask = {...this.state, id: uuidv4(), completed: false}
        this.props.create(newTask)
        this.setState({task:''})
    }

    // handleUpdate(){

    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task'></label>
                    <input
                        name='task'
                        id='task'
                        placeholder='New Task'
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
