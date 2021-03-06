import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../lib/styles/media';

type WebNavigationProps = {};

function WebNavigation(props: WebNavigationProps) {
  return (
    <Block>
      <ContentBlock>
        <Link to="/">
          <h2>DevLog</h2>
        </Link>
        <div>
          <Link to="/">새 글</Link>
          <Link to="/series">시리즈</Link>
          <Link to="/tags">태그</Link>
          <Link to="/info">소개</Link>
        </div>
      </ContentBlock>
    </Block>
  );
}

const Block = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  ${media.xsmall} {
    display: none;
  }
  ${media.medium} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  ${media.medium} {
    width: 53rem;
  }
  ${media.large} {
    width: 64rem;
  }
`;

const Link = styled(NavLink)`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  font-size: 1.25rem;
  & + & {
    margin-left: 2rem;
  }
`;

export default WebNavigation;
