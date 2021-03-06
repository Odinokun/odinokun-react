import React from 'react';

import s from "./page-title.module.scss";

function PageTitle({title}) {
  return (
    <h1 className={s.title}>{title}</h1>
  );
}

export default PageTitle;