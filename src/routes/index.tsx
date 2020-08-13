import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Search from '../pages/search';
import SignIn from '../pages/SigIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dasboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;
