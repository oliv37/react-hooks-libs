import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Company from './Company';
import DATA_COMPANIES from "../data/companies";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fake ajax request
    Promise.resolve(DATA_COMPANIES)
      .then(data => dispatch({type: 'UPDATE_COMPANIES', payload: data}));
  }, []);

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
