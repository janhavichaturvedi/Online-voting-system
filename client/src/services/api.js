import axios from 'axios';

const host = 'http://localhost:4000/api';

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const call = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
};

export default { setToken, call };

export const deletePoll = async (pollId) => {
  try {
    await call('delete', `poll/${pollId}`);
  } catch (error) {
    console.error('Error deleting poll:', error);
    // Handle error if necessary
  }
};
