import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [dueDate,setDate] = useState(todo.dueDate)


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, title, dueDate });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
             <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleUpdate}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleUpdate();
            }
          }}
        />     <input
          type="date"
          value={dueDate}
          onChange={(e) => setDate(e.target.value)}
          onBlur={handleUpdate}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleUpdate();
            }
          }}
        />
        </>
   
        
      ) : (
        <>
          {todo.title}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {`dueDate - ${todo.dueDate}`}
    </li>
  );
};

export default ToDoItem;
