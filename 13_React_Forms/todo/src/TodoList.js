import React, { Component } from 'react';
import NewTodoForm from './NewToDoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {todos:[]}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    create(newTask){
        this.setState({
            todos:[...this.state.todos, newTask]
        });
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(task => task.id !== id)
        });
    }
    
    render() {
        const todos = this.state.todos.map(todo =>
            <Todo 
                key= {todo.id}
                id={todo.id}
                task={todo.task}
                removeTask={this.remove}
            />
        )
        
        return (
            <div>
                <NewTodoForm create={this.create}/>
                {todos}
            </div>
        );
    }
}

export default TodoList;