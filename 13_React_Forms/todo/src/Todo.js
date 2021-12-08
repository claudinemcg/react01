import React, {Component } from 'react';

class Todo extends Component {
    render() {
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
                <button>Edit</button>
                <button>Delete</button>
            </div>
        );
    }
}

export default Todo;
