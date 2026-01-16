import axios from "axios";

//  const API_BASE_URL = "http://localhost:3001";
 const API_BASE_URL = "https://696a06923a2b2151f846da2e.mockapi.io/api";

// GET users
export const fetchUsersApi = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

// ADD user
export const addUserApi = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/users`, user);
  return response.data;
};

// UPDATE user
export const updateUserApi = async (id, user) => {
  const response = await axios.put(`${API_BASE_URL}/users/${id}`, user);
  return response.data;
};

// DELETE user
export const deleteUserApi = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
  return response.data;
};
