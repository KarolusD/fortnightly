import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.button`
  position: absolute;
  right: 4vw;
  top: 20px;
  border: none;
  outline: none;
  box-shadow: none;
  background: none;
  cursor: pointer;
`;

const Search = ({ name }) => {
  return (
    <StyledSearch>
      <i className="material-icons md-24">{name}</i>
    </StyledSearch>
  );
};

export default Search;
