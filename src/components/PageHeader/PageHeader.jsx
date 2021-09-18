import React from 'react';

import PageTitle from "../PageTitle/PageTitle";

import s from './page-header.module.scss';

function PageHeader({title}) {
  return (
    <div className={s.header}>
      <div className="container">
        <PageTitle title={title}/>
      </div>
    </div>
  );
}

export default PageHeader;