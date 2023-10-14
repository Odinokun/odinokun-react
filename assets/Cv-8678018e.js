import{c as m,j as e,s as n,L as x,a as u,B as d,T as i}from"./index-014f055d.js";import{w as f,i as h}from"./withMetadata-5b80f3f9.js";import{v as a,P as v,C as j,a as k}from"./PageTitle-73f724d5.js";import{L as g}from"./Link-35225a53.js";import{L as y}from"./LinkButton-2205bdfe.js";const w=m(e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email"),b=m(e.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),L=m(e.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),I=[{id:a(),label:"E-mail",link:"mailto:odinokun@gmail.com",icon:w},{id:a(),label:"GitHub",link:"https://github.com/Odinokun",icon:b,target:"_blank",rel:"noreferrer noopener nofollow"},{id:a(),label:"LinkedIn",link:"https://www.linkedin.com/in/dmitry-gordienko/",icon:L,target:"_blank",rel:"noreferrer noopener nofollow"}],C=n(x)`
  display: flex;
  margin-bottom: 25px;
`,S=n(u)`
  padding: 0;
`,A=n(g)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  transform: scale(1);
  transition: 0.2s ease-in-out;
  color: ${({theme:t})=>t.palette.text.primary};

  svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    transform: scale(1.2);
    color: ${({theme:t})=>t.palette.text.secondary};
  }
`,H=()=>e.jsx(C,{children:I.map(({id:t,label:o,link:r,icon:s,target:c,rel:p})=>e.jsx(S,{children:e.jsx(A,{href:r,target:c,rel:p,children:e.jsx(s,{title:o})})},t))}),R=n(d)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  margin: 0 auto 30px;
  max-width: 450px;

  @media (min-width: ${({theme:t})=>t.breakpoints.values.lg}px) {
    margin: 0 0 30px 0;
    max-width: 100%;
  }
`,M=n("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,T="/vite-deploy/assets/cv-avatar-1c944506.jpg",P=()=>e.jsx(R,{children:e.jsx(M,{src:T,alt:"Dima Hordiienko - front-end developer"})}),$=[{id:a(),title:"Name",value:"Dima Hordiienko",link:null},{id:a(),title:"Position",value:"Front-end Developer",link:null},{id:a(),title:"Employment",value:"Full-time",link:null},{id:a(),title:"Location",value:"Canada, Ottawa",link:null},{id:a(),title:"Experience",value:"9+ years",link:null},{id:a(),title:"Email",value:"odinokun@gmail.com",link:"mailto:odinokun@gmail.com"},{id:a(),title:"Website",value:"odinokun.com",link:"http://odinokun.com"},{id:a(),title:"Socials",value:"LinkedIn",link:"https://www.linkedin.com/in/dmitry-gordienko/",target:"_blank",rel:"noreferrer noopener nofollow"},{id:a(),title:"",value:"GitHub",link:"https://github.com/Odinokun",target:"_blank",rel:"noreferrer noopener nofollow"}],E=n(x)`
  margin: 0 0 15px 0;
  padding: 0;
  width: 100%;
  
  @media (min-width: ${({theme:t})=>t.breakpoints.values.sm}px) {
    width: auto;
  }
`,G=n(u)`
  display: flex;
  margin-bottom: 12px;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${({theme:t})=>t.breakpoints.values.sm}px) {
    flex-direction: row;
  }
`,_=n(i)`
  flex: none;

  @media (min-width: ${({theme:t})=>t.breakpoints.values.sm}px) {
    width: 125px;
    padding-right: 10px;
  }
`,D=n(i)`
  font-weight: 400;
`,B=n(g)`
  font-size: 20px;
  color: ${({theme:t})=>t.palette.text.primary};
  text-decoration-color: ${({theme:t})=>t.palette.text.primary};
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({theme:t})=>t.palette.text.secondary};
  }
`,U=()=>e.jsx(E,{children:$.map(({id:t,title:o,value:r,link:s,target:c,rel:p})=>e.jsxs(G,{children:[e.jsx(_,{children:o}),s?e.jsx(B,{href:s,target:c,rel:p,children:r}):e.jsx(D,{children:r})]},t))}),V=["React.js","JavaScript","TypeScript","HTML5","Css3","Next.js","React-Bootstrap","React Hook Form","React-Query","React-Router","DaisyUI","Headless UI","Redux","Redux-Saga","Redux-Thunk","Redux-Toolkit","Material UI","MUI","Storybook","Tailwind","React-Query","React-Bootstrap","HTML","Css","Barba.js","Axios","GSAP","Pug","Jade","Sass","Scss","Less","Chakra UI","Jquery","Jquery UI","Bootstrap","FancyBox","Slick.js","Swiper","Three.js","Angular","Vue.js","Ant Design","Php","Nuxt.js","Vuex","Webpack","Git","GitHub","Gulp","Pnpm","Yarn","Npm","API","Google API","Leaflet","OpenGraph","Svg"],J=n(d)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  grid-gap: 30px;
  
  @media (min-width: ${({theme:t})=>t.breakpoints.values.lg}px) {
    grid-template-columns: 360px 1fr;
    padding: 0;
  }
`,O=n(v)`
  margin-bottom: 50px;
  overflow: hidden;
  padding: 35px;

  @media (min-width: ${({theme:t})=>t.breakpoints.values.lg}px) {
    padding: 0 0 50px 0;
  }
`,z=n(d)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({theme:t})=>t.breakpoints.values.lg}px) {
    padding: 0 35px;
  }
`,F=n(v)`
  margin-bottom: 50px;
  padding: 35px;
`,l=n(d)`
  margin-bottom: 35px;
  
  p {
    margin-bottom: 10px;
  }
`,N=()=>e.jsxs(j,{children:[e.jsx(k,{title:"My CV"}),e.jsxs(J,{children:[e.jsxs(O,{elevation:3,children:[e.jsx(P,{}),e.jsxs(z,{children:[e.jsx(U,{}),e.jsx(H,{}),e.jsx(y,{href:"http://odinokun.com/assets/pdf/front-end_developer_Dima_Hordiienko_2023-CA.pdf",title:"Download cv",btncolor:"dark"})]})]}),e.jsxs(F,{elevation:3,children:[e.jsxs(l,{children:[e.jsx(i,{variant:"h4",children:"Skills"}),V.map((t,o)=>e.jsxs(i,{variant:"h6",display:"inline",children:[t," / "," "]},o))]}),e.jsxs(l,{children:[e.jsx(i,{variant:"h4",children:"Summary"}),e.jsx(i,{variant:"body1",children:"I have worked as a front-end developer for 9++ years, since 2014."}),e.jsx(i,{variant:"body1",children:"I have experience of working in large corporate teams and in small startups. However, despite my experience in both large corporate teams and small startups, I prefer long-term working relationships and am not inclined to frequently change jobs."}),e.jsx(i,{variant:"body1",children:"My superpower is the ability to transform a design of any complexity into a correctly functioning website."}),e.jsx(i,{variant:"body1",children:'I love the frontend because new technologies appear in it every day. The work of a front-end developer was very well described by Lewis Carroll "My dear, here we must run as fast as we can, just to stay in place. And if you wish to go anywhere you must run twice as fast as that."'})]}),e.jsxs(l,{children:[e.jsx(i,{variant:"h4",children:"Education"}),e.jsxs(i,{variant:"body1",children:["Kyiv University of Tourism, Economics and Law - ",e.jsx("strong",{children:"Bachelor's degree"})," in law"]})]}),e.jsxs(l,{children:[e.jsx(i,{variant:"h4",children:"Additional courses "}),e.jsxs(i,{variant:"body1",children:[e.jsx("strong",{children:"React Developer Course"})," - IT Incubator (2023)"]}),e.jsxs(i,{variant:"body1",children:[e.jsx("strong",{children:"Complete JavaScript Course"})," - Loftschool (2018)"]}),e.jsxs(i,{variant:"body1",children:[e.jsx("strong",{children:"Web Development for Advanced"})," - Loftschool (2016)"]})]})]})]})]}),W=()=>e.jsx(N,{}),Z=f({title:h.t("meta.cv.title"),description:h.t("meta.cv.description")})(W);export{Z as CvPageMeta,Z as default};
