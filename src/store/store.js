
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combinedReducers({
   todos: todosReducer,
})

const store = createStore(
    combinedReducers, 
    applyMiddleware(sagaMiddleware),
    window?.__REDUX_DEVTOOLS_EXTENSION__ && window?.__REDUX_DEVTOOLS_EXTENSION__()
)

sagaMiddleware.run(rootSaga)


export default store;
