import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import {CockPit, Register, Settings, RegisterUser} from './pages';
import {Nav, Footer} from './layout';


function App() {
  return (
    <div className="flex flex-col h-screen fl">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/registerUser'>
            <RegisterUser />
          </Route>
          <Route exact path='/settings'>
            <Settings />
          </Route>
          <Route exact path='/'>
            <CockPit />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
