import App from './components/app';
import reducer from './store/reducers/index';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';

const store = createStore(reducer, compose(applyMiddleware(thunkMiddleware)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
