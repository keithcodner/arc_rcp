import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import {CockPit, Register, Settings} from './pages';
import {Nav} from './layout';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
        <Route exact path='/'>
          <CockPit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
