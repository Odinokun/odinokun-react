import { FC } from 'react';
import { Menu } from '@common/components/Menu/Menu.tsx';

import { AppNavLogo, AppNavLogoLetter, AppNavWrapper } from '@common/layout/AppNav/AppNav.styled.ts';

interface IProps {
}

export const AppNav: FC<IProps> = () => {
  return (
    <AppNavWrapper>
      <AppNavLogo to={'/'}>
        <AppNavLogoLetter viewBox="0 0 240 770" strokeWidth="70px" fill="transparent">
          <polyline points="0,35 150,35 205,80 205,690 150,735 35,735 35,0" />
        </AppNavLogoLetter>
        <AppNavLogoLetter viewBox="0 0 240 770" strokeWidth="70px" fill="transparent">
          <polyline points="35,63 35,770 35,500 205,460 205,705 205,0" />
        </AppNavLogoLetter>
      </AppNavLogo>
      
      <Menu />

    </AppNavWrapper>
  );
};
