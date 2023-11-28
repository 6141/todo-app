import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  clearTodo,
  deleteTodo,
  toggleTodoComplete,
  loadFromLocalStorageAction
} from "../redux/actions/actions";
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../localStorage";

const HomePage = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromLocalStorageAction())
  },[dispatch])


  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    removeFromLocalStorage("todos");
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleTodoComplete(id));
     saveToLocalStorage("todos", todos);
  };

  return (
    <div>
      <h3>You can see list of todos && can add new one here</h3>
      <Link to="/add-todo">Add Todo</Link>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link className='text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg mt-10 sm:mt-0'to={`/todo/${todo.id}`}>{todo.title}</Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.completed ? "Incomplete" : "Completed"}
            </button>
            <button
              className="bg-red-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
