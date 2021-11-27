import React from 'react';
import classnames from 'classnames';
// route
import { history } from '@redux/configureStore';
// css
import style from './goback.module.css';

const Goback = ({ page, children, color }) => {
  const admin = history.location.pathname.includes('admin');
  const handleClick = () => {
    if (page) {
      history.push(page);
    } else {
      history.goBack();
    }
  };

  return (
    <div
      className={classnames(
        style.wrap,
        color && style.colorWrap,
        admin && style.adminWrap,
      )}
      onClick={handleClick}
    >
      <h2 className={style.title}>{children}</h2>
    </div>
  );
};

export default Goback;
