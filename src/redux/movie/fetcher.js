import axios from "axios";
import { API_KEY } from "../../constants/api";
import { FETCH_MOVIE, FETCH_MOVIES, SEARCH_MOVIES } from "./types";

export const searchMovies = (text) => (dispatch) => {
  try {
    dispatch({
      type: SEARCH_MOVIES,
      payload: text,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovies = (text) => (dispatch) => {
  try {
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = (id) => (dispatch) => {
  try {
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIE,
          payload: response.data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
