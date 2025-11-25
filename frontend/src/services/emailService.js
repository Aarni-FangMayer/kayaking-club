import axios from "axios";

export const sendContactEmail = (data) => {
  return axios.post("/api/email", data);
};