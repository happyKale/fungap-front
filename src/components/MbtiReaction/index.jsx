import React from 'react';
import classnames from 'classnames';
// css
import style from './mbtiReaction.module.css';

const MbtiReaction = props => {
  const userMbti = JSON.parse(
    sessionStorage.getItem('user'),
  ).user_mbti.toLowerCase();

  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <div
          className={classnames(
            style.name,
            props[0].toLowerCase() === userMbti && style.target,
          )}
        >
          {props[0]?.toUpperCase()}
        </div>
        <div
          className={classnames(
            style.desc,
            props[0].toLowerCase() === userMbti && style.target,
          )}
        >
          {props[1]}
        </div>
      </div>
    </div>
  );
};

export default MbtiReaction;
