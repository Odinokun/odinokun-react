import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AppNavWrapper = styled(Box)`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 25px;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-right: 1px solid ${({ theme }) => theme.palette.common.white};
  width: 90px;
`;

export const AppNavLogo = styled(NavLink)`
  display: flex;
  width: 80%;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 70px;

  &:hover {
    svg {
      stroke: ${({ theme }) => theme.palette.common.white};
    }
  }
`;

export const AppNavLogoLetter = styled('svg')`
  width: 45%;
  transition: all 0.3s ease-in-out;
  stroke: ${({ theme }) => theme.palette.text.secondary};
`;