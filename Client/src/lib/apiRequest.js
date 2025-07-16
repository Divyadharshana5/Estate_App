import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8000/Backend",
  withCredentials: true,
});

// Attach token to every request automatically
apiRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 errors globally
apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"; // Adjust route if needed
    }
    return Promise.reject(error);
  }
);

export default apiRequest;
