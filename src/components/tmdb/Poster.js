import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0px auto;

  @media (max-width: 335px) {
    & img{
      width: 100%;
    }
  }
`;

const Poster = ({ poster }) => {
  const baseUrl = "https://image.tmdb.org/t/p/";
  const fileSize = "300";
  const posterUrl = baseUrl + "w" + fileSize + poster;
  return (
    <Container>
      <img alt="poster" src={posterUrl}></img>
    </Container>
  );
};

export default Poster;
