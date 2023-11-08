import { call, put, takeLatest } from 'redux-saga/effects'
import { saveTodoToLocalStorage } from '../../utils/saveToLocalStorage';

function* addTodoSaga(action){
    try{
        yield call(saveTodoToLocalStorage, action.payload);
        yield put(type: 'ADD_TODO', payload: action.payload) // store gets updateds
    }
    catch(error){
         console.log('error in addtodo saga', error)
    }
}

function* watchAddTodo(){
    yield takeLatest('ADD_TODO_ASYNC', addTodoSaga)
}
export default function* todoSaga(){
    yield all([
        watchAddTodo()
    ])
}

