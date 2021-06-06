import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSearchHandler = (t) => {
    setText(t);
    searchText(t);
  };

  return (
    <HeaderContainer>
      <MarvelLogo>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt=""
        />
      </MarvelLogo>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Find a character"
          autoFocus
          onChange={(e) => onSearchHandler(e.target.value)}
          value={text}
        />
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  background-color: #000;
  height: 70px;
  align-items: center;
  color: white;
  justify-content: space-between;

  @media screen and (max-width: 300px) {
    flex-direction: column;
    height: 90px;
    padding: 10px;
  }
`;

const MarvelLogo = styled.div`
  img {
    height: 50px;
    margin-left: 11px;
  }

  @media screen and (min-width: 564px) and (max-width: 1024px) {
    img {
      width: 120px;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 564px) {
    img {
      width: 85px;
      height: 40px;
      margin-left: 5px;
    }
  }

  @media screen and (max-width: 300px) {
    img {
      width: 130px;
      height: 45px;
    }
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-grow: 0.55;
  margin: auto;
  overflow: hidden;
  border-radius: 4px;
  height: 30px;
  background-color: white;
  padding-left: 4px;
  :focus-within {
    box-shadow: 0 0 0 3px #ddd;
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;

const SearchIconContainer = styled.div`
  display: flex;
  background-color: #ddd;
  color: black;
  width: 40px;
  justify-content: center;
  align-items: center;
`;
