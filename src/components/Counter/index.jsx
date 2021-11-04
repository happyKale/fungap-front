import React from 'react';

import style from './counter.module.css';

const Counter = ({ commentCount, viewCount }) => {
  return (
    <div className={style.counter}>
      <span className={style.comments}>댓글 {commentCount}</span>
      <span className={style.views}>조회수 {viewCount}</span>
    </div>
  );
};

export default Counter;
