import React from "react";
import styled from "styled-components";
import CharacterItem from "./CharacterItem";

const Characters = ({ characters }) => {
  return (
    <Container>
      <CharacterContainer>
        {characters.map((character) => (
          <CharacterItem character={character} />
        ))}
      </CharacterContainer>
    </Container>
  );
};

export default Characters;

const Container = styled.div``;
const CharacterContainer = styled.div``;
