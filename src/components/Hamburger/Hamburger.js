import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const keyframesFadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const StyledHamburger = styled.button`
  position: relative;
  top: 16px;
  left: 0;
  width: auto;
  height: 40px;
  border: none;
  outline: none;
  box-shadow: none;
  background: none;
  cursor: pointer;
`;

// const InnerHamburger = styled.div`
//   position: relative;
//   top: 0;
//   left: 0;
//   width: 32px;
//   height: 4px;
//   background: ${({ theme }) => theme.black};

//   ::before {
//     content: '';
//     position: absolute;
//     top: -10px;
//     left: 0;
//     width: 32px;
//     height: 4px;
//     background: ${({ theme }) => theme.black};
//   }

//   ::after {
//     content: '';
//     position: absolute;
//     top: 10px;
//     left: 0;
//     width: 32px;
//     height: 4px;
//     background: ${({ theme }) => theme.black};
//   }
// `;

const BackArrow = styled.i`
  display: ${({ isDetailsOpen }) => (isDetailsOpen ? 'block' : 'none')};
  animation: ${keyframesFadeIn} 300ms 150ms ease-out both;
`;

const InnerHamburger = styled.i`
  display: ${({ isDetailsOpen }) => (isDetailsOpen ? 'none' : 'block')};
  animation: ${keyframesFadeIn} 300ms 150ms ease-out both;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const Hamburger = ({ isDetailsOpen }) => {
  return (
    <StyledHamburger>
      <StyledLink to="/">
        <BackArrow
          isDetailsOpen={isDetailsOpen}
          className="material-icons md-24"
        >
          arrow_back
        </BackArrow>
      </StyledLink>
      <InnerHamburger
        isDetailsOpen={isDetailsOpen}
        className="material-icons md-24"
      >
        menu
      </InnerHamburger>
    </StyledHamburger>
  );
};

export default Hamburger;
