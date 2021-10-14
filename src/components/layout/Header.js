import React from "react";
import styled from "@emotion/styled";
import {NavLink} from 'react-router-dom'

const Header = () => {
  const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90px;
    z-index: 50;
    position: relative;
    & > a {
      font-size: 40px;
      color: var(--primary);
      text-decoration: none;
      font-family: "Bebas Neue", cursive;
    }
  `;
  const Nav = styled.nav`
    display: none;
    & a{
      color: #aaa;
      text-decoration: none;
      &:hover {
        color: var(--white);
      }
      &.active{
        color: var(--white);
      }
    }
    @media (min-width: 750px) {
        display: flex;
        gap: 20px;
    }
  `;
  return (
    <Header>
      <NavLink to="/">Tanjiro.netlify.app</NavLink>
      <Nav>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/animes">Animes</NavLink>
        <NavLink activeClassName="active" to="/contacto">Contacto</NavLink>
      </Nav>
    </Header>
  );
};

export default Header;
