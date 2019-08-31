import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import './css/tailwind.css';
import reducer from './store/reducer'
import App from './App';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
ReactDOM.render(app, document.getElementById('root'));

