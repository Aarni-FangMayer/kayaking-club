import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const loggedUserJSON = window.localStorage.getItem("loggedUser");
  if (loggedUserJSON) {
    const { token } = JSON.parse(loggedUserJSON);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;