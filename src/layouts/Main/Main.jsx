import React from 'react';

import s from './main.module.scss'

function Main({children}) {
  return (
    <section className={`${s.main} index`}>
      {children}
    </section>
  );
}

export default Main;