import React from "react";
import styled from "styled-components";
import CharacterItem from "./CharacterItem";

const Characters = ({ characters }) => {
  return (
    <Container>
      <Banner></Banner>
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

const Banner = styled.div`
  background-image: url("https://www.desktopbackground.org/download/3440x1440/2010/05/12/16004_marvel-computer-wallpapers-desktop-backgrounds_7178x1906_h.jpg");
  min-height: 1000px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const CharacterContainer = styled.div`
  margin-top: -900px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
