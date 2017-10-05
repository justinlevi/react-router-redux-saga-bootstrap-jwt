import React, { Component } from 'react';

import { connect, Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from './configureStore';

import Navbar from './components/HeaderNav';

import './index.css';
import './App.css';
import './styles/index.css';

import logo from './logo.svg';

import { Routes } from './routes';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <ConnectedRouter history={history}>
          <div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Navbar />
            <Routes />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
