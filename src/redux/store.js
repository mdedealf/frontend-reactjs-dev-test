import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import movieReducer from "./movie/reducer";

const appReducer = combineReducers({
  movie: movieReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
