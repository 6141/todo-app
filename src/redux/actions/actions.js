import { loadFromLocalStorage } from "../../localStorage";

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';
export const CLEAR_TODO = 'CLEAR_TODO';
export const LOAD_TODOS_FROM_LOCAL_STORAGE = 'LOAD_TODOS_FROM_LOCAL_STORAGE'

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const updateTodo = (todo) => ({ type: UPDATE_TODO, payload: todo });
export const toggleTodoComplete = (id) => ({ type: TOGGLE_TODO_COMPLETE, payload: id });
export const clearTodo = () => ({type: CLEAR_TODO})
export const loadFromLocalStorageAction = () => {
    const todos = loadFromLocalStorage('todos')
    return { type: LOAD_TODOS_FROM_LOCAL_STORAGE, payload: todos}
};