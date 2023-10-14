import{k as n,s as o,B as a,j as t,T as c}from"./index-4ff0780f.js";import{w as m,i}from"./withMetadata-597ffc27.js";import{L as p}from"./LinkButton-1e518af8.js";import"./Link-e9e1bd2b.js";const r=n`
  0% {
    opacity: .3;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: .1;
  }
`,f=n`
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(calc(-50% - 10px));
  }
`,d=n`
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(calc(50% + 10px));
  }
`,h=o(a)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
  pointer-events: none;
`,l=o("svg")`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  fill: transparent;
  stroke-width: 70px;
  stroke: ${({theme:e})=>e.palette.common.white};
  max-width: calc(50% - 30px);
  height: 90vh;
  margin: auto;
  display: block;
  opacity: .08;

  &:nth-of-type(1) {
    transform: translateX(-100vw);
    animation: 1s ${f} ease-in-out .2s forwards, 1.5s ${r} ease-in-out .2s forwards;
  }

  &:nth-of-type(2) {
    transform: translateX(100vw);
    animation: 1s ${d} ease-in-out .2s forwards, 1.5s ${r} ease-in-out .2s forwards;
  }
`,x=()=>t.jsxs(h,{children:[t.jsx(l,{viewBox:"0 0 240 770",children:t.jsx("polyline",{points:"0,35 150,35 205,80 205,690 150,735 35,735 35,0"})}),t.jsx(l,{viewBox:"0 0 240 770",children:t.jsx("polyline",{points:"35,63 35,770 35,500 205,460 205,705 205,0"})})]}),s=n`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,g=o(a)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.palette.background.default};
  min-height: 100vh;
`,w=o(a)`
  position: relative;
  z-index: 1;
  padding: 10px 20px;
  text-align: center;
`,u=o(c)`
  font-family: 'Teko', sans-serif;
  font-size: 12vw !important;
  line-height: 1;
  margin-bottom: 0;
  user-select: none;
  animation: 1.1s ${s} ease 1.8s forwards;
  letter-spacing: 3px;
  opacity: 0;
  color: ${({theme:e})=>e.palette.common.white};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.values.lg}px) {
    font-size: 10.5vw !important;
  }
`,y=o(c)`
  font-family: 'Kaushan Script', cursive;
  font-size: 5vw !important;
  margin-bottom: 50px;
  user-select: none;
  animation: 1.1s ${s} ease 2s forwards;
  text-align: center;
  opacity: 0;
  color: ${({theme:e})=>e.palette.common.white};

  @media (min-width: ${({theme:e})=>e.breakpoints.values.lg}px) {
    font-size: 3vw !important;
  }
`,v=o(a)`
  display: flex;
  justify-content: center;
  animation: 1.1s ${s} ease 2.2s forwards;
  opacity: 0;
`,j=()=>t.jsxs(g,{children:[t.jsx(x,{}),t.jsxs(w,{children:[t.jsx(u,{variant:"h1",children:"Dima Hordiienko"}),t.jsx(y,{variant:"h2",children:"front-end developer"}),t.jsx(v,{children:t.jsx(p,{href:"https://www.google.com/",target:"_blank",title:"Download CV",btncolor:"light"})})]})]}),b=()=>t.jsx(j,{}),T=m({title:i.t("meta.home.title"),description:i.t("meta.home.description")})(b);export{T as HomePageMeta,T as default};
