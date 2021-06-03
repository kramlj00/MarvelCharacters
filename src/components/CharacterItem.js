import React from "react";
import styled from "styled-components";

const CharacterItem = ({ character, showFavBtn }) => {
  const addToFavorites = (character) => {
    // getting the previous element and adding the new favorite item
    let previousData = JSON.parse(localStorage.getItem("favorites"));
    previousData.push(character);
    localStorage.setItem("favorites", JSON.stringify(previousData));
  };

  return (
    <Container>
      <CharacterContainer>
        <img
          src={character.thumbnail.path + "/standard_fantastic.jpg"}
          alt=""
        ></img>
        <h2>{character.name}</h2>
        {showFavBtn ? (
          <AddToFavoritesButton onClick={() => addToFavorites(character)}>
            Add To Favorites
          </AddToFavoritesButton>
        ) : null}
      </CharacterContainer>
    </Container>
  );
};

export default CharacterItem;

const Container = styled.div`
  width: 250px;
  height: 300px;
  margin: auto;
  z-index: 100;
`;
const CharacterContainer = styled.div``;

const AddToFavoritesButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  height: 30px;
  width: 100%;
  background-color: #ddd;
  :hover {
    background: #b7b7b7;
  }
`;
