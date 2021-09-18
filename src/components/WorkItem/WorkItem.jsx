import React from 'react';

import {ReactComponent as Magnific} from "../../assets/img/icons/magnific.svg";
import {ReactComponent as Calendar} from "../../assets/img/icons/calendar.svg";
import {ReactComponent as LinkIcon} from "../../assets/img/icons/link.svg";

import s from './work-item.module.scss';


function WorkItem({src, alt, link, linkTitle, title, dateTime, dateTimeTitle}) {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src={src} alt={alt} />
        <a
          className={s.more}
          href={link}
          target="_blank"
          rel="nofollow noopener noreferrer">
          <Magnific/>
          <span>view site</span>
        </a>
      </div>

      <div className={s.info}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.date}>
          <Calendar/>
          <time dateTime={dateTime}>{dateTimeTitle}</time>
        </div>
        <a className={s.link} href={link} target="_blank" rel="nofollow noopener noreferrer">
          <LinkIcon/>
          <span>{linkTitle}</span>
        </a>
        <div className={s.btns}>
          <div className={s.btn}>design</div>
          <div className={s.btn}>pug</div>
          <div className={s.btn}>scss</div>
          <div className={s.btn}>js/jquery</div>
          <div className={s.btn}>support</div>
          <div className={s.btn}>php</div>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;