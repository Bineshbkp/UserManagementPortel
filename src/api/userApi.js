// import axios from "axios";

export const loginApi = () =>
  Promise.resolve({
    token: "dummy-token",
    user: { id: 1, name: "Admin", email: "admin@test.com" },
  });

export const fetchUsersApi = () =>
  Promise.resolve([
    { id: 1, name: "binesh", email: "binesh@gmail.com", mobile: "9447766599" },
  ]);

export const addUserApi = (user) =>
  Promise.resolve({ ...user, id: Date.now() });
