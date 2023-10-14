import{r as z,g as O,b as _,s as u,_ as k,u as q,d as U,e as F,f as Z,j as s,h as A,i as j,l as C,m as Q,c as B,B as h,T as $}from"./index-4ff0780f.js";import{w as X,i as V}from"./withMetadata-597ffc27.js";import{P as Y,v as w,C as ee,a as te}from"./PageTitle-29c4a1e2.js";import{L as ne}from"./Link-e9e1bd2b.js";const ie=z.createContext(),N=ie;function re(e){return O("MuiGrid",e)}const oe=[0,1,2,3,4,5,6,7,8,9,10],se=["column-reverse","column","row-reverse","row"],ae=["nowrap","wrap-reverse","wrap"],v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=_("MuiGrid",["root","container","item","zeroMinWidth",...oe.map(e=>`spacing-xs-${e}`),...se.map(e=>`direction-xs-${e}`),...ae.map(e=>`wrap-xs-${e}`),...v.map(e=>`grid-xs-${e}`),...v.map(e=>`grid-sm-${e}`),...v.map(e=>`grid-md-${e}`),...v.map(e=>`grid-lg-${e}`),...v.map(e=>`grid-xl-${e}`)]),ce=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function f(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function le({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((i,n)=>{let o={};if(t[n]&&(r=t[n]),!r)return i;if(r===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=j({values:t.columns,breakpoints:e.breakpoints.values}),p=typeof c=="object"?c[n]:c;if(p==null)return i;const d=`${Math.round(r/p*1e8)/1e6}%`;let l={};if(t.container&&t.item&&t.columnSpacing!==0){const a=e.spacing(t.columnSpacing);if(a!=="0px"){const m=`calc(${d} + ${f(a)})`;l={flexBasis:m,maxWidth:m}}}o=k({flexBasis:d,flexGrow:0,maxWidth:d},l)}return e.breakpoints.values[n]===0?Object.assign(i,o):i[e.breakpoints.up(n)]=o,i},{})}function pe({theme:e,ownerState:t}){const r=j({values:t.direction,breakpoints:e.breakpoints.values});return C({theme:e},r,i=>{const n={flexDirection:i};return i.indexOf("column")===0&&(n[`& > .${b.item}`]={maxWidth:"none"}),n})}function L({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(n=>{r===""&&t[n]!==0&&(r=n)});const i=Object.keys(e).sort((n,o)=>e[n]-e[o]);return i.slice(0,i.indexOf(r))}function de({theme:e,ownerState:t}){const{container:r,rowSpacing:i}=t;let n={};if(r&&i!==0){const o=j({values:i,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=L({breakpoints:e.breakpoints.values,values:o})),n=C({theme:e},o,(p,d)=>{var l;const a=e.spacing(p);return a!=="0px"?{marginTop:`-${f(a)}`,[`& > .${b.item}`]:{paddingTop:f(a)}}:(l=c)!=null&&l.includes(d)?{}:{marginTop:0,[`& > .${b.item}`]:{paddingTop:0}}})}return n}function ue({theme:e,ownerState:t}){const{container:r,columnSpacing:i}=t;let n={};if(r&&i!==0){const o=j({values:i,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=L({breakpoints:e.breakpoints.values,values:o})),n=C({theme:e},o,(p,d)=>{var l;const a=e.spacing(p);return a!=="0px"?{width:`calc(100% + ${f(a)})`,marginLeft:`-${f(a)}`,[`& > .${b.item}`]:{paddingLeft:f(a)}}:(l=c)!=null&&l.includes(d)?{}:{width:"100%",marginLeft:0,[`& > .${b.item}`]:{paddingLeft:0}}})}return n}function me(e,t,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const i=[];return t.forEach(n=>{const o=e[n];Number(o)>0&&i.push(r[`spacing-${n}-${String(o)}`])}),i}const ge=u("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:i,direction:n,item:o,spacing:c,wrap:p,zeroMinWidth:d,breakpoints:l}=r;let a=[];i&&(a=me(c,l,t));const m=[];return l.forEach(g=>{const x=r[g];x&&m.push(t[`grid-${g}-${String(x)}`])}),[t.root,i&&t.container,o&&t.item,d&&t.zeroMinWidth,...a,n!=="row"&&t[`direction-xs-${String(n)}`],p!=="wrap"&&t[`wrap-xs-${String(p)}`],...m]}})(({ownerState:e})=>k({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),pe,de,ue,le);function xe(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return t.forEach(i=>{const n=e[i];if(Number(n)>0){const o=`spacing-${i}-${String(n)}`;r.push(o)}}),r}const fe=e=>{const{classes:t,container:r,direction:i,item:n,spacing:o,wrap:c,zeroMinWidth:p,breakpoints:d}=e;let l=[];r&&(l=xe(o,d));const a=[];d.forEach(g=>{const x=e[g];x&&a.push(`grid-${g}-${String(x)}`)});const m={root:["root",r&&"container",n&&"item",p&&"zeroMinWidth",...l,i!=="row"&&`direction-xs-${String(i)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...a]};return Q(m,re,t)},he=z.forwardRef(function(t,r){const i=q({props:t,name:"MuiGrid"}),{breakpoints:n}=U(),o=F(i),{className:c,columns:p,columnSpacing:d,component:l="div",container:a=!1,direction:m="row",item:g=!1,rowSpacing:x,spacing:W=0,wrap:R="wrap",zeroMinWidth:D=!1}=o,y=Z(o,ce),I=x||W,H=d||W,J=z.useContext(N),M=a?p||12:J,P={},G=k({},y);n.keys.forEach(S=>{y[S]!=null&&(P[S]=y[S],delete G[S])});const T=k({},o,{columns:M,container:a,direction:m,item:g,rowSpacing:I,columnSpacing:H,wrap:R,zeroMinWidth:D,spacing:W},P,{breakpoints:n.keys}),K=fe(T);return s.jsx(N.Provider,{value:M,children:s.jsx(ge,k({ownerState:T,className:A(K.root,c),as:l,ref:r},G))})}),E=he,ve=B(s.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth"),ke=B(s.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"InsertLink"),be=u(Y)`
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
`,Se=u(ne)`
  color: ${({theme:e})=>e.palette.text.primary};
  text-decoration: none;

  &:hover img {
    opacity: 0.85;
    transform: scale(1.05);
  }
`,we=u(h)`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: ${({theme:e})=>e.palette.common.black};
  margin-bottom: 10px;

  @media (min-width: ${({theme:e})=>e.breakpoints.values.xl}px) {
    height: 250px;
  }
`,$e=u("img")`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.3s ease-in-out;
`,je=u(h)`
  padding: 10px 0 0 0;
  display: flex;
`,We=u(h)`
  display: flex;
  align-items: center;
  padding-right: 10px;

  svg {
    padding-left: 0;
    margin-right: 5px;
  }
`,ye=u($)`
  font-size: 16px;
  margin-bottom: 0;
  line-height: 1;
  padding-top: 4px;
`,ze=u(h)`
  display: flex;
  align-items: center;
  padding-top: 2px;

  svg {
    margin-right: 5px;
    transform: rotate(-30deg);
  }
`,Ce=u(h)`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
`,Me=u($)`
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 3px 5px 0 7px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.text.primary};
  border: 1px solid ${({theme:e})=>e.palette.text.primary};
  border-radius: 4px;
`,Pe=({work:e})=>s.jsx(be,{elevation:0,children:s.jsxs(Se,{href:e.link,target:"_blank",rel:"nofollow noopener noreferrer",children:[s.jsx(we,{children:s.jsx($e,{src:e.imgSrc,alt:e.title})}),s.jsxs(h,{children:[s.jsx($,{variant:"h5",children:e.title}),s.jsxs(je,{children:[s.jsxs(We,{children:[s.jsx(ve,{}),s.jsx(ye,{variant:"caption",children:e.date})]}),s.jsxs(ze,{children:[s.jsx(ke,{}),s.jsx($,{variant:"body2",children:e.linkTitle})]})]}),s.jsx(Ce,{children:e.tags.map(t=>s.jsx(Me,{variant:"caption",children:t},t))})]})]})}),Ge=[{id:w(),link:"http://flowerland.odinokun.com/",imgSrc:"public/works/flowerland.jpg",title:"Floral & Event Design Studio",date:"2019",linkTitle:"flowerland.odinokun.com",tags:["Pug","Scss","JS/Jquery"]},{id:w(),link:"http://rabbit.odinokun.com/",imgSrc:"public/works/rabbit.jpg",title:"White Rabbit ",date:"2019",linkTitle:"rabbit.odinokun.com",tags:["Pug","Scss","JS/Jquery"]},{id:w(),link:"http://notary.odinokun.com/",imgSrc:"public/works/notary.jpg",title:"Privat Notary - personal website",date:"2018",linkTitle:"notary.odinokun.com",tags:["Design","Pug","Scss","JS/Jquery"]},{id:w(),link:"https://4deluxe-whirlpool.de/",imgSrc:"public/works/whirlpool.jpg",title:"4Deluxe - Whirlpools shop",date:"2018",linkTitle:"4deluxe-whirlpool.de",tags:["Pug","Scss","JS/Jquery"]}],Te=u(E)`
  padding-bottom: 100px;
`,Ve=()=>s.jsxs(ee,{children:[s.jsx(te,{title:"Some works"}),s.jsx(Te,{container:!0,spacing:2,children:Ge.map(e=>s.jsx(E,{item:!0,xs:12,md:6,xl:4,children:s.jsx(Pe,{work:e})},e.id))})]}),Ne=()=>s.jsx(Ve,{}),De=X({title:V.t("meta.works.title"),description:V.t("meta.works.description")})(Ne);export{De as WorksPageMeta,De as default};
