import React from 'react';
import Image from '../../components/Image/Image';
import styled from 'styled-components';
import lezakImg from '../../assets/images/lezak.PNG';
import Author from '../../components/Author/Author';

const StyledWrapper = styled.section`
  width: 100vw;
  height: auto;
  padding-top: 72px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
  }
`;

const StyledImage = styled(Image)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  margin: 0;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 620px;
  }
`;

const StyledSubheading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.libreFranklin};
  font-size: ${({ theme }) => theme.font.size.subtitle2};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.black};
`;

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.merriweather};
  font-size: ${({ theme }) => theme.font.size.h4};
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-style: italic;
  color: ${({ theme }) => theme.black};
  margin: 12px 0 16px 0;
`;

const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.family.merriweather};
  font-size: ${({ theme }) => theme.font.size.body2};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.gray};
  line-height: calc(${({ theme }) => theme.font.size.body2} * 1.6);
`;

const StyledTextWrapper = styled.div`
  padding: 12px 4vw;
`;

const StyledSpan = styled.span`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 24px;
  height: 16px;
  font-size: ${({ theme }) => theme.font.size.h5};
  color: ${({ theme }) => theme.lightGray};
`;

const Details = () => {
  return (
    <StyledWrapper className="page">
      <StyledImage imgPath={lezakImg} desc="nurse" />
      <StyledTextWrapper>
        <StyledSubheading>
          U.S. <StyledSpan>&#794;</StyledSpan> Poverty
        </StyledSubheading>
        <StyledHeading>Poverty To Empowement In Chicago</StyledHeading>
        <StyledParagraph>
          How one woman is transforming the lives of iunderprivileged children
          in the inner city
        </StyledParagraph>
      </StyledTextWrapper>
      <Author />
    </StyledWrapper>
  );
};

export default Details;
