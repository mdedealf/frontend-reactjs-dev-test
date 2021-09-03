import {
  SEARCH_MOVIES,
  FETCH_MOVIES,
  FETCH_MOVIE,
  START_LOADING,
  STOP_LOADING,
} from "./types";

const initialState = {
  text: "",
  movies: [],
  movie: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case FETCH_MOVIES: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case FETCH_MOVIE: {
      return {
        ...state,
        movie: action.payload,
      };
    }
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
