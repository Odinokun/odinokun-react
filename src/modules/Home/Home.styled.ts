import { keyframes, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HomeWrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.palette.background.default};
  min-height: 100vh;
`;

export const HomeContent = styled(Box)`
  position: relative;
  z-index: 1;
  padding: 10px 20px;
  text-align: center;
`;

export const HomeTitle = styled(Typography)`
  font-family: 'Teko', sans-serif;
  font-size: 12vw !important;
  line-height: 1;
  margin-bottom: 0;
  user-select: none;
  animation: 1.1s ${fadeIn} ease 1.8s forwards;
  letter-spacing: 3px;
  opacity: 0;
  color: ${({ theme }) => theme.palette.common.white};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    font-size: 10.5vw !important;
  }
`;

export const HomeSubtitle = styled(Typography)`
  font-family: 'Kaushan Script', cursive;
  font-size: 5vw !important;
  margin-bottom: 50px;
  user-select: none;
  animation: 1.1s ${fadeIn} ease 2s forwards;
  text-align: center;
  opacity: 0;
  color: ${({ theme }) => theme.palette.common.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    font-size: 3vw !important;
  }
`;

export const HomeButton = styled(Box)`
  display: flex;
  justify-content: center;
  animation: 1.1s ${fadeIn} ease 2.2s forwards;
  opacity: 0;
`;