import React from 'react';

import s from './home.module.scss'

function Home(props) {
  return (
    <>
      <div className={s.index__bg}>
        <svg viewBox="0 0 28.6 45.1">
          <path d="M0.1,0.1h12.7v41.2l-6.4,3.8H0L0.1,0.1L0.1,0.1z M9.1,38.7V4H3.9v37.3L9.1,38.7z"/>
        </svg>
        <svg viewBox="0 0 28.6 45.1">
          <path d="M28.6,3.9h-9v37.3h5.2V9h-2.6V6.4h6.4V45H15.8V0h12.8V3.9L28.6,3.9z"/>
        </svg>
      </div>

      <div className="index__block">
        <h1 className="index__title">Dmitry Gordienko</h1>
        <h2 className="index__subtitle">front-end developer</h2>
        <div className="index__btn">
          <a className="btn btn--light" href="assets/text/front-end_developer_Dmitry_Gordienko.pdf" target="_blank">
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;