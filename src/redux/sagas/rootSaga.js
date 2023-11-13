import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { addTodo } from '../actions/actions';

function* watchAddTodo() {
    yield takeEvery('ADD_TODO', storeTodoInLocalStorage);
  }
  
  function* watchDeleteTodo() {
    yield takeEvery('DELETE_TODO', deleteTodoFromLocalStorage);
  }
  
  function* storeTodoInLocalStorage(action) {
    const todo = action.payload;
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  function* deleteTodoFromLocalStorage(action) {
    const deletedTodoId = action.payload;
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const updatedTodos = todos.filter((todo) => todo.id !== deletedTodoId);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }
  
  export function* rootSaga() {
    yield all([watchAddTodo(), watchDeleteTodo()]);
  }