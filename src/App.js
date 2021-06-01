import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  // fetch character list and make API request
  useEffect(() => {
    const fetch = async () => {
      if (query === "") {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
        );
        // console.log(result.data.data.results);
        setCharacters(result.data.data.results);
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
        );
        setCharacters(result.data.data.results);
      }
    };
    fetch();
  }, [query]); // when query changes call fetch function

  return (
    <Container>
      {/* we need to get text from onChange function */}
      <Header query={(q) => setQuery(q)} />
      <Characters characters={characters} />
    </Container>
  );
}

export default App;

const Container = styled.div``;
