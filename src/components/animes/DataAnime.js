import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import Overview from "../tmdb/Overview";
import Poster from "../tmdb/Poster";

const Container = styled.div`
  margin: 20px auto;
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`;

const DataAnime = () => {
  const consultAPI = async ()=>{
    const API = await fetch('https://api.themoviedb.org/3/tv/85937/season/2?api_key=3157f48d4a7ca6ebeef671b8ce1c1898&language=es');
    const dataAPI = await API.json();
    setData({
      poster: dataAPI.poster_path,
      name: dataAPI.name,
      nextEpisode: dataAPI.next_episode_to_air
    }); 
  }

  const [data, setData] = useState({
    poster: "",
    name: "",
    nextEpisode: "",
  });

  useEffect(() => {
    consultAPI();
  }, [])


  const { poster, name, nextEpisode} = data;

  return (
    <Container>
      <Poster poster={poster} />
      <Overview name={name} nextEpisode={nextEpisode}/>
    </Container>
  );
};

export default DataAnime;
