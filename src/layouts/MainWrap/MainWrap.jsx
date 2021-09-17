import React from 'react';

import s from './main-wrap.module.scss'

function MainWrap({children}) {
  return (
    <div className={s.main_wrap} id="main-wrap">
      {children}
    </div>
  );
}

export default MainWrap;