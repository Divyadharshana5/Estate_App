import axios from "axios";

const apiRequest = axios.create({
  baseURL: "/Backend",
  withCredentials: true,
});

export default apiRequest;
