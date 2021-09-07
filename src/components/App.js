import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../general/Navbar';
import HomePage from './home/HomePage';
import NotMatch from './home/NotMatch';
import DetailsPage from './details/DetailsPage';

const App = () => {
  const countries = useSelector((state) => state.pollution.filtered);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {countries.map((country) => (
          <Route key={country.id} path={`/${country.name}`}>
            <DetailsPage
              name={country.name}
              air={country.air}
              components={country.components}
            />
          </Route>
        ))}
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
