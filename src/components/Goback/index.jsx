import React from 'react';

import classnames from 'classnames';
import style from './goback.module.css';

import { history } from '../../redux/configureStore';

const Goback = ({ children, page, color }) => {
  const handleClick = () => {
    if (page) {
      console.log('페이지: ', page);
      history.push(page);
    } else {
      console.log('페이지: ', page);
      history.goBack();
    }
  };

  return (
    <div
      className={classnames(style.wrap, color && style.colorWrap)}
      onClick={handleClick}
    >
      <h2 className={style.title}>{children}</h2>
    </div>
  );
};

export default Goback;
