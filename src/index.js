import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import './css/tailwind.css';
import reducer from './store/reducer'
import { loggerMiddleware } from './store/middlewares'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(loggerMiddleware)
  )
);

const app = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
ReactDOM.render(app, document.getElementById('root'));

