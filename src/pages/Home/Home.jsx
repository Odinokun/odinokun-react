import React from 'react';
import Button from "../../components/Button/Button";

import s from './home.module.scss'

function Home(props) {
  return (
    <div className={s.wrap}>
      <div className={s.bg}>
        <svg viewBox="0 0 28.6 45.1">
          <path d="M0.1,0.1h12.7v41.2l-6.4,3.8H0L0.1,0.1L0.1,0.1z M9.1,38.7V4H3.9v37.3L9.1,38.7z"/>
        </svg>
        <svg viewBox="0 0 28.6 45.1">
          <path d="M28.6,3.9h-9v37.3h5.2V9h-2.6V6.4h6.4V45H15.8V0h12.8V3.9L28.6,3.9z"/>
        </svg>
      </div>

      <div className={s.block}>
        <h1 className={s.title}>Dmitry Gordienko</h1>
        <h2 className={s.subtitle}>front-end developer</h2>
        <div className={s.btn}>
          <Button subClass="light" />
        </div>
      </div>
    </div>
  );
}

export default Home;