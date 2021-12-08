import React, {Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props)
        this.setState = {isEditing: false, task:this.props.task}
        // this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    // handleEditClick(){

    // }

    handleDeleteClick(){
        this.props.removeTask(this.props.id)
    }
    render() {
        if (this.state.isEditing) {
        } else {}
        return (
           
            <div>
                <div 
                    style= {{
                        height: '2em',
                        width: '25em',
                        backgroundColor: 'pink',
                    }}
                >
                    <h2>{this.props.task}</h2>
                    {/* this needs to take in the form */}
                </div>
                {/* <button onClick={this.handleEditClick}>Edit</button> */}
                <button onClick={this.handleDeleteClick}>Delete</button>
            </div>
        );
    }
}

export default Todo;
