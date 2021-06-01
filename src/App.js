import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  const [characters, setCharacters] = useState([]);

  // fetch character list and make API request
  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
      );
      // console.log(result.data.data.results);
      setCharacters(result.data.data.results);
    };

    fetch();
  }, []);

  return (
    <Container>
      <Header />
      <Characters characters={characters} />
    </Container>
  );
}

export default App;

const Container = styled.div``;
