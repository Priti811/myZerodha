import axios from "axios";

const api = axios.create({
  baseURL: "https://myzerodha-backend.onrender.com",
  withCredentials: true,
});

export default api;
