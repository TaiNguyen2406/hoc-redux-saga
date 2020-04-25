import { fork } from 'redux-saga/effects';

function* watchFetchListTaskAction() {
  console.log('watching fetch list task action');
  yield 1;
}

function* watchCreateTaskACtion() {
  console.log('watching create a task action');
  yield 2;
}

function* watchUpdateTaskACtion() {
  console.log('watching update a task action');
  yield 2;
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  setTimeout(null, 5000);
  yield fork(watchCreateTaskACtion);
  yield fork(watchUpdateTaskACtion);
}
export default rootSaga;
