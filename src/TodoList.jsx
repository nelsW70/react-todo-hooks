import React from 'react';

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </div>
  );
}

export default TodoList;
