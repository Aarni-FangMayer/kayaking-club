import axios from "axios";
const baseUrl = "/api/login";

let token = null;

export const setToken = newToken => {
  token = `Bearer ${newToken}`;
};

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login, setToken };
