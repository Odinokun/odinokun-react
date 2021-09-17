import React from 'react';
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";

import s from './aside.module.scss';

function Aside(props) {
  return (
    <aside className={s.aside} id="aside">
      <Logo/>
      <Menu/>
    </aside>
  );
}

export default Aside;