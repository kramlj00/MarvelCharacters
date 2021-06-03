import React from "react";
import styled from "styled-components";
import CharacterItem from "./CharacterItem";

const Characters = ({ characters, showFavBtn, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <Banner></Banner>
      <CharacterContainer>
        {characters.map((character) => (
          <CharacterItem
            key={character.id}
            character={character}
            showFavBtn={showFavBtn}
          />
        ))}
      </CharacterContainer>
    </Container>
  );
};

export default Characters;

const Container = styled.div``;

const Banner = styled.div`
  background-image: url("https://www.desktopbackground.org/download/3440x1440/2010/05/12/16004_marvel-computer-wallpapers-desktop-backgrounds_7178x1906_h.jpg");
  min-height: 900px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  opacity: 0.7;
  //mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const CharacterContainer = styled.div`
  margin-top: -800px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 60px;

  @media screen and (min-width: 564px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 564px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
