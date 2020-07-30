import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './App.css';

class App extends Component {
    state = {
        todos: []
    };

    deleteTodo = (idToDelete) => {
        var leftTodos = this.state.todos.filter((todo) => {
            return todo.id !== idToDelete;
        });
        this.setState({
            todos: leftTodos
        });
    };

    addTodo = (newTodo) => {
        newTodo.id = Math.random();
        var newTodoList = [...this.state.todos, newTodo];
        this.setState({
            todos: newTodoList
        });
    };

    render() {
        return (
            <div className="todo-app container text-center">
                <h1>The Cool To-do App</h1>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default App;
