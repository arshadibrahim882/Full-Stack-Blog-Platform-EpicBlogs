import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//Attach token.
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

//Optional: handle global errors.
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.log("Unauthorized - login again");
    }
    return Promise.reject(err);
  }
);

export default API;