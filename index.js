import React from 'react';
import { render } from 'react-dom';
import App from './component/App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import './style.css';

const store = createStore(reducer);

render(
  <Provider store={store}>
      <Router>
        <App/>
      </Router>
  </Provider>, 
  document.getElementById('root')
);