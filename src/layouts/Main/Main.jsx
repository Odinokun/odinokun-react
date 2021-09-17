import React from 'react';

import s from './main.module.scss'

function Main({children}) {
  return (
    <section className={s.main}>
      {children}
    </section>
  );
}

export default Main;