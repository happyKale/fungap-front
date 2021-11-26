import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './sliderItem.module.css';

const SliderItem = ({ page, image }) => {
  const handleClick = () => history.push(`${page}`);

  return (
    <div className={style.imageBox} onClick={handleClick}>
      <div className={style[image]} />
    </div>
  );
};

export default SliderItem;
