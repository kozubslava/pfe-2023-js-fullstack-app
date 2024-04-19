import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:5000',
});

// функція яка робить POST запит на сервер
export async function registration(userData) {
  const response = await httpClient.post('/auth/registration', userData);

  return response;
}

export const login = async (loginData) =>
  httpClient.post('/auth/login', loginData);

export const refresh = async (userId) =>
  httpClient.post('/auth/refresh', { userId });

export async function getUser(userId) {
  const response = await httpClient.get(`/users/${userId}`);

  return response;
}

export async function getUsers() {
  const response = await httpClient.get('/users');

  return response;
}

export async function updateUser(userId, userData) {
  const response = await httpClient.put(`/users/${userId}`, userData);

  return response;
}

export async function deleteUser(userId) {
  const response = await axios.delete(`/users/${userId}`);

  return response;
}
