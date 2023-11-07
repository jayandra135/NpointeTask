import axios from "axios";

const Api_key = "api_key=b4a69bded89f74d5c79e4b7ce02e3041";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getDiscoverMovies = () => {
  return instance.get(`/discover/movie?&sort_by=popularity.desc&${Api_key}`);
};

export const searchMovies = (query) => {
  return instance.get(`/search/movie?query=${query}&${Api_key}`);
};
