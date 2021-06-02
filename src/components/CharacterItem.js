import React from "react";
import styled from "styled-components";

const CharacterItem = ({ character }) => {
  return (
    <Container>
      <CharacterContainer>
        <img
          src={character.thumbnail.path + "/standard_fantastic.jpg"}
          alt=""
        ></img>
        <h2>{character.name}</h2>
        <AddToFavoritesButton>Add To Favorites</AddToFavoritesButton>
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
