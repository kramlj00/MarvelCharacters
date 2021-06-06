import React from "react";
import styled from "styled-components";

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </li>
      ))}
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  min-width: 200px;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 10px;
  li {
    z-index: 100;
    text-style-decoration: none;
    list-style-type: none;
  }
  a {
    font-size: 22px;
    margin-left: 9px;
    font-weight: bold;
    :hover {
      color: blue;
    }
  }
`;
