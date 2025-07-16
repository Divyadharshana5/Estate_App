import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8000/Backend",
  withCredentials: true,
});

export default apiRequest;
