import React from 'react';
import classnames from 'classnames';
// route
import { history } from '@redux/configureStore';
// css
import style from './banner.module.css';

const Banner = ({ page, image }) => {
  const handleClick = () => history.push(`${page}`);

  return (
    <div //
      className={classnames(style.banner, style[image])}
      onClick={handleClick}
    ></div>
  );
};

export default Banner;
