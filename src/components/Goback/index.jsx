import React from 'react';

import style from './goback.module.css';

import { history } from '../../redux/configureStore';

const Goback = ({ children, page }) => {
  const handleClick = () => {
    history.push(page);
  };

  return (
    <div className={style.goback} onClick={handleClick}>
      <h2 className={style.title}>{children}</h2>
    </div>
  );
};

export default Goback;
