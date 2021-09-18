import React from 'react';

import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";

import s from './contacts.module.scss';

import {ReactComponent as Git} from "../../assets/img/icons/git.svg";
import {ReactComponent as LinkedIn} from "../../assets/img/icons/in.svg";
import {ReactComponent as Mail} from "../../assets/img/icons/mail.svg";
import {ReactComponent as Telegram} from "../../assets/img/icons/telegram.svg";

function Contacts(props) {
  return (
    <div className={s.contacts}>
      <div className={s.map} id="contacts-map"></div>

      <div className={s.item}>

        <PageTitle title="Contacts"/>

        <div className={s.links}>

          <div className={s.links__item}>
            <h3 className={s.links__title}>My profiles</h3>
            <ul className={s.links__list}>
              <li>
                <a className={s.links__link}
                   href="https://www.linkedin.com/in/dmitry-gordienko/"
                   target="_blank"
                   rel="nofollow noopener noreferrer"
                >
                  <LinkedIn/>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a className={s.links__link}
                   href="https://github.com/Odinokun"
                   target="_blank" rel="nofollow noopener noreferrer">
                  <Git/>
                  <span>Github</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={s.links__item}>
            <h3 className={s.links__title}>Get in touch with me</h3>
            <ul className={s.links__list}>
              <li>
                <a className={s.links__link}
                   href="https://t.me/odinokun"
                   target="_blank" rel="nofollow noopener noreferrer">
                  <Telegram/>
                  <span>My telegram</span>
                </a>
              </li>
              <li>
                <a className={s.links__link}
                   href="mailto:odinokun@gmail.com">
                  <Mail/>
                  <span>odinokun@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.btn}>
          <Button/>
        </div>
      </div>
    </div>
  );
}

export default Contacts;