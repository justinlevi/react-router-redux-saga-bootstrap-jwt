import * as React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { gql, graphql } from 'react-apollo';


import About from '../pages/About';
import Article from '../pages/Article';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';


const MyQuery = gql`
{ 
  nodeQuery(offset:0, limit:5){
    entities{
      entityId
      ...on NodePage {
        url:entityUrl {
          alias
        }
        
        title
        body
      }
    }
  }
}
`;


const ConnectedSwitch = connect(state => ({
  location: state.router.location
}))(Switch);

export const Routes = ({ location }) => (
  <div>
    <div className="container">
      <div className="row">
        <ConnectedSwitch>
          <Route path="/" exact component={graphql(MyQuery)(Home)} />
          <Route path="/article/:title?/" exact component={graphql(MyQuery)(Article)} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </ConnectedSwitch>
      </div>
    </div>
  </div>
);