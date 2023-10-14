import{s as i,B as d,j as o}from"./index-1973dd08.js";import{L as l}from"./Link-8e51b883.js";const s=i(d)(({btncolor:e})=>`
  position: relative;
  padding: 0;
  border-left: 2px solid ${e==="light"?"#fdf9f3":"#1e1e1e"};
  border-right: 2px solid ${e==="light"?"#fdf9f3":"#1e1e1e"};
  border-top: none;
  border-bottom: none;
  color: ${e==="light"?"#fdf9f3":"#1e1e1e"};
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 2px;
    width: 60%;
    background-color: ${e==="light"?"#fdf9f3":"#1e1e1e"};
    transition: all 0.5s;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover {
    border-top: none;
    border-bottom: none;
    border-left: 2px solid ${e==="light"?"#fdf9f3":"#1e1e1e"};
    border-right: 2px solid ${e==="light"?"#fdf9f3":"#1e1e1e"};
    &:before,
    &:after {
      width: 10px;
    }
  }
`),a=i(l)(({btncolor:e})=>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 2px 46px 0 46px;

  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  color: ${e==="light"?"#fdf9f3":"#1e1e1e"};
  transition: all 0.5s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 60%;
    background-color: ${e==="light"?"#fdf9f3":"#1e1e1e"};
    transition: all 0.5s;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover {
    color: #ffb100;
    
    &:before,
    &:after {
      width: 10px;
    }
  }
`),x=({href:e,title:r,btncolor:t,target:n,rel:f})=>o.jsx(s,{btncolor:t,children:o.jsx(a,{href:e,variant:"button",btncolor:t,target:n,rel:f,children:r})});export{x as L};
