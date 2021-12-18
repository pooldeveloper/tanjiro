import React from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import Iframe from "react-iframe";
import useEpisodes from "../../hooks/useEpisodes";
import { DiscussionEmbed } from "disqus-react";
import DataAnime from "./DataAnime";

const AnimeContainer = styled.div`
  color: var(--white);
`;
const Main = styled.main`
  text-decoration: none;
  padding: 20px 0px;
`;
const IframeContainer = styled.div`
  margin: 0px auto;
  width: calc(100vw * 1120 / 1366);
  height: calc(100vw * 630 / 1366);
  @media (min-width: 750px) {
    width: calc(100vw * 800 / 1366);
    height: calc(100vw * 450 / 1366);
  }
`;
const TitleH3 = styled.h3`
  font-size: 25px;
  color: var(--white);
  text-align: center;
  margin: 20px 0px;
`;
const TitleH4 = styled.h4`
  font-size: 20px;
  margin: 20px 0px;
  & > i {
    font-size: 20px;
    color: var(--primary);
    margin-right: 10px;
  }
`;
const CommentsContainer = styled.div`
  margin-bottom: 120px;
  @media (min-width: 750px) {
    margin-bottom: 50px;
  }
`;

const Animes = () => {
  document.body.classList.remove("bg");
  const episodes = [
    {
      title: "Kimetsu No Yaiba , OTS Episodio 19 [Kamado Tanjirou No Uta] sub Español Completo",
      url: "https://www.youtube.com/watch?v=fxtTfq7N_uo"
    }
  ]
  
  const episodesReverse = episodes.reverse();
  const [state, Select] = useEpisodes(episodesReverse);
  return (
    <AnimeContainer>
      <Helmet>
        <title>Tanjiro | Ver temporada 2 de Kimetsu no Yaiba</title>
      </Helmet>
      {state.url === undefined ? (
        <DataAnime />
      ) : (
        <Main>
          <IframeContainer>
            <Iframe
              url={state.url}
              className="iframe"
              display="initial"
              allow="fullscreen"
              position="relative"
              width="100%"
              height="100%"
            />
          </IframeContainer>
          <TitleH3>{state.title}</TitleH3>
        </Main>
      )}
      <TitleH4>
        <i className="fas fa-list"></i> Episodios:
      </TitleH4>
      <Select />
      <CommentsContainer>
        <TitleH4>
          <i className="fas fa-comment"></i> Comentarios:
        </TitleH4>
        <DiscussionEmbed
          shortname="tanjiro-1"
          config={{
            url: "https://pooldeveloper.netlify.app",
            identifier: "0",
            title: "comentarios",
            language: "es_MX",
          }}
        />
      </CommentsContainer>
    </AnimeContainer>
  );
};
export default Animes;
