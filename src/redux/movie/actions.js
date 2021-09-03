import { SEARCH_MOVIES, FETCH_MOVIES, FETCH_MOVIE, START_LOADING, STOP_LOADING } from "./types";

export const searchAllMovies = (data) => {
  return {
    type: SEARCH_MOVIES,
    payload: data,
  };
};

export const fetchAllMovies = (data) => {
  return {
    type: FETCH_MOVIES,
    payload: data,
  };
};

export const fetchTheMovie = (data) => {
  return {
    type: FETCH_MOVIE,
    payload: data,
  };
};

export const startLoading = () => {
  return {
    type: START_LOADING
  }
}

export const stopLoading = () => {
  return {
    type: STOP_LOADING
  }
}