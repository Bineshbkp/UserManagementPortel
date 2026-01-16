import { all } from 'redux-saga/effects';
import userSaga from '../pages/users/saga';

export default function* rootSaga() {
    yield all([
        userSaga(),
    ]);
}
