import React, { Component } from 'react';
// import { connect, Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import { Routes } from './routes';
import configureStore from './configureStore';
import Navbar from './components/HeaderNav';

import './index.css';
import './App.css';
import './styles/index.css';

import logo from './logo.svg';

const networkInterface = createNetworkInterface({
  uri: 'http://blt.dev/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <ConnectedRouter history={history}>
          <div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Navbar />
            <Routes />
          </div>
        </ConnectedRouter>
      </ApolloProvider>
    );
  }
}

export default App;
