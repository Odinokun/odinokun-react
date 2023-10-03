import { FC } from 'react';
import { List } from '@mui/material';

import { NAV_LINKS } from '@routes/navLinks.ts';
import { MenuItem, MenuLink, MenuLinkText } from './Menu.styles.ts';

interface IProps {
}

export const Menu: FC<IProps> = () => {
  return (
    <List>
      {NAV_LINKS.map(({
        id,
        path,
        label,
        available,
        icon: MenuIcon,
      }) => {
        return (
          available &&
          <MenuItem key={id}>
            <MenuLink to={path}>
              <MenuIcon />
              <MenuLinkText>{label}</MenuLinkText>
            </MenuLink>
          </MenuItem>);
      })}
    </List>
  );
};