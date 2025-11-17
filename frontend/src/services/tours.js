import axios from "./axiosConfig";

const baseUrl = "/api/tours";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const book = (id, body, header) => {
  return axios.post(`${baseUrl}/${id}/book`, body, header)
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  book: book,
};
