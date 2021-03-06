import * as React from 'react';
import styled, { css } from 'styled-components';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import { slideLeft, slideRight } from '../../lib/styles/transitions';
import useToggle from './hooks/useToggle';

type ToggleProps = {};

const { memo } = React;
function Toggle(props: ToggleProps) {
  const { visible, darkMode, onToggle } = useToggle();
  return (
    <Block>
      <ToggleBlock onClick={onToggle}>
        <span>&#127769;</span>
        <span>&#128262;</span>
        <Circle visible={visible} darkMode={darkMode} />
      </ToggleBlock>
    </Block>
  );
}

const Block = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 10;
  ${media.xsmall} {
    width: 100vw;
    top: 5rem;
  }
  ${media.medium} {
    width: 53rem;
    top: 3.8rem;
  }
  ${media.large} {
    width: 64rem;
  }
`;

const ToggleBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 3rem;
  padding: 0.1rem 0.3rem 0.1rem 0.3rem;
  background: black;
  border-radius: 1.5rem;
  z-index: 10;
  span {
    background: black;
    font-size: 0.8rem;
  }
  &:hover {
    cursor: pointer;
  }

  ${media.xsmall} {
    margin-right: 10vw;
  }
  ${media.medium} {
    margin-right: 0;
  }
`;

const Circle = styled.div<{ visible: boolean; darkMode: boolean }>`
  position: absolute;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background: white;
  border: 2.5px solid ${palette.orange3};
  box-shadow: 1px 1px 10px ${palette.orange3};
  ${(props) =>
    props.darkMode
      ? css`
          left: 55%;
        `
      : css`
          left: -5%;
        `}
  ${(props) => {
    if (!props.visible) return null;
    return props.darkMode
      ? css`
          animation: ${slideRight} 0.15s ease-in both;
        `
      : css`
          animation: ${slideLeft} 0.15s ease-in both;
        `;
  }}
`;

export default memo(Toggle);
