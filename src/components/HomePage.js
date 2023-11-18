import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodoComplete } from '../redux/actions/actions';

const HomePage = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleTodoComplete(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Link to="/add-todo">Add Todo</Link>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
            <button onClick={() => console.log('click')}>
              ADD
            </button>
            <button onClick={() => console.log('click')}>Delete</button>
          </li>
          ))}
       </ul> 
    </div>
  );
};

export default HomePage;