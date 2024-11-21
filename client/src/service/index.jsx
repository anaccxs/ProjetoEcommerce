// client/src/service/index.jsx
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/produtos",
});

export default api;
