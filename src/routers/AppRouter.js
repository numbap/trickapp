import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import TrickDashboardPage from '../components/tricks/TrickDashboardPage';
import AddTrickPage from '../components/tricks/AddTrickPage';
import EditTrickPage from '../components/tricks/EditTrickPage';
import NotFoundPage from '../components/tricks/NotFoundPage';
import LoginPage from '../components/tricks/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={TrickDashboardPage} />
        <PrivateRoute path="/create" component={AddTrickPage} />
        <PrivateRoute path="/edit/:id" component={EditTrickPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
