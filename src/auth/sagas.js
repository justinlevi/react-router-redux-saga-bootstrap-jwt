import { 
  call,
  put, 
  select,
  take, 
  takeLatest,
  // takeEvery 
} from 'redux-saga/effects';

import Actions, { loginSuccess, loginUser } from './actions';
import { getCsrfTokenFromState } from '../rootSaga'

// LOGIN

export function* watchLoginRequest() {
  console.log('watchLoginRequest!');
  yield takeLatest(Actions.LOGIN_REQUEST, loginRequestSaga);
}

export function* loginRequestSaga(action) {
  const {username, password} = action.payload
  const token = yield select(getCsrfTokenFromState);

  let response = yield call(loginUser, username, password, token);
  yield put(loginSuccess(response.token))
}

export function* watchLoginFailure() {
  yield take(Actions.LOGIN_FAILURE);
  console.log('DAMMIT - FAILED YO');
}

// LOGOUT

export function* watchLogout() {
  yield takeLatest(Actions.LOGOUT, logoutRequestSaga);
  console.log('LOGOUT');
}

export function* logoutRequestSaga(action) {
  yield put({ type: Actions.LOGOUT });
  console.log(action.type + ': logoutRequestSaga!');
}
