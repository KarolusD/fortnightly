import React from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import avatarImg from '../../assets/images/avatar.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 4vw;
`;

const StyledAvatar = styled(Image)`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const StyledBy = styled.span`
  font-family: ${({ theme }) => theme.font.family.libreFranklin};
  font-size: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.darkGray};
  margin-left: 8px;
`;
const StyledAuthorName = styled.a`
  margin-left: 4px;
  font-family: ${({ theme }) => theme.font.family.merriweather};
  font-size: ${({ theme }) => theme.font.size.body1};
  font-size: ${({ theme }) => theme.font.weight.bold};
`;

const Author = () => {
  return (
    <StyledWrapper>
      <StyledAvatar imgPath={avatarImg} desc="avatar" />
      <StyledBy>by</StyledBy>
      <StyledAuthorName>Karol Podżerek</StyledAuthorName>
    </StyledWrapper>
  );
};

export default Author;
