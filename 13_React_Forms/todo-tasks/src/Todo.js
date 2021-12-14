import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {isEditing: false, task:this.props.task}
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {

    }

    render() {
        return (
            <div>
                <li>{this.props.task}</li>
                <button>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Todo;