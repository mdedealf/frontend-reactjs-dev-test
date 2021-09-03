import { Button, Image } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  ContainerWrapper,
  MovieDetailContainerWrapper,
} from "../../components/Wrapper/styled";
import { fetchMovie } from "../../redux/movie/fetcher";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  const { movie } = useSelector((state) => state.movie);

  const history = useHistory();
  const onClickButton = () => {
    history.replace("/");
  };

  return (
    <>
      <ContainerWrapper>
        <Header />
        <MovieDetailContainerWrapper>
          <Image width={400} height={400} src={movie.Poster} />
          <h1>{movie.Title}</h1>
          <h3>{movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <h4>Director : {movie.Director}</h4>
          <h4>Year : {movie.Year}</h4>
          <h4>Released : {movie.Released}</h4>
          <h4>Actors: {movie.Actors}</h4>
          <h4>imdbRating : {movie.imdbRating}</h4>
          <Button type="primary" size="large" onClick={onClickButton}>
            Back to All Movies
          </Button>
        </MovieDetailContainerWrapper>
        <Footer />
      </ContainerWrapper>
    </>
  );
};

export default MovieDetail;
