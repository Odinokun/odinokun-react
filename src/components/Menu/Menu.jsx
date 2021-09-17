import React from 'react';
import MenuItem from "./MenuItem/MenuItem";

import menuItems from "../../helpers/menuItems.helper";

import s from './menu.module.scss';

function Menu() {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__list}>
        {menuItems.map((item, index) => (
          <MenuItem
            text={item.text}
            icon={item.icon}
            link={item.link}
            key={`${item.text}_${index}`}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;