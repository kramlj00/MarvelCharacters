import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import styled from "styled-components";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [favIconBlack, setFavIconBlack] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(8);

  // fetch character list and make API request
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
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
          setLoading(false);
        } else {
          let favoriteCharacters = JSON.parse(
            localStorage.getItem("favorites")
          );
          //console.log(favoriteCharacters);
          setFavIconBlack(false);
          setCharacters(favoriteCharacters);
          setLoading(false);
        }
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchText}&ts=1&apikey=b2460632688032d64ca0550d80068081&hash=a12f41440a3d2580606835c9bdde03c2`
        );
        setCharacters(result.data.data.results);
        setFavIconBlack(true);
        setLoading(false);
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

  const data = Array.from(currentCharacters);
  console.log(data);

  return (
    <Container>
      <Header searchText={(t) => setSearchText(t)} />
      <Characters data={data} favIconBlack={favIconBlack} loading={loading} />
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        paginate={paginate}
      />
    </Container>
  );
}

export default App;

const Container = styled.div``;
