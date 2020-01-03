import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';
import Home from './Home';
import Company from './Company';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/companies.json')
      .then(response => dispatch({type: 'UPDATE_COMPANIES', payload: response.data}));
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/company/:companyId">
        <Company/>
      </Route>
    </Switch>
  );
}

export default App;
