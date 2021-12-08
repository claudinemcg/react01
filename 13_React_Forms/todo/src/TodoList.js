import React, { Component } from 'react';
import NewTodoForm from './NewToDoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {todos:[{task:'get milk'}, {task:'clean my room'}]}
    }
    render() {
        const todos = this.state.todos.map(todo =>
            <Todo task={todo.task}/>
        )
        return (
            <div>
                <NewTodoForm />
                {todos}
            </div>
        );
    }
}

export default TodoList;