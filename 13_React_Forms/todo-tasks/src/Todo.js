import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {isEditing: false, task:this.props.task}
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    handleDelete() {
        this.props.removeTask(this.props.id)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTask(this.props.id, this.state.task)
        this.setState({isEditing: false});
    }

    toggleEdit(){
        this.setState({ isEditing: !this.state.isEditing})
    }

    render() {
        let result;
        if (this.state.isEditing){
           result= ( 
                <div>
                    <form>
                        <input
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                       <button onClick={this.handleUpdate}>Update</button>
                    </form>
               </div>
           )
        } else {
            result = (
            <div>
                <li>{this.props.task}</li>
                    <button onClick={this.toggleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
            )
        }
        return result;
    }
}

export default Todo;