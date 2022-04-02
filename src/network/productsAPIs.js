import { axiosInstance } from "./axiosConfig";

export const getProductDetails = (id) => {
  return axiosInstance .get("3/movie/popular", {
    params: {
      api_key: '5420c619698ceb25489631bfca2e32df',
    },
  })}

export const getProduct = () => {
  return axiosInstance.get(`/products`);
};
