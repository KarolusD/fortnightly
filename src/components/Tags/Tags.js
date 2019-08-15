import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0 4vw;
  margin-bottom: 12px;

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 0;
    margin-bottom: 32px;
  }
`;

const Tag = styled.span`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.libreFranklin};
  font-size: ${({ theme }) => theme.font.size.body2};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: 0 12px;
  white-space: nowrap;
  user-select: none;

  :first-of-type {
    padding: 0;
    padding-right: 12px;
  }

  :last-of-type {
    ::after {
      border-left: none;
    }
  }

  ::after {
    content: '';
    position: absolute;
    right: 0;
    top: 2px;
    height: 80%;
    width: 0;
    border-left: 1px dotted ${({ theme }) => theme.gray};
  }
`;

const Tags = () => {
  return (
    <TagWrapper>
      <Tag>#TechDesign</Tag>
      <Tag>#Healthcare Revolution</Tag>
      <Tag>#Future</Tag>
      <Tag>#Space</Tag>
      <Tag>#Interview</Tag>
    </TagWrapper>
  );
};

export default Tags;
