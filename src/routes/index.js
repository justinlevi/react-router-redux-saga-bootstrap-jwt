import * as React from 'react';
import { Route, Switch } from 'react-router';

import Navbar from '../components/HeaderNav';

import About from '../pages/about';
import Home from '../pages/home';

export const Routes = () => (
  <div>
    <div className="container">
      <div className="row">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </div>
  </div>
);