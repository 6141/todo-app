import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

const Todos = ({ todos }) => {
    const dispatch = useDispatch()
    const handleDeleteTodo = (todoId) => {
      dispatch(deleteTodo(todoId));
    };
  
    return (
      <div>
        <h3>Todo List</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link to={`/todo/${todo.text}/${todo.description}`}>{todo.text}</Link>
              <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md'onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      todos: state.todos,
    };
  };
  
  export default connect(mapStateToProps)(Todos);
