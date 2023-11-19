    import { combineReducers } from 'redux';
import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO_COMPLETE, UPDATE_TODO } from '../actions/actions';

    
    const todosReducer = (state = [], action) => {
      switch (action.type) {
        case ADD_TODO:
          return [...state, { ...action.payload, id: state.length + 1 }];
        case DELETE_TODO:
          return state.filter(todo => todo.id !== action.payload);
        case UPDATE_TODO:
          return state.map(todo =>
            todo.id === action.payload.id ? action.payload : todo
          );
        case TOGGLE_TODO_COMPLETE:
          return state.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          );
        case CLEAR_TODO: 
        return []
        default:
          return state;
      }
    };
    
    const rootReducer = combineReducers({
      todos: todosReducer,
    });
    
    export default rootReducer;