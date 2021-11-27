import React from 'react';
import style from './contentsRowTitle.module.css';
import { history } from '../../redux/configureStore';

const ContentsRowTitle = props => {
  const title = props?.title;
  const desc = props?.desc;
  const link = props?.link;

  return (
    <div>
      <p
        onClick={() => {
          history.push(link);
        }}
        className={style.title}
      >
        {title}
        <span className={style.more}>더보기 〉</span>
      </p>
      <p className={style.desc}>{desc}</p>
    </div>
  );
};

export default ContentsRowTitle;
