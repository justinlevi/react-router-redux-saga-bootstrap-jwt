import { delay } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

export function* helloSaga() {
  yield call(delay, 1000);
  console.log('Hello Sagas!');
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
  ]);
}