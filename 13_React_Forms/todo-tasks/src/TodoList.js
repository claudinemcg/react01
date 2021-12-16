import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {todos:[]}
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }

    create(newTask) {
        this.setState({
            todos:[...this.state.todos, newTask]
        });
    }

    remove(id) {
        const todos = this.state.todos.filter(task => task.id !== id)
        this.setState({todos})
    }

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id){
               return {...todo, task: updatedTask}
            }
            return todo;
        })
        this.setState({todos: updatedTodos});
    }

    render() {
    const todos = this.state.todos.map(todo => 
        <Todo 
            id={todo.id}
            key={todo.id}
            task={todo.task}
            removeTask={this.remove}
            updateTask={this.update}
        />
    );

        return (
            <div>
                <h1>Todo List</h1>
                <NewTodoForm create={this.create}/>
                {todos}
                
            </div>
        )
    }
}

export default TodoList;