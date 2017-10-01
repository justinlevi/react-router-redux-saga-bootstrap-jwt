import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import promise from 'redux-promise';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './rootReducer';


export default function configureStore(initialState, history) {
  const sagaMiddleWare = createSagaMiddleWare();
  const routerMW = routerMiddleware(history);
  const middleWares = [
    routerMW,
    promise,
    sagaMiddleWare,
  ];

  const enhancers = [
    applyMiddleware(...middleWares)
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  store.runSaga = sagaMiddleWare.run;

  return store;
}