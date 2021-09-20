import React from 'react';
import PageHeader from "../../components/PageHeader/PageHeader";
import CvAside from "../../components/CvAside/CvAside";

import s from './cv.module.scss';

function Cv(props) {
  return (
    <>
      <PageHeader title="My CV"/>
      <div className={`container ${s.cv}`}>
          <CvAside/>

          {/*// <!--begin cv__right-->*/}
          <div className={s.right}>
            {/*// <!--begin ABOUT-->*/}
            <h2 className={s.title}>Dmitry Gordienko</h2>
            <div className={s.descr}>
              <p>I develop and optimize layouts for adaptive sites, also maintain existing projects. I always make sure to check the results of my work for cross-browser
                compatibility, download speed and validity.</p>
              <p>My list of completed projects includes 100+ sites performed at various levels of complexity. More information about some of them is available in <a
                href="works.html">Works section</a> and on my <a href="https://github.com/Odinokun" target="_blank" rel="nofollow noopener noreferrer">Github page.</a>
              </p>
            </div>
            <h2 className={s.title}>Open for Front-End Developer Position</h2>
            <div className={s.descr}>
              <p><i>I consider both full time and part time office employment (Kyiv, Ukraine), remote cooperation is also possible.</i></p>
            </div>
            {/*// <!--end ABOUT-->*/}
            {/*// <!--begin SKILLS-->*/}
            <h2 className={s.title}>Skills</h2>
            <div className={s.descr}>
              <ul className={s.list}>
                <li><strong>HTML5</strong> with <strong>Pug</strong> (ex-Jade)
                </li>
                <li><strong>Css3</strong> with <strong>Scss</strong>
                </li>
                <li><strong>JS</strong> (native & Jquery)
                </li>
                <li><strong>React.js</strong> (beginner level)
                </li>
                <li><strong>Vue.js</strong> (beginner level)
                </li>
              </ul>
            </div>
            {/*// <!--end SKILLS-->*/}
            {/*// <!--begin TOOLS-->*/}
            <h2 className={s.title}>Tools that I use</h2>
            <div className={s.descr}>
              <ul className={s.list}>
                <li><strong>Gulp</strong> and <strong>Webpack</strong>
                </li>
                <li><strong>Git</strong> and <strong>Github</strong>
                </li>
                <li><strong>Figma, Avocode, Adobe Photoshop, Adobe Illustrator</strong></li>
              </ul>
            </div>
            {/*// <!--end TOOLS-->*/}
            {/*// <!--begin LANGUAGES-->*/}
            <h2 className={s.title}>Languages</h2>
            <div className={s.descr}>
              <ul className={s.list}>
                <li><strong>Russian/Ukrainian</strong> (native)
                </li>
                <li><strong>English</strong> (A2 - elementary)
                </li>
              </ul>
            </div>
            {/*// <!--end LANGUAGES-->*/}
            {/*// <!--begin EDUCATION-->*/}
            <h2 className={s.title}>Education</h2>
            <p><strong>2012</strong> - law degree (KUTEP)
            </p>
            <p><strong>2016</strong> - Loftschool - <a href="/">Web Development for Advanced</a>
            </p>
            <p><strong>2018</strong> - Loftschool - <a href="/">Complete JavaScript Course</a>
            </p>
            {/*// <!--end EDUCATION-->*/}
          </div>
          {/*// <!--end cv__right-->*/}
      </div>
    </>
  );
}

export default Cv;