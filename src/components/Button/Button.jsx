import React from 'react';
import cn from "classnames";

import s from './button.module.scss'

function Button({subClass}) {
  return (
    <a className={cn(s.btn, {
        [s.light] : subClass === 'light'
      } )}
      download
      href="assets/text/front-end_developer_Dmitry_Gordienko.pdf"
      target="_blank"
    >
      Download CV
    </a>
  );
}

export default Button;