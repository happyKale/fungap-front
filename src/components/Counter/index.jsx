import React from 'react';

import style from './counter.module.css';

const Counter = props => {
  return (
    <div className={style.counter}>
      <span className={style.comments}>댓글 25</span>
      <span className={style.views}>조회수 2,520</span>
    </div>
  );
};

export default Counter;
