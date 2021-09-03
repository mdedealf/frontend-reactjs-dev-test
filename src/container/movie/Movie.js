import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  ContainerWrapper,
  ContentWrapper,
  FormWrapper,
  ModalImageWrapper,
  MovieListContainerWrapper,
} from "../../components/Wrapper/styled";
import { Button, Empty, Input, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movie/fetcher";
import MovieCard from "../../components/Card/MovieCard";
import { useHistory } from "react-router-dom";

const Movie = () => {
  const [keyword, setKeyword] = useState({
    text: "",
  });
  const [image, setImage] = useState("");
  const movieData = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    setKeyword((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSearchMovies = (e) => {
    e.preventDefault();

    const { text } = keyword;

    dispatch(fetchMovies(text));
  };

  useEffect(() => {
    dispatch(fetchMovies("Batman"));
  }, [dispatch]);

  const onClickImageListener = (image) => {
    setImage(image);
    showModal();
  };

  const history = useHistory();
  const onClickButtonListener = (id) => {
    history.push(id);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const ModalImage = (props) => {
    const { img } = props;
    return (
      <ModalImageWrapper>
        <Modal
          title="Movie Cover"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <img src={img} alt="movie-img" />
        </Modal>
      </ModalImageWrapper>
    );
  };

  return (
    <>
      <ContainerWrapper>
        <Header />
        <ContentWrapper>
          <FormWrapper onSubmit={handleSearchMovies}>
            <Input
              placeholder="Cari nama movie..."
              name="text"
              value={keyword.text}
              onChange={handleFieldChange}
            />
            <Button
              type="primary"
              icon={<SearchOutlined />}
              size="large"
              onClick={handleSearchMovies}
            >
              Search
            </Button>
          </FormWrapper>
          <MovieListContainerWrapper>
            {movieData.movies.Response === "False" ? (
              <Empty />
            ) : (
              movieData.movies.Search?.map((data) => (
                <MovieCard
                  key={data.imdbID}
                  movieImage={data.Poster}
                  movieName={data.Title}
                  movieYear={data.Year}
                  onClickImage={onClickImageListener}
                  onClickButton={() => onClickButtonListener(data.imdbID)}
                />
              ))
            )}
          </MovieListContainerWrapper>
        </ContentWrapper>
        <Footer />
        <ModalImage img={image} />
      </ContainerWrapper>
    </>
  );
};

export default Movie;
