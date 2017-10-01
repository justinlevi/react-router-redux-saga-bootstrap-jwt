// import { push } from 'react-router-redux';
import { delay } from 'redux-saga';
import { 
  call,
  put, 
  take, 
  takeEvery 
} from 'redux-saga/effects';

import ActionTypes, {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
} from './actions';

export function* loginRequestSaga(action) {
  // yield put({type: ActionTypes.LOGIN_REQUEST});
  yield call(delay, 500);
  yield put(loginSuccess('asbasdfa'));
  console.log(action.type + 'loginRequestSaga!');
}

export function* watchLoginRequest() {
  console.log('watchLoginRequest!');
  yield takeEvery(ActionTypes.LOGIN_REQUEST, loginRequestSaga);
}

export function* watchLoginSuccess() {
  yield take(ActionTypes.LOGIN_SUCCESS);
  console.log('HUGE SUCCESS!');
}

export function* watchLoginFailure() {
  yield take(ActionTypes.LOGIN_FAILURE);
  console.log('DAMMIT - FAILED YO');
}

export function* watchLogout() {
  yield takeEvery(ActionTypes.LOGOUT, logout);

  console.log('LOGOUT');

  // yield put(push('/'));
}