import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ key, todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <>
      <li className={styles.todo}>
        <input className={styles.checkbox} type='checkbox' id='checkbox' checked={status === 'completed'} onChange={handleChange} />
        <label className={styles.text} htmlFor='checkbox'>
          {text}
        </label>

        <button
          onClick={() => {
            const text = prompt();
            onUpdate({ ...todo, text });
          }}
        >
          수정
        </button>
        <span className={styles.icon}>
          <button className={styles.button} onClick={() => onDelete(todo.id)}>
            <FaTrashAlt />
          </button>
        </span>
      </li>

      <br />
    </>
  );
}
