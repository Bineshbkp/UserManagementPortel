import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchUsersApi,
  addUserApi,
  updateUserApi,
  deleteUserApi
} from '../../services/api';

import {
  getUsersSuccess,
  getUsersFailure,
  addUserSuccess,
  addUserFailure,
  updateUserSuccess,
  updateUserFailure,
  deleteUserSuccess,
  deleteUserFailure
} from './slice';

/* =========================
   FETCH USERS
========================= */
function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi);
    yield put(getUsersSuccess(users));
  } catch (err) {
    yield put(getUsersFailure(err.message));
  }
}

/* =========================
   ADD USER
========================= */
function* addUserSaga(action) {
  try {
    const newUser = yield call(addUserApi, action.payload);
    yield put(addUserSuccess(newUser));
  } catch (err) {
    yield put(addUserFailure(err.message));
  }
}

/* =========================
   UPDATE USER
========================= */
function* updateUserSaga(action) {
  try {
    const { id, data } = action.payload;
    const updatedUser = yield call(updateUserApi, id, data);
    yield put(updateUserSuccess(updatedUser));
  } catch (err) {
    yield put(updateUserFailure(err.message));
  }
}

/* =========================
   DELETE USER
========================= */
function* deleteUserSaga(action) {
  try {
    yield call(deleteUserApi, action.payload);
    yield put(deleteUserSuccess(action.payload));
  } catch (err) {
    yield put(deleteUserFailure(err.message));
  }
}

/* =========================
   WATCHER
========================= */
export default function* userSaga() {
  yield takeLatest('users/getUsersRequest', fetchUsersSaga);
  yield takeLatest('users/addUserRequest', addUserSaga);
  yield takeLatest('users/updateUserRequest', updateUserSaga);
  yield takeLatest('users/deleteUserRequest', deleteUserSaga);
}
