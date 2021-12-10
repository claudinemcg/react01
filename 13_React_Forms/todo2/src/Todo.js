import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {isEditing: false, task: this.props.task}
        // task: this.props.task so when we edit each task, it shows up
        // on the edit form
        // this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing})
    }
   

    handleDeleteClick() {
        this.props.removeTask(this.props.id)
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({isEditing: false})
    }
    
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    render() {
        let result;
        if (this.state.isEditing){
            result=(
                <div>
                <form onSubmit={this.handleUpdate}>
                    <input 
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                        
                    />
                    <button>Update</button>
                </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <li>{this.props.task}</li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                </div>
            );
        }
        return result;
    }
}

export default Todo;