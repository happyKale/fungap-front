import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './recommend.module.css';

const Recommend = ({ title, id }) => {
  const handleClick = () => {
    history.push(`/detail/${id}`);
  };

  return (
    <div className={style.recommendList} onClick={handleClick}>
      <div name='아이콘이미지' />
      <p>{title}</p>
    </div>
  );
};

export default Recommend;
