import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTileWrapper = styled.div`
  border: none;
  box-shadow: none;
  background: none;
  outline: none;
  width: 100%;
  height: auto;
  padding: 16px 0;
  text-align: left;
  padding: 8px 4vw;
  max-width: 400px;
  :hover {
    background: #f1f1f1;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 0;
    padding: 0;
  }
  :hover {
    background: #f1f1f1;
  }
`;

const StyledOverline = styled.p`
  font-family: ${({ theme }) => theme.font.family.libreFranklin};
  font-size: ${({ theme }) => theme.font.size.overline};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
`;

const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.family.libreFranklin};
  font-size: ${({ theme }) => theme.font.size.h6};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 4px 0;
  max-width: 300px;
  line-height: 28px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const MainTileImage = () => {
  return (
    <StyledTileWrapper>
      <StyledLink to="/details">
        <StyledOverline>US</StyledOverline>
        <StyledTitle>Poverty To Empowerment In Chicago</StyledTitle>
      </StyledLink>
    </StyledTileWrapper>
  );
};

export default MainTileImage;
