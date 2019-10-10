/* eslint-disable */
import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

// Authentication Pages
import Login from '../containers/Login';

// Authenticated Pages
import Orders from '../containers/Orders';
import Products from '../containers/Products';
import Home from '../containers/Home';
import Reports from '../containers/Reports';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} isPrivate />
      <Route exact path="/login" component={Login} />
      <Route exact path="/orders" component={Orders} isPrivate />
      <Route exact path="/products" component={Products} isPrivate />
      <Route exact path="/reports" component={Reports} isPrivate />
    </Switch>
  );
}

export default Routes;
