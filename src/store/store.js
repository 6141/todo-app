
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../redux/sagas/rootSaga';
import todosReducer from '../redux/reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';



const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(
    todosReducer, 
   composedEnhancer
)

sagaMiddleware.run(rootSaga)


export default store;
