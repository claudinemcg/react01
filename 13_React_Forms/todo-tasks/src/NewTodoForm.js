import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props){
        super(props)
        this.state= {task: ""}
        this.handleSubmit = this.handleSubmit.bind(this);            
        this.handleChange = this.handleChange.bind(this);

    }
    handleSubmit(evt){
        evt.preventDefault();
        const newTask = {...this.state, id:uuidv4(), completed: false }
        this.props.create(newTask)
        this.setState({task:""})
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

   
    render() {
        return (
            <div>
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor='task'>Task</label>
                    <input
                        name="task"
                        id="task"
                        onChange={this.handleChange}
                        value={this.state.task}
                    />
                    <button>Add</button>
                    
                </form>
            </div>
        )
    }
}

export default NewTodoForm;