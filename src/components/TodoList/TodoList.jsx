import React, { useState } from 'react';
import AddTodo from './AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '장보기', status: 'active' },
    { id: 2, text: '공부하기', status: 'active' },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo prevId={parseInt(todos.length - 1)} onAdd={handleAdd} />
    </section>
  );
}
