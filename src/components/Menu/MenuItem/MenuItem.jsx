import React from 'react';
import {Link} from "react-router-dom";

import s from './menu-item.module.scss';

function MenuItem({text, icon, link}) {
  return (
    <li className={s.menu__item}>
      <Link className={s.menu__link} to={link}>
        {icon}
        <span className={s.menu__text}>{text}</span>
      </Link>
    </li>
  );
}

export default MenuItem;