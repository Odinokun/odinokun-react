import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const AppLogo = styled(NavLink)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 100px;
    margin-bottom: 70px;
  }

  &:hover {
    svg {
      stroke: ${({ theme }) => theme.palette.common.white};
    }
  }
`;

export const AppLogoLetter = styled('svg')`
  width: 45%;
  transition: all 0.3s ease-in-out;
  stroke: ${({ theme }) => theme.palette.text.secondary};
`;