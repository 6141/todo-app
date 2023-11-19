import { all, takeEvery, put, call } from 'redux-saga/effects';


import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_COMPLETE } from '../actions/actions';
import { loadFromLocalStorage, saveToLocalStorage } from '../../localStorage';

function* addTodoAsync(action) {
  yield call(saveToLocalStorage, 'todos', [...loadFromLocalStorage('todos'), action.payload]);
}

function* deleteTodoAsync(action) {
  const todos = loadFromLocalStorage('todos').filter(todo => todo.id !== action.payload);
  yield call(saveToLocalStorage, 'todos', todos);
}

function* toggleTodoCompleteAsync(action) {
  const todos = loadFromLocalStorage('todos').map(todo =>
    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
    );
  yield call(saveToLocalStorage, 'todos', todos);
}

function* rootSaga() {
  yield all([
    takeEvery(ADD_TODO, addTodoAsync),
    takeEvery(DELETE_TODO, deleteTodoAsync),
    takeEvery(TOGGLE_TODO_COMPLETE, toggleTodoCompleteAsync),

  ]);
}

export default rootSaga;