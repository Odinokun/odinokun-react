import React from 'react';

import s from "./burger.module.scss";

function Burger(props) {
  return (
    <div className={s.burger}>
      <div className={`${s.line} ${s.line__top}`}></div>
      <div className={`${s.line} ${s.line__middle_01}`}></div>
      <div className={`${s.line} ${s.line__middle_02}`}></div>
      <div className={`${s.line} ${s.line__bottom}`}></div>
    </div>
  );
}

export default Burger;