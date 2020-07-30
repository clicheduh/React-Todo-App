import React from 'react';

const Todos = (props) => {
    var { todos } = props;
    if (todos.length) {
        var todoList = todos.map((todo) => {
            var deleteHandler = () => {
                props.deleteTodo(todo.id);
            };
            return (
                <div className="todo-container" key={todo.id}>
                    <div className="myTodo" onClick={deleteHandler}>
                        {todo.content}
                    </div>
                </div>
            );
        });
    } else {
        return (
            <div id="empty-list">
                <p>You have no todos left, yay!</p>
            </div>
        );
    }

    return <div className="todo-list">{todoList}</div>;
};

export default Todos;
