import { axiosInstance } from "./../../network/axiosConfig";

export const getMoviesList = () => (dispatch) => {
    return axiosInstance
      .get("/3/movie/popular", {
        params: {
          limit: 5,
        },
      })
      .then((res) =>
        dispatch({
          type: 'GET_MOVIES_LIST',
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
  