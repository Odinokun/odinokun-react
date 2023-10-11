import { FC, useState } from 'react';

import { Logo } from '@common/layout/AppNav/Logo/Logo.tsx';
import { NavMenu } from '@common/components/NavMenu/NavMenu.tsx';

import { Close, Menu } from '@mui/icons-material';
import { useWindowSize } from '@common/hooks/useWindowSize.ts';
import { AppNavBurger, AppNavWrapper } from './AppNav.styles.ts';

export const AppNav: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuHandler = () => setMenuOpen(prevState => !prevState);
  
  return (
    <AppNavWrapper>
      <Logo />
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      {useWindowSize().width < 768 &&
        <AppNavBurger onClick={toggleMenuHandler}>
          {!menuOpen ? <Menu /> : <Close />}
        </AppNavBurger>
      }
    
    </AppNavWrapper>
  );
};
