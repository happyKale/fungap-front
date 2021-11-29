import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './contentsRowTitle.module.css';

const ContentsRowTitle = ({ title, desc, link }) => {
  const handleClick = e => history.push(link);

  return (
    <div>
      <p //
        className={style.title}
        onClick={handleClick}
      >
        {title}
        <span className={style.more}>더보기 〉</span>
      </p>
      <p className={style.desc}>{desc}</p>
    </div>
  );
};

export default ContentsRowTitle;
