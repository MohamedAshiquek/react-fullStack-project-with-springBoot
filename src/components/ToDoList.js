import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:8081/api/todos');
    setTodos(response.data);
  };

  const addTodo = async (title) => {
    const response = await axios.post('http://localhost:8081/api/todos', { title, completed: false });
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8081/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = async (id, updatedTodo) => {
    const response = await axios.put(`http://localhost:8081/api/todos/${id}`, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
