import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Animes from "./components/animes/Animes";
import Footer from "./components/layout/Footer";
import HeaderButton from "./components/layout/HeaderButton";
import Contact from "./components/Contact";
const Container = styled.div`
  width: 90%;
  margin: 0px auto;
`;
function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/animes" component={Animes} />
          <Route exact path="/kmny-2" component={Animes} />
          <Route exact path="/contacto" component={Contact} />
        </Switch>
        <HeaderButton />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
