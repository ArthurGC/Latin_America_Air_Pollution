import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from '../general/Navbar';
import HomePage from './home/HomePage';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route>
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default App;
