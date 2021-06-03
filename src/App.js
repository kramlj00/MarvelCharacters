import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showFavBtn, setShowFavBtn] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(8);

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
          //console.log(favoriteCharacters);
          setShowFavBtn(false);
          setCharacters(favoriteCharacters);
        }
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchText}&ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
        );
        setCharacters(result.data.data.results);
        setShowFavBtn(true);
      }
    };
    fetch();
  }, [searchText]); // when searchText changes call fetch function

  // Get current characters
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      {/* we need to get text from onChange function */}
      <Header searchText={(t) => setSearchText(t)} />
      <Characters characters={currentCharacters} showFavBtn={showFavBtn} />
    </Container>
  );
}

export default App;

const Container = styled.div``;
