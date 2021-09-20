import React from 'react';

import s from './cv-aside-row.module.scss';

function CvAsideRow({title, descr}) {
  return (
    <div className={s.row}>
      <span className={s.title}>{title}</span>
      <span className={s.descr}>{descr}</span>
    </div>
  );
}

export default CvAsideRow;