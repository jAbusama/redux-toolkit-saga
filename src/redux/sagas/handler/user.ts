import { call, put } from 'redux-saga/effects';
import { setUser } from '../../slices/userSlice';
import { requestGetUser } from '../request/userRequest';

export function* handleGetUser(action: any) {
	try {
		// @ts-ignore
		const response = yield call(requestGetUser);
		const { data } = response;
		yield put(setUser(data));
	} catch (error) {
		console.log('err', error);
	}
}
