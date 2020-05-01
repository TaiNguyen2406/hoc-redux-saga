import { fork, take, call, put, delay } from 'redux-saga/effects';
import { fetchListTaskFailed, fetchListTaskSuccess } from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
import * as taskTypes from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(500);
    yield put(hideLoading());
  }
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
