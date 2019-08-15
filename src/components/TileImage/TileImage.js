import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../components/Image/Image';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;

  ::before {
    content: '';
    position: absolute;
    border-top: 1px dotted ${({ theme }) => theme.gray};
    width: 100%;
    height: 0;
  }

  ::before {
    top: 0;
    left: 0;
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
  max-width: 240px;
`;

const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.libreFranklin};
  font-size: ${({ theme }) => theme.font.size.subtitle1};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 4px 0;
  max-width: 240px;
`;

const StyledImage = styled(Image)`
  &&& {
    width: 60px;
    height: 60px;
    margin: 0;
    object-fit: cover;
  }
`;

const TileImage = ({ title, desc, img }) => {
  return (
    <StyledWrapper>
      <div>
        <StyledOverline>{title}</StyledOverline>
        <StyledTitle>{desc}</StyledTitle>
      </div>
      <StyledImage imgPath={img} desc="fill me" />
    </StyledWrapper>
  );
};

TileImage.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default TileImage;
