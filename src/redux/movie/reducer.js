import { SEARCH_MOVIES, FETCH_MOVIES, FETCH_MOVIE } from "./types";

const initialState = {
  text: "",
  movies: [],
  movie: [],
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
    default:
      return state;
  }
};

export default reducer;
