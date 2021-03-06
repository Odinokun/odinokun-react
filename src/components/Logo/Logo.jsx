import React from 'react';

import s from './logo.module.scss';

function Logo(props) {
  return (
    <a className={s.logo} href="/">
      <svg viewBox="0 0 28.6 45.1">
        <path
          d="M0.1,0.1h12.7v41.2l-6.4,3.8H0L0.1,0.1L0.1,0.1z M9.1,38.7V4H3.9v37.3L9.1,38.7z"/>
        <path
          d="M28.6,3.9h-9v37.3h5.2V9h-2.6V6.4h6.4V45H15.8V0h12.8L28.6,3.9L28.6,3.9z"/>
      </svg>
    </a>
  );
}

export default Logo;