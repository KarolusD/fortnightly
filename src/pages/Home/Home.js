import React from 'react';
import styled from 'styled-components';
import Image from '../../components/Image/Image';
import nurseImg from '../../assets/images/nurse.PNG';
import jsImg from '../../assets/images/js.png';
import reactImg from '../../assets/images/react.png';
import scImg from '../../assets/images/sc.png';
import Tags from '../../components/Tags/Tags';
import MainTileImage from '../../components/MainTileImage/MainTileImage';
import TileImage from '../../components/TileImage/TileImage';

const StyledLayout = styled.section`
  width: 100vw;
  height: auto;
  margin-top: 72px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  jusitfy-contet: flex-start;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledListItem = styled.li`
  padding: 0 4vw;
`;

const StyledImage = styled(Image)`
  padding: 0 4vw;
  ${({ theme }) => theme.mq.tablet} {
    max-width: 400px !important;
    padding: 0;
    display: inline-block;
  }
`;

const Home = () => {
  return (
    <StyledLayout className="page">
      <Tags />
      <FlexWrapper>
        <div>
          <StyledImage imgPath={nurseImg} desc="nurse" />
          <MainTileImage />
        </div>
        <div>
          <StyledList>
            <StyledListItem>
              <TileImage
                title="react"
                desc="a JavaScript library for building user interfaces"
                img={reactImg}
              />
            </StyledListItem>
            <StyledListItem>
              <TileImage
                title="javascript"
                desc=" is a high-level, interpreted scripting language"
                img={jsImg}
              />
            </StyledListItem>
            <StyledListItem>
              <TileImage
                title="styled components"
                desc="visual primitives for the component age."
                img={scImg}
              />
            </StyledListItem>
          </StyledList>
        </div>
      </FlexWrapper>
    </StyledLayout>
  );
};

export default Home;
