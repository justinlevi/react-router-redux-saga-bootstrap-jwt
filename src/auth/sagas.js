// import { push } from 'react-router-redux';
// import { delay } from 'redux-saga';
import { 
  call,
  put, 
  select,
  take, 
  takeLatest,
  takeEvery 
} from 'redux-saga/effects';

import { parseJSON } from '../utils';

import Actions, { loginSuccess, loginUser } from './actions';
import { getCsrfTokenFromState } from '../rootSaga'

//const getCsrfTokenFromState = (state) => state.globalState.csrfToken

export function* loginRequestSaga(action) {

  const {username, password} = action.payload
  const token = yield select(getCsrfTokenFromState);
  // const options = {
  //   method: 'POST',
  //   credentials: 'include',
  //   headers: {
  //     'content-type': 'application/hal+json',
  //     'x-csrf-token': token,
  //     'authorization': 'json_auth'
  //   },
  //   body: JSON.stringify({
  //     username: username,
  //     password: password
  //   })
  // };
  // console.log(options);
  // let response = yield call(fetch, 'http://blt.dev/api/v1/token?_format=hal+json', options);
  // if (!response.ok) {
  //   throw Error(response.statusText);
  // } else {
  //   response = yield call(parseJSON, response);
  //   yield put(loginSuccess(response.token))
  //   console.log(response);
  // }


  let response = yield call(loginUser, username, password, token);
  yield put(loginSuccess(response.token))
}

export function* logoutRequestSaga(action) {
  yield put({ type: Actions.LOGOUT });
  // yield call(delay, 500);
  //yield put(loginSuccess('asbasdfa'));
  console.log(action.type + ': logoutRequestSaga!');
}

export function* watchLoginRequest() {
  console.log('watchLoginRequest!');
  yield takeLatest(Actions.LOGIN_REQUEST, loginRequestSaga);
}

export function* watchLoginSuccess(action) {
  console.log('HUGE SUCCESS!: ' + action.token);
}

export function* watchLoginFailure() {
  yield take(Actions.LOGIN_FAILURE);
  console.log('DAMMIT - FAILED YO');
}

export function* watchLogout() {
  yield takeLatest(Actions.LOGOUT, logoutRequestSaga);

  console.log('LOGOUT');

  // yield put(push('/'));
}