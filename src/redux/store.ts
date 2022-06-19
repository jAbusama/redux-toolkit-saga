import {
	configureStore,
	ThunkAction,
	Action,
	combineReducers,
	getDefaultMiddleware
} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import { watcherSaga } from './sagas/rootSaga';
import userReducer from './slices/userSlice';
import counterReducer from './slices/counterSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	counter: counterReducer,
	user: userReducer
});

export const store = configureStore({
	reducer,
	middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
