import React from 'react';

import s from './main-wrap.module.scss'

function MainWrap({children}) {
  return (
    <div className={s.wrap}>
      {children}
    </div>
  );
}

export default MainWrap;