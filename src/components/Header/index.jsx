import React from 'react';
// css
import style from './header.module.css';

const Header = props => {
  return (
    <div className={style.header}>
      <div className={style.logo} />
    </div>
  );
};

export default Header;
