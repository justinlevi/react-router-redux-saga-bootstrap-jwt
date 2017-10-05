import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

const ConnectedSwitch = connect(state => ({
  location: state.router.location
}))(Switch);

export const Routes = ({ location }) => (
  <div>
    <div className="container">
      <div className="row">
        <ConnectedSwitch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </ConnectedSwitch>
      </div>
    </div>
  </div>
);