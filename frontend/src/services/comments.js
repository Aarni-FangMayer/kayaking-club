import axios from "./axiosConfig";

const baseUrl = "/api/blogs";

const addComment = (blogId, comment) => {
  return axios.post(`${baseUrl}/${blogId}/comments`, comment).then(res => res.data);
};

export default { addComment };