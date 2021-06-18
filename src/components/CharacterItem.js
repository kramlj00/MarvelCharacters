import React, { useState } from "react";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import AddToFavorites from "../components/AddToFavorites";

const Char = (character) => {
  if (character.id === 5) {
    return true;
  }
};

const CharacterItem = ({ character, favIconBlack }) => {
  //console.log(character);
  const [color, setColor] = useState("black");

  const IsFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    let isFavorite = favorites.find((c) => {
      if (c.id === character.id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(isFavorite);
    if (isFavorite) {
      return "yellow";
    } else {
      return "black";
    }
  };

  return (
    <Container>
      <CharacterContainer id={character.id}>
        <img
          src={
            character.thumbnail.path +
            "/standard_fantastic." +
            character.thumbnail.extension
          }
          alt=""
        />
        <h2>{character.name}</h2>
        <AddToFavoritesIcon
          id={character.id}
          style={{ color: IsFavorite() }}
          onClick={() => AddToFavorites(character, color, setColor)}
        >
          <StarIcon />
        </AddToFavoritesIcon>
      </CharacterContainer>
    </Container>
  );
};

export default CharacterItem;
/*
{favIconBlack ? (
  <AddToFavoritesIcon
    id={character.id}
    style={{ color: color }}
    onClick={() => AddToFavorites(character, color, setColor)}
  >
    <StarIcon />
  </AddToFavoritesIcon>
) : (
  <AddToFavoritesIcon style={{ color: "yellow", cursor: "default" }}>
    <StarIcon />
  </AddToFavoritesIcon>
)}*/

const Container = styled.div`
  width: 250px;
  height: 300px;
  margin: auto;
  z-index: 100;
`;
const CharacterContainer = styled.div`
  img {
    border-radius: 5px;
    :hover {
      border-radius: 0px;
      transform: scale(1.05);
      transition: 0.6s all ease;
    }
  }
`;

const AddToFavoritesIcon = styled.div`
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
