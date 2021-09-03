import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import combineReducers from './reducer';
import { loadState } from './config/localStorage';
import thunk from 'redux-thunk';


const gameHistory = loadState()
const store = createStore(combineReducers,{gameHistory},applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);