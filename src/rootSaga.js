import { delay } from 'redux-saga';
import { all, call, put, select } from 'redux-saga/effects';

import { fetchCsrfTokenSuccess } from './rootActions';

import { 
  // watchLoginFailure, 
  watchLoginRequest, 
  // watchLoginSuccess, 
  // watchLogout 
} from './auth/sagas';

export function* helloSaga() {
  yield call(delay, 1000);
  console.log('Hello Sagas!');
}

export const getCsrfTokenFromState = (state) => state.globalState.csrfToken

function *getCsrfToken() {

  const token = yield select(getCsrfTokenFromState);
  if(token === null) {
    let response = yield call(fetch, 'http://blt.dev/session/token', { method: 'GET' });
    
    if (!response.ok) {
      throw Error(response.statusText);
    }else {
      response = yield response.text();
      console.log('X-CSRF Token: ' + response);
      yield put(fetchCsrfTokenSuccess(response));
    }
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    getCsrfToken(),
    watchLoginRequest(),
    // watchLoginSuccess(),
    // watchLoginFailure(),
    // watchLogout(),
  ]);
}