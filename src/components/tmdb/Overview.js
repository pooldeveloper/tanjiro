import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  @media (min-width: 750px) {
    height: 450px;
    width: 70%;
    flex-wrap: wrap;
  }
`;
const TitleH1 = styled.h1`
  font-size: 25px;
`;
const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  color: var(--gray);
  border-bottom: 2px solid #9e9e9e1f;
  margin-bottom: 10px;
`;

const Overview = ({name}) => {
  return (
    <Container>
      <TitleH1>{name}</TitleH1>
      <Ul>
        <Li>
          <Subtitle>Sinopsis:</Subtitle>
          <p>Una version televisada de la pelicula que no se mostraron en ella.</p>
        </Li>
        <Li>
          <Subtitle>Próximo Episodio:</Subtitle>
          <p>17 de Octubre del 2021</p>
        </Li>
        <Li>
          <Subtitle>Cantidad de episodios:</Subtitle>
          <p>1</p>
        </Li>
      </Ul>
    </Container>
  );
};

export default Overview;
