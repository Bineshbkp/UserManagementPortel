import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  addUserRequest,
  addUserSuccess,
} from "./userSlice";
import { fetchUsersApi, addUserApi } from "../../api/userApi";

function* fetchUsersSaga() {
  const users = yield call(fetchUsersApi);
  yield put(fetchUsersSuccess(users));
}

function* addUserSaga(action) {
  const user = yield call(addUserApi, action.payload);
  yield put(addUserSuccess(user));
}

export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
  yield takeLatest(addUserRequest.type, addUserSaga);
}
