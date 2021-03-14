import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Modal from "react-modal";
import store from './redux/store'

Modal.setAppElement("#root");

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
