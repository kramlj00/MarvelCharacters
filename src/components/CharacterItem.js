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
      </CharacterContainer>
    </Container>
  );
};

export default CharacterItem;

const Container = styled.div``;
const CharacterContainer = styled.div``;
