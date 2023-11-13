import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/actions';

const TodoForm = ({ dispatch }) => {
    const [todoText, setTodoText] = useState('');
    const [todoDiscription, setTodoDescription] = useState('');
  
    const handleAddTodo = () => {
      if (todoText.trim() !== '') {
        const newTodo = {
          id: new Date().getTime(), 
          text: todoText,
          description: todoDiscription

        };
        dispatch(addTodo(newTodo));
        setTodoText(''); 
        setTodoDescription('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new todo"
        />
         <input
          type="text"
          value={todoDiscription}
          onChange={(e) => setTodoDescription(e.target.value)}
          placeholder="Enter the description"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    );
  };
  
  export default connect()(TodoForm);