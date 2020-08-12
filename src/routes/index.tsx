import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '../pages/search';
import SignIn from '../pages/SigIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Routes;
