import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const EpisodeUl = styled.ul`
  list-style: none;
  & li {
    padding: 16px;
    display: block;
    border-bottom: 1px solid #eceff1;
    border-color: rgba(68, 61, 104, 0.5);
    font-size: 16px;
    transition: all 100ms;
    color: var(--white);
    &.active {
      background-color: var(--primary);
    }
    &:hover {
      background-color: var(--primary);
      transition: all 100ms;
    }
    & i {
      margin-right: 10px;
    }
  }
`;

const useEpisodes = (episodes) => {
  const [state, setState] = useState({
    episodes,
  });
  function consultUrl(e, url, title) {
    setState({ url, title });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const Select = () => (
    <Fragment>
      <EpisodeUl>
        {episodes.map((episode) => {
          const { title, url } = episode;
          return (
            <li key={uuidv4()} onClick={(e) => consultUrl(e, url, title)}>
              <i className="far fa-play-circle"></i>
              {title}
            </li>
          );
        })}
      </EpisodeUl>
    </Fragment>
  );
  return [state, Select];
};
export default useEpisodes;
