import React from 'react';
// css
import style from './mbtiReaction.module.css';

const MbtiReaction = props => {
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <div className={style.name}>{props[0]?.toUpperCase()}</div>
        <div className={style.desc}>{props[1]}</div>
      </div>
    </div>
  );
};

export default MbtiReaction;
