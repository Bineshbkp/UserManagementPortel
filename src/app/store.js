// ================================
// 1️⃣ IMPORTS
// ================================
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// User reducer & saga
import userReducer from '../pages/users/slice';
import userSaga from '../pages/users/saga';

// ================================
// 2️⃣ CREATE SAGA MIDDLEWARE
// ================================
const sagaMiddleware = createSagaMiddleware();

// ================================
// 3️⃣ CONFIGURE STORE
// ================================
const store = configureStore({
  reducer: {
    users: userReducer   // 🔑 reducer key must be 'users'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

// ================================
// 4️⃣ RUN SAGA
// ================================
sagaMiddleware.run(userSaga);

// ================================
// 5️⃣ EXPORT STORE
// ================================
export default store;
