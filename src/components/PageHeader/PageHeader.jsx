import React from 'react';

import s from './page-header.module.scss';

function PageHeader({title}) {
  return (
    <div className={s.header}>
      <div className="container">
        <div className="page-header__title">
          <h1 className={s.title}>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;