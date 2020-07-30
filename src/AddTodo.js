import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    };

    changeHandler = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        onChange={this.changeHandler}
                        value={this.state.content}
                        placeholder="Enter Todo"
                        required
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
