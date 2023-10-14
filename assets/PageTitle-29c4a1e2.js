import{n as j,_ as f,o as N,p as h,q as z,r as P,f as W,j as x,h as w,m as R,g as M,b as U,s as v,t as $,u as T,v as L,w as A,B,T as E}from"./index-4ff0780f.js";const I=j(),O=I,D=["className","component","disableGutters","fixed","maxWidth","classes"],F=N(),K=O("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${h(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),V=e=>z({props:e,name:"MuiContainer",defaultTheme:F}),H=(e,t)=>{const n=l=>M(t,l),{classes:s,fixed:i,disableGutters:d,maxWidth:a}=e,o={root:["root",a&&`maxWidth${h(String(a))}`,i&&"fixed",d&&"disableGutters"]};return R(o,n,s)};function J(e={}){const{createStyledComponent:t=K,useThemeProps:n=V,componentName:s="MuiContainer"}=e,i=t(({theme:a,ownerState:o})=>f({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:a.spacing(2),paddingRight:a.spacing(2),[a.breakpoints.up("sm")]:{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}}),({theme:a,ownerState:o})=>o.fixed&&Object.keys(a.breakpoints.values).reduce((l,p)=>{const c=p,u=a.breakpoints.values[c];return u!==0&&(l[a.breakpoints.up(c)]={maxWidth:`${u}${a.breakpoints.unit}`}),l},{}),({theme:a,ownerState:o})=>f({},o.maxWidth==="xs"&&{[a.breakpoints.up("xs")]:{maxWidth:Math.max(a.breakpoints.values.xs,444)}},o.maxWidth&&o.maxWidth!=="xs"&&{[a.breakpoints.up(o.maxWidth)]:{maxWidth:`${a.breakpoints.values[o.maxWidth]}${a.breakpoints.unit}`}}));return P.forwardRef(function(o,l){const p=n(o),{className:c,component:u="div",disableGutters:r=!1,fixed:q=!1,maxWidth:S="lg"}=p,_=W(p,D),k=f({},p,{component:u,disableGutters:r,fixed:q,maxWidth:S}),G=H(k,s);return x.jsx(i,f({as:u,ownerState:k,className:w(G.root,c),ref:l},_))})}const Q=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},C=Q;function X(e){return M("MuiPaper",e)}U("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Y=["className","component","elevation","square","variant"],Z=e=>{const{square:t,elevation:n,variant:s,classes:i}=e,d={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${n}`]};return R(d,X,i)},ee=v("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return f({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&f({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${$("#fff",C(t.elevation))}, ${$("#fff",C(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),te=P.forwardRef(function(t,n){const s=T({props:t,name:"MuiPaper"}),{className:i,component:d="div",elevation:a=1,square:o=!1,variant:l="elevation"}=s,p=W(s,Y),c=f({},s,{component:d,elevation:a,square:o,variant:l}),u=Z(c);return x.jsx(ee,f({as:d,ownerState:c,className:w(u.root,i),ref:n},p))}),ie=te,ae=J({createStyledComponent:v("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${h(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>T({props:e,name:"MuiContainer"})}),re=ae;let y,m,g=0,b=0;function le(e,t,n){let s=t&&n||0;const i=t||new Array(16);e=e||{};let d=e.node||y,a=e.clockseq!==void 0?e.clockseq:m;if(d==null||a==null){const r=e.random||(e.rng||L)();d==null&&(d=y=[r[0]|1,r[1],r[2],r[3],r[4],r[5]]),a==null&&(a=m=(r[6]<<8|r[7])&16383)}let o=e.msecs!==void 0?e.msecs:Date.now(),l=e.nsecs!==void 0?e.nsecs:b+1;const p=o-g+(l-b)/1e4;if(p<0&&e.clockseq===void 0&&(a=a+1&16383),(p<0||o>g)&&e.nsecs===void 0&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");g=o,b=l,m=a,o+=122192928e5;const c=((o&268435455)*1e4+l)%4294967296;i[s++]=c>>>24&255,i[s++]=c>>>16&255,i[s++]=c>>>8&255,i[s++]=c&255;const u=o/4294967296*1e4&268435455;i[s++]=u>>>8&255,i[s++]=u&255,i[s++]=u>>>24&15|16,i[s++]=u>>>16&255,i[s++]=a>>>8|128,i[s++]=a&255;for(let r=0;r<6;++r)i[s+r]=d[r];return t||A(i)}const ne=v(B)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 40px 0;
  @media (min-width: ${({theme:e})=>e.breakpoints.values.md}px) {
    padding: 60px 0;
  }
  @media (min-width: ${({theme:e})=>e.breakpoints.values.xl}px) {
    padding: 80px 0;
  }
`,se=v(E)`
  font-family: 'Kaushan Script', cursive;
  font-weight: 700;
  line-height: 1;
  position: relative;
  z-index: 1;
  display: inline-block;
  user-select: none;
  color: ${({theme:e})=>e.palette.text.primary};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.values.xs}px) {
    font-size: 44px;
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.values.sm}px) {
    font-size: 60px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.values.md}px) {
    font-size: 90px;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    left: -5px;
    bottom: 10px;
    width: calc(100% + 20px);
    background-color: #ffb100;
    height: 5px;

    @media (min-width: ${({theme:e})=>e.breakpoints.values.md}px) {
      bottom: 15px;
      height: 10px;
    }
  }
`,de=({title:e})=>x.jsx(ne,{children:x.jsx(se,{children:e})});export{re as C,ie as P,de as a,le as v};
