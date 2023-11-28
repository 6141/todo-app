import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo, deleteTodo } from '../redux/actions/actions';
import { removeFromLocalStorage, saveToLocalStorage } from '../localStorage';

const IndividualTodoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)
  const todo = todos?.find(todo => todo?.id === parseInt(id))
  const [currTodo, setCurrTodo] = useState(todo)

  const handleUpdateTodo = (updatedTodo) => {
    dispatch(updateTodo(updatedTodo));
    setCurrTodo(updatedTodo)
    saveToLocalStorage('todos',todos)
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo?.id));
    removeFromLocalStorage("todos");
    navigate('/');
  };

  const gotoHomePage = () => {
    navigate('/')
  }

  return (
    <div>
      <p class='bg-inherit'>YOUR TODO NAME:      {currTodo?.title}</p>
      <p>YOUR TODO DESCRIPTION:      {currTodo?.description}</p>
      <label htmlFor="updateTitle">Update Title:</label>
      <input
        type="text"
        id="updateTitle"
        defaultValue={currTodo?.title}
        onBlur={(e) => handleUpdateTodo({
          ...todo,
          title: e.target.value,
        })}
      />
      <label htmlFor="updateDescription">Update Description:</label>
      <textarea
        id="updateDescription"
        defaultValue={currTodo?.description}
        onBlur={(e) => handleUpdateTodo({
          ...todo,
          description: e.target.value,
        })}
      />
      <button onClick={handleDeleteTodo}>Delete Todo</button>
      <div>
      <button onClick={gotoHomePage}>Go Back to HomePage</button>
      </div>
    </div>
  );
};

export default IndividualTodoPage;
