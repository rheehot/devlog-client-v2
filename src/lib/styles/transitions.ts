import { keyframes } from 'styled-components';

export const slideLeft = keyframes`
  0% {
    transform: translateX(105%);
  }
  100% {
    transform: translateX(0%);
  };
`;

export const slideRight = keyframes`
  0% {
    transform: translateX(-105%);
  }
  100% {
    transform: translateX(0%);
  };
`;
