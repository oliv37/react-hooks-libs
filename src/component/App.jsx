import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Company from './Company';
import NoMatch from './NoMatch';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/company/:companyId">
        <Company/>
      </Route>
      <Route>
        <NoMatch/>
      </Route>
    </Switch>
  );
}

export default App;
