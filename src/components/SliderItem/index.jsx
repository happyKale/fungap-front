import React from 'react';
import classNames from 'classnames';
// route
import { history } from '@redux/configureStore';
// css
import style from './sliderItem.module.css';

const SliderItem = ({ page, image }) => {
  const handleClick = () => history.push(`${page}`);

  return (
    <div className={style.imageBox} onClick={handleClick}>
      <div className={classNames(style[image], style.img)} />
    </div>
  );
};

export default SliderItem;
