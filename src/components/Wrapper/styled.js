import styled from "styled-components";

const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
`;

const ContentWrapper = styled.div`
  padding: 32px 62px;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  font-size: 16px;
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  padding: 24px;
  border-radius: 12px;
  border: 0.5px solid black;

  > :nth-child(1) {
    height: 230px;
    width: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const MovieListContainerWrapper = styled.div`
  display: grid;
  margin: 42px;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

const ModalImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
`;

const MovieDetailContainerWrapper = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;

  > :nth-child(1) {
    margin: 24px 0;
  }
`;

export {
  ContainerWrapper,
  ContentWrapper,
  FormWrapper,
  MovieCardWrapper,
  MovieListContainerWrapper,
  ModalImageWrapper,
  MovieDetailContainerWrapper,
};
