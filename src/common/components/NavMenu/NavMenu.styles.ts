import { styled } from '@mui/material/styles';
import { Box, ListItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavMenuWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    position: relative;
    height: auto;
  }
`;

export const NavMenuItem = styled(ListItem)`
  display: block;
  padding: 0;
  list-style: none;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NavMenuLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  text-align: center;
  text-decoration: none;
  flex-direction: row;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: column;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.palette.text.secondary};
    }

    svg {
      fill: ${({ theme }) => theme.palette.text.secondary};
    }
  }

  svg {
    fill: ${({ theme }) => theme.palette.common.white};
    width: 35px;
    height: 35px;
    transition: fill .5s;
    margin-right: 10px;
    margin-bottom: 7px;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      margin-right: 0;
    }
  }
`;

export const NavMenuLinkText = styled(Typography)`
  transition: color .5s;
  letter-spacing: .5px;
  text-transform: uppercase;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.common.white};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 14px;
  }
`;
