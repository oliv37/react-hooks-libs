import React from 'react';
import { render } from 'react-dom';
import App from './component/App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import axios from 'axios';
import './style.css';

function renderApp() {
  render(
    <Provider store={store}>
        <Router>
          <App/>
        </Router>
    </Provider>, 
    document.getElementById('root')
  );
}

const store = createStore(reducer);

axios.get('/companies.json')
  .then(response => store.dispatch({type: 'UPDATE_COMPANIES', payload: response.data}))
  .then(() => renderApp());


