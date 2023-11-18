import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTodo, deleteTodo } from '../redux/actions/actions';

const IndividualTodoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todos.find(todo => todo.id === parseInt(id)));

  const handleUpdateTodo = (updatedTodo) => {
    dispatch(updateTodo(updatedTodo));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
    navigate('/');
  };

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <label htmlFor="updateTitle">Update Title:</label>
      <input
        type="text"
        id="updateTitle"
        defaultValue={todo.title}
        onBlur={(e) => handleUpdateTodo({
          ...todo,
          title: e.target.value,
        })}
      />
      <label htmlFor="updateDescription">Update Description:</label>
      <textarea
        id="updateDescription"
        defaultValue={todo.description}
        onBlur={(e) => handleUpdateTodo({
          ...todo,
          description: e.target.value,
        })}
      />
      <button onClick={handleDeleteTodo}>Delete Todo</button>
    </div>
  );
};

export default IndividualTodoPage;
