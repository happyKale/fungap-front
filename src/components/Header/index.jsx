import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './header.module.css';

const Header = props => {
  const handleClick = () => history.push('/search');

  return (
    <div className={style.header}>
      <div className={style.logo} />
      <div className={style.icons}>
        <div className={style.iconSearch} onClick={handleClick} />
        <div className={style.iconAlarm} />
      </div>
    </div>
  );
};

export default Header;
