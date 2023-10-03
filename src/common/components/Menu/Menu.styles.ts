import { styled } from '@mui/material/styles';
import { ListItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const MenuItem = styled(ListItem)`
  display: block;
  padding: 0;
  list-style: none;
  margin-bottom: 25px;
`;

export const MenuLink = styled(NavLink)`
 position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  text-align: center;
  text-decoration: none;

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
    margin-bottom: 7px;
    transition: fill .5s;
  }
`;

export const MenuLinkText = styled(Typography)`
  transition: color .5s;
  letter-spacing: .5px;
  text-transform: uppercase;
  font-size: 15px;
  color: ${({ theme }) => theme.palette.common.white};
`;
