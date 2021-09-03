// import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Movie from "./container/movie/Movie";
import MovieDetail from "./container/movie/MovieDetail";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Movie />
          </Route>
          <Route path="/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
