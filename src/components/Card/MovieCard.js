import { Button } from "antd";
import { MovieCardWrapper } from "../Wrapper/styled";

const MovieCard = (data) => {
  const { movieImage, movieName, movieYear, onClickImage, onClickButton } = data;
  return (
    <>
      <MovieCardWrapper>
        <img src={movieImage} alt="movie-img" onClick={() => onClickImage(movieImage)}/>
        <h3>{movieName}</h3>
        <h4>{movieYear}</h4>
        <Button type="primary" size="large" onClick={onClickButton}>
          Lihat Detail
        </Button>
      </MovieCardWrapper>
    </>
  );
};

export default MovieCard;
