import axios from "./axiosConfig";

const baseUrl = "/api/blogs";

const toggleLike = (blogId, userId, token) => {
  const body = { userId };
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.put(`${baseUrl}/${blogId}/like`, body, headers);
};

export default { toggleLike };
