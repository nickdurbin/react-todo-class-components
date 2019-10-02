import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import data from "./data";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: data
    }
  }

  toggleTodo = (event, todoId) => {
    event.preventDefault()

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault()

    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    })
  }

  addTodo = (event, todoName) => {
    const newItem = {
      id: Date.now(),
      name: todoName,
      completed: false
    }

    this.setState({
      todos: [newItem, ...this.state.todos]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>

        <div className="shopping-list">
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onClick={(e) => this.toggleTodo(e, todo.id)}
            />
          ))}

          <button className="clear-btn" onClick={this.clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}

export default App;