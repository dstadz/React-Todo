import React from 'react'
import Todo from './Todo'
import './Todo.css'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;