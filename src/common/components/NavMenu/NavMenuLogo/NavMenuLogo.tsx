import { NavMenuBgLogoLetter, NavMenuBgLogo } from './NavMenuLogo.styles.ts';

export const NavMenuLogo = () => {
  return (
    <NavMenuBgLogo>
      <NavMenuBgLogoLetter viewBox="0 0 240 770" strokeWidth="70px" fill="transparent">
        <polyline points="0,35 150,35 205,80 205,690 150,735 35,735 35,0" />
      </NavMenuBgLogoLetter>
      <NavMenuBgLogoLetter viewBox="0 0 240 770" strokeWidth="70px" fill="transparent">
        <polyline points="35,63 35,770 35,500 205,460 205,705 205,0" />
      </NavMenuBgLogoLetter>
    </NavMenuBgLogo>
  );
};