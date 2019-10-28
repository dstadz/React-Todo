import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import { isTemplateElement } from '@babel/types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  addTodo = name => {
    const newTodo = {
      name: name,
      id:Date.now(),
      completed:false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = id => {
    this.setState({
      todos:this.state.todos.map(todo => {
        if( todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos:this.state.todos.filter(todo => {
        return !todo.completed
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          clearCompleted={this.clearCompleted}
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos}
         />
      </div>
    );
  }
}

export default App;
