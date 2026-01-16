// ==================================
// 1️⃣ IMPORT ACTIONS FROM SLICE
// ==================================
import {
  getUsersRequest,
  addUserRequest,
  updateUserRequest,
  updateUserSuccess,   // ✅ add this
  deleteUserRequest
} from './slice';

// ==================================
// 2️⃣ EXPORT ACTIONS (USED IN UI)
// ==================================
export {
  getUsersRequest,
  addUserRequest,
  updateUserRequest,
  updateUserSuccess,  // ✅ add this
  deleteUserRequest
};
