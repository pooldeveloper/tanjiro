import React from "react";
import {Helmet} from "react-helmet";
import styled from "@emotion/styled";

const Form = styled.form`
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
    font-family: 'Open Sans', sans-serif;
    gap: 20px;
`;
const Title = styled.h1`
    font-size: 25px;
    font-weight: 800;
    @media(min-width:750px){
        font-size: 35px;
    }
`;
const TitleH3 = styled.h3`
     font-size: 15px;
    @media(min-width:750px){
        font-size: 18px;
    }
`;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & i{
      font-size: 50px;
      color: var(--primary);
    }
`;

const Contact = () => {
  document.body.classList.add("bg");
  const sendEmail = e =>{
    e.preventDefault();
  }
  return (
    <Form onSubmit={sendEmail}>
      <Helmet>
        <title>Tanjiro | Contacto</title>
      </Helmet>
      <Title>Quieres contactarte con el creador</Title>
      <TitleH3>Puedes contactarte por su pagina dando click al icono de abajo :D</TitleH3>
      <Wrap>
        <a href="https://pooldeveloper.github.io"><i class="fas fa-link"></i></a>
      </Wrap>
    </Form>
  );
};

export default Contact;
