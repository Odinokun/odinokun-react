import { keyframes, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const fadeOut = keyframes`
  0% {
    opacity: .3;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: .1;
  }
`;

const leftToCenter = keyframes`
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(calc(-50% - 10px));
  }
`;

const rightToCenter = keyframes`
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(calc(50% + 10px));
  }
`;

export const HomeBgWrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
  pointer-events: none;
`;

export const HomeBgSvgLetter = styled('svg')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  fill: transparent;
  stroke-width: 70px;
  stroke: ${({ theme }) => theme.palette.common.white};
  max-width: calc(50% - 30px);
  height: 90vh;
  margin: auto;
  display: block;
  opacity: .08;

  &:first-child {
    transform: translateX(-100vw);
    animation: 1s ${leftToCenter} ease-in-out .2s forwards;
  }

  &:last-child {
    transform: translateX(100vw);
    animation: 1s ${rightToCenter} ease-in-out .2s forwards;
  }
`;