import axios from "./axiosConfig";

const baseUrl = "/api/tours";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject, header) => {
  console.log('Create tour', newObject, 'header', header)
  return axios.post(baseUrl, newObject, header);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const book = (id, body, header) => {
  return axios.post(`${baseUrl}/${id}/book`, body, header)
};

const bookCancel = (id, body, header) => {
  return axios.delete(`${baseUrl}/${id}/book`, {
    headers: header.headers,
    data: body
  });
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  book: book,
  bookCancel: bookCancel,
};
