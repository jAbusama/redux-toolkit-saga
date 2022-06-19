import { takeLatest } from 'redux-saga/effects';
import { getUser } from '../slices/userSlice';
import { handleGetUser } from './handler/user';

export function* watcherSaga() {
	yield takeLatest(getUser.type, handleGetUser);
}
