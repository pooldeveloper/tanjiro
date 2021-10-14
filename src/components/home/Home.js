import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Title = styled.h1`
  font-size: 25px;
  font-weight: 800;
  @media (min-width: 750px) {
    font-size: 35px;
  }
`;
const TitleContainer = styled.div`
  color: var(--white);
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  gap: 20px;
  & > a {
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    color: var(--white);
    font-size: 13px;
    @media (min-width: 750px) {
        width: 250px;
        height: 50px;
        font-size: 16px;
    }
  }
`;
const TitleH3 = styled.h3`
  font-size: 15px;
  @media (min-width: 750px) {
    font-size: 18px;
  }
`;

const Home = () => {
  document.body.classList.add("bg");
  return (
    <TitleContainer>
      <Helmet>
        <title>Tanjiro | Ver animes adelantados</title>
      </Helmet>
      <Title>La primera plataforma de Animes para ver Animes adelantados</Title>
      <TitleH3>Creada de fans para fans</TitleH3>
      <NavLink to="/kmny-2">Ver ahora KMNY temp 2!</NavLink>
    </TitleContainer>
  );
};

export default Home;
