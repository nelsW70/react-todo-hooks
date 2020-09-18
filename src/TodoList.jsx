import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={i}>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
