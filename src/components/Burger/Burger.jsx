import React from 'react';

function Burger(props) {
  return (
    <div className="burger" id="burger">
      <div className="burger__line burger__line--top"></div>
      <div className="burger__line burger__line--middle-01"></div>
      <div className="burger__line burger__line--middle-02"></div>
      <div className="burger__line burger__line--bottom"></div>
    </div>
  );
}

export default Burger;