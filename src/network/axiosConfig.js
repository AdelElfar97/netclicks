import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",


});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    //   SHOW LOADER
    // Do something before request is sent
    config.headers["Authorization"] ='API_KEY'
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // HIDE LOADER
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // HIDE LOADER
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
