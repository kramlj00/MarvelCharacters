import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");

  // fetch character list and make API request
  useEffect(() => {
    const fetch = async () => {
      if (searchText === "") {
        // if favorites array is empty of if it doesn't exist
        if (
          localStorage.getItem("favorites") === "[]" ||
          !localStorage.getItem("favorites")
        ) {
          localStorage.setItem("favorites", "[]");
          const result = await axios(
            `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
          );
          // console.log(result.data.data.results);
          setCharacters(result.data.data.results);
        } else {
          let favoriteCharacters = JSON.parse(
            localStorage.getItem("favorites")
          );
          setCharacters(favoriteCharacters);
        }
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchText}&ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
        );
        setCharacters(result.data.data.results);
      }
    };
    fetch();
  }, [searchText]); // when searchText changes call fetch function

  return (
    <Container>
      {/* we need to get text from onChange function */}
      <Header searchText={(t) => setSearchText(t)} />
      <Characters characters={characters} />
    </Container>
  );
}

export default App;

const Container = styled.div``;
