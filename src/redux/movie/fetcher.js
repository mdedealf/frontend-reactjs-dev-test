import axios from "axios";
import { API_KEY } from "../../constants/api";
import {
  fetchAllMovies,
  fetchTheMovie,
  searchAllMovies,
  startLoading,
  stopLoading,
} from "./actions";

export const searchMovies = (text) => (dispatch) => {
  try {
    dispatch(searchAllMovies(text));
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovies = (text) => (dispatch) => {
  try {
    dispatch(startLoading());
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`)
      .then((response) => {
        dispatch(stopLoading());
        dispatch(fetchAllMovies(response.data));
      });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = (id) => (dispatch) => {
  try {
    dispatch(startLoading());
    axios
      .get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((response) => {
        dispatch(stopLoading());
        dispatch(fetchTheMovie(response.data));
      });
  } catch (error) {
    console.log(error);
  }
};
