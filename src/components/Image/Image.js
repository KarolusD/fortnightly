import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`;

const Image = ({ imgPath, desc, className }) => {
  return <StyledImage className={className} src={imgPath} alt={desc} />;
};

Image.propTypes = {
  imgPath: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Image.defaultProps = {
  alt: 'image'
};

export default Image;
