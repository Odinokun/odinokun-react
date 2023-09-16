import { FC } from 'react';

interface IProps {}

export const App: FC<IProps> = () => {
  return (
    <div className='main-wrap' id='main-wrap'>
      {/* <!-- begin aside--> */}
      <aside className='aside' id='aside'>
        <a className='aside__logo logo' href='/'>
          {/* <svg>
          <use xlink:href="assets/img/sprite.svg#logo"></use>
        </svg> */}
        </a>
        {/* <!--begin menu--> */}
        <nav className='aside__menu menu'>
          <ul className='menu__list'>
            <li className='menu__item menu__item--home'>
              <a className='menu__link' href='/'>
                {/* <svg>
                <use xlink:href="assets/img/sprite.svg#home"></use>
              </svg> */}
                <span className='menu__text'>home</span>
              </a>
            </li>
            <li className='menu__item'>
              <a className='menu__link' href='cv.html'>
                {/* <svg>
                <use xlink:href="assets/img/sprite.svg#resume"></use>
              </svg> */}
                <span className='menu__text'>cv</span>
              </a>
            </li>
            <li className='menu__item'>
              <a className='menu__link' href='works.html'>
                {/* <svg>
                <use xlink:href="assets/img/sprite.svg#works"></use>
              </svg> */}
                <span className='menu__text'>works</span>
              </a>
            </li>
            <li className='menu__item'>
              <a className='menu__link' href='blog.html'>
                {/* <svg>
                <use xlink:href="assets/img/sprite.svg#blog"></use>
              </svg> */}
                <span className='menu__text'>blog</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* <!--end menu--> */}
      </aside>
      {/* <!-- end aside--> */}
      {/* <!--begin content--> */}
      <section className='main index'>
        {/* <!--begin burger--> */}
        <div className='burger' id='burger'>
          <div className='burger__line burger__line--top'></div>
          <div className='burger__line burger__line--middle-01'></div>
          <div className='burger__line burger__line--middle-02'></div>
          <div className='burger__line burger__line--bottom'></div>
        </div>
        {/* <!--end burger--> */}
        {/* <!--begin scroll-2-top--> */}
        <a
          className='scroll-2-top scroll-2-anchor'
          href='#main-wrap'
          id='scroll-2-top'
        >
          {/* <svg>
          <use xlink:href="assets/img/sprite.svg#scroll-2-top"></use>
        </svg> */}
        </a>
        {/* <!--end scroll-2-top--> */}
        <div className='index__bg'>
          {/* <svg>
          <use xlink:href="assets/img/sprite.svg#logo-01"></use>
        </svg> */}
          {/* <svg>
          <use xlink:href="assets/img/sprite.svg#logo-02"></use>
        </svg> */}
        </div>
        <div className='index__block'>
          <h1 className='index__title index__title--mobile'>Dima Hordiienko</h1>
          {/* <h1 className="index__title index__title--desktop" style="filter: none;">Dima Hordiienko</h1> */}
          {/* хз шо то за инлайновый стиль */}
          <h1 className='index__title index__title--desktop'>
            Dima Hordiienko
          </h1>
          <svg className='index__filter'>
            <filter id='distortionFilter'>
              {/* <feturbulence type="fractalNoise" baseFrequency="2.01 .01" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"></feturbulence> */}
              {/* <fedisplacementmap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></fedisplacementmap> */}
            </filter>
          </svg>
          <h2 className='index__subtitle'>front-end developer</h2>
          <div className='index__btn'>
            <a
              className='btn btn--light'
              href='assets/text/front-end_developer_Dima_Hordiienko_2023.pdf'
              target='_blank'
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      {/* <!--end content--> */}
    </div>
  );
};
