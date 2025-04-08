import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

// API
import { get_todos, add_todo, delete_todo } from "./api/endpoints";

// components
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await get_todos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  const addTodo = async (todo_name) => {
    const todo = await add_todo(todo_name);
    setTodos([todo, ...todos]);
  };

  const deleteTodo = async (id) => {
    delete_todo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">TODO ✅</h1>
        <h3 className="sub-title">🚀 Powered by Ruby on Rails + React</h3>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
