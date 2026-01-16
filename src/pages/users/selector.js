// ==================================
// 1️⃣ BASE SELECTOR
// ==================================
export const selectUserState = (state) => state.users;

// ==================================
// 2️⃣ USERS LIST
// ==================================
export const selectUserList = (state) =>
  selectUserState(state).users;

// ==================================
// 3️⃣ LOADING STATE
// ==================================
export const selectUserLoading = (state) =>
  selectUserState(state).loading;

// ==================================
// 4️⃣ ERROR STATE
// ==================================
export const selectUserError = (state) =>
  selectUserState(state).error;
