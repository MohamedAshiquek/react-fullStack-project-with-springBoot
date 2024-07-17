import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [date,setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addTodo(title,date);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new to-do"
      />
      <input
      type='date'
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      placeholder='add dueDate'
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
