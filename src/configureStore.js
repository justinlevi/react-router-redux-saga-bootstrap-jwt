import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import promise from 'redux-promise';
import { routerMiddleware } from 'react-router-redux';

import rootSaga from "./rootSaga";
import rootReducer from './rootReducer';


const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleWare();
  const routerMW = routerMiddleware(history);
  const middlewares = [
    routerMW,
    promise,
    sagaMiddleware,
  ];
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;