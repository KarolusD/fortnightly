import React from 'react';
import logoImg from '../../assets/images/logo.png';
import styled from 'styled-components';

const StyledLogo = styled.img`
  position: relative;
  top: 16px;
  left: 4px;
  height: 40px !important;
  width: auto;
`;

const Logo = () => {
  return <StyledLogo src={logoImg} alt="The Fortnightly" />;
};

export default Logo;
