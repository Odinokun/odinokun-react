import React from 'react';

import s from './blog-item.module.scss';

import {ReactComponent as Calendar} from "../../assets/img/icons/calendar.svg";
import {ReactComponent as Writer} from "../../assets/img/icons/writer.svg";

function BlogItem({src, alt, link, title, subtitle, dateTime, author, badges}) {
  return (
    <div className={s.article}>

      <a className={s.img} href={link}>
        <img src={src} alt={alt} />
      </a>

      <div className={s.info}>
        <a className={s.title} href={link}>
          {title}
        </a>
        <div>
          <div className={s.date}>
            <Calendar/>
            <time dateTime={dateTime}>{dateTime}</time>
          </div>
          <div className={s.author} title="Author of the article">
            <Writer/>
            <span>{author}</span>
          </div>
        </div>
        <a className={s.preview} href={link}>
          <p>{subtitle}</p>
        </a>
        <div className={s.tags}>
          {badges.map((item, index) => (
            <div
              className={s.tag}
              key = {`${item}_${index}`}
            >{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogItem;