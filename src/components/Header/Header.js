import React from 'react';
import styled from 'styled-components';
import Hamburger from '../../components/Hamburger/Hamburger';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 0 4vw;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  background: ${({ theme }) => theme.white};
  z-index: 1000;
`;

const Header = ({ isDetailsOpen }) => {
  return (
    <StyledHeader>
      <Hamburger isDetailsOpen={isDetailsOpen} />
      <Logo />
      <Search name={isDetailsOpen ? 'share' : 'search'} />
    </StyledHeader>
  );
};

export default Header;
