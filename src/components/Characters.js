import React from "react";
import styled from "styled-components";
import CharacterItem from "./CharacterItem";

const Characters = ({ characters }) => {
  return (
    <Container>
      <CharacterContainer>
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </CharacterContainer>
    </Container>
  );
};

export default Characters;

const Container = styled.div``;
const CharacterContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2rem;
`;
