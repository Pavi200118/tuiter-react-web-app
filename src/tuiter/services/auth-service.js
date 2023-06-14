import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;
const BASE_API = "http://localhost:4000/api/users";

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
 const response = await api.post(`${BASE_API}/login`, { username, password });
 const user = response.data;

 return user;
};
export const logout = async () => {
 const response = await api.post(`${BASE_API}/logout`);
 return response.data;
};
export const profile = async () => {
 const response = await api.post(`${BASE_API}/profile`);
 return response.data;
};
export const getProfile = async () => {
  const response = await api.get(`${BASE_API}/profile`);
  return response;
};

export const updateUser = async (user) => {
 const response = await api.put(`${USERS_URL}/${user._id}`, user);
 return response.data;
};
export const register = async ({ username, password }) => {
  const response = await api.post(`${USERS_URL}/register`, { username, password });
  const user = response.data;
  return user;
};
