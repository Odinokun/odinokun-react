import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppNavWrapper } from '@common/layout/AppNav/AppNav.styled.ts';

interface IProps {}

export const AppNav: FC<IProps> = () => {
  return (
    <AppNavWrapper>
      {/*<h1>AppNav</h1>*/}
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/cv'>CV</NavLink>
        </li>
        <li>
          <NavLink to='/works'>Works</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/contacts'>Contacts</NavLink>
        </li>
      </ul>
    </AppNavWrapper>
  );
};
