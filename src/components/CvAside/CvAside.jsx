import React from 'react';
import Button from "../Button/Button";

import s from './cv-aside.module.scss';

import ava from "../../assets/img/ava.jpg";
import cvAside from "../../helpers/cvAside.helper";

import {ReactComponent as Telegram} from "../../assets/img/icons/telegram.svg";
import {ReactComponent as LinkedIn} from "../../assets/img/icons/in.svg";
import {ReactComponent as Git} from "../../assets/img/icons/git.svg";
import CvAsideRow from "./CvAsideRow/CvAsideRow";

function CvAside(props) {
  return (
    <aside className={s.aside}>
      <div className={s.ava}>
        <img src={ava} alt="Dmitry Gordienko"/>
      </div>

      <div className={s.info}>
        {cvAside.map((item, key) => (
          <CvAsideRow
            title={item.title}
            descr={item.descr}
            key={`${item.title}_${key}`}
          />
        ))}


        <div className={s.socials}>
          <a className="cv-info__link" href="https://t.me/odinokun" target="_blank" rel="nofollow noopener noreferrer">
            <Telegram/>
          </a>
          <a className="cv-info__link" href="https://www.linkedin.com/in/dmitry-gordienko/" target="_blank" rel="nofollow noopener noreferrer">
            <LinkedIn/>
          </a>
          <a className="cv-info__link" href="https://github.com/Odinokun" target="_blank" rel="nofollow noopener noreferrer">
            <Git/>
          </a>
        </div>

        <div className="cv-info__row">
          <Button/>
        </div>

      </div>



    </aside>
  );
}

export default CvAside;