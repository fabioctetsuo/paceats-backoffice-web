/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../containers/Login';
import Orders from '../containers/Orders';
import Products from '../containers/Products';
import Home from '../containers/Home';
import Reports from '../containers/Reports';
import { isAuthenticated } from '../services/authentication';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <LoginRoute exact path="/login" component={Login} />
      <PrivateRoute exact path="/orders" component={Orders} />
      <PrivateRoute exact path="/products" component={Products} />
      <PrivateRoute exact path="/reports" component={Reports} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
