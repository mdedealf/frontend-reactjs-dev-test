import { SEARCH_MOVIES, FETCH_MOVIES, FETCH_MOVIE } from "./types";

export const searchMovies = (data) => {
  return {
    type: SEARCH_MOVIES,
    payload: data,
  };
};

export const fetchMovies = (data) => {
  return {
    type: FETCH_MOVIES,
    payload: data,
  };
};

export const fetchMovie = (data) => {
  return {
    type: FETCH_MOVIE,
    payload: data,
  };
};
