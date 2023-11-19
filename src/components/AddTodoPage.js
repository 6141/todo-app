import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { addTodo } from '../redux/actions/actions';

const AddTodoPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ error,setError] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (title && description) {
      dispatch(addTodo({
        title,
        description,
        completed: false,
      }));
      navigate('/');
    }else{
       setError('Please fill in the both title and description fields')
    }
  };

  return (
    <div>
      <h3>You can add todo by clicking on add todo button </h3>
      <form onSubmit={handleAddTodo}>
      <div>
      <label htmlFor="title">Title:</label>
      <div>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      </div>
      <div>
      <label htmlFor="description">Description:</label>
      <div>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md' type="submit">Add Todo</button>
      {error && <p className='bg-red-500'>{error}</p>}
      </form>
    </div>
  );
};

export default AddTodoPage;