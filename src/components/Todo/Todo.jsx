import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ key, todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <>
      <li>
        <input type='checkbox' id='checkbox' checked={status === 'completed'} onChange={handleChange} />
        <label htmlFor='checkbox'>{todo.text}</label>

        <button
          onClick={() => {
            const text = prompt();
            onUpdate({ ...todo, text });
          }}
        >
          수정
        </button>
        <button onClick={() => onDelete(todo.id)}>
          <FaTrashAlt />
        </button>
      </li>

      <br />
    </>
  );
}
