import { FC } from 'react';
import { Fade, List } from '@mui/material';

import { NavMenuLogo } from '@common/components/NavMenu/NavMenuLogo/NavMenuLogo.tsx';

import { useWindowSize } from '@common/hooks/useWindowSize.ts';
import { NAV_LINKS } from '@routes/navLinks.ts';

import { NavMenuItem, NavMenuLink, NavMenuLinkText, NavMenuWrapper } from './NavMenu.styles.ts';

interface IProps {
  menuOpen: boolean;
  setMenuOpen: (b: boolean) => void;
}

export const NavMenu: FC<IProps> = ({ menuOpen, setMenuOpen }) => {
  const isMobile = useWindowSize().width < 768;
  
  const onClickHandler = () => setMenuOpen(false);
  
  return (
    <Fade in={isMobile ? menuOpen : true}>
      <NavMenuWrapper>
        {isMobile && <NavMenuLogo />}
        
        <List>
          {NAV_LINKS.map(({
            id,
            path,
            label,
            available,
            icon: NavMenuIcon,
          }) => {
            return (
              available &&
              <NavMenuItem key={id}>
                <NavMenuLink to={path} onClick={onClickHandler}>
                  <NavMenuIcon />
                  <NavMenuLinkText>{label}</NavMenuLinkText>
                </NavMenuLink>
              </NavMenuItem>);
          })}
        </List>
      </NavMenuWrapper>
    </Fade>
  );
};