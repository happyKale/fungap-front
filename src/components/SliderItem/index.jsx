import React from 'react';
import classnames from 'classnames';
// route
import { history } from '@redux/configureStore';
// css
import style from './sliderItem.module.css';

const SliderItem = ({ page, image }) => {
  const handleClick = () => history.push(`${page}`);

  return (
    <div className={style.imageBox} onClick={handleClick}>
      <div className={classnames(style.img, style[image])} />
    </div>
  );
};

export default SliderItem;
