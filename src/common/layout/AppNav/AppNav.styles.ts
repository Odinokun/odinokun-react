import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

export const AppNavWrapper = styled(Box)`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.palette.background.default};
    border-right: 1px solid ${({ theme }) => theme.palette.common.white};
    padding-top: 25px;
    width: 90px;
    bottom: 0;
  }
`;

export const AppNavBurger = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.palette.common.white};
`;