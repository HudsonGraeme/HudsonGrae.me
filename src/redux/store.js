import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducer';
import { persistReducer } from 'redux-persist';
//import createSagaMiddleware from 'redux-saga';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

//const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducer);
  
const store = createStore(persistedReducer, composeWithDevTools());


export default store;