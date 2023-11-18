
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../redux/reducers/reducers';
import rootSaga from '../redux/sagas/rootSaga';



const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(
    rootReducer, 
   composedEnhancer
)

sagaMiddleware.run(rootSaga)


export default store;
