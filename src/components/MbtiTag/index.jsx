import React from 'react';
import classnames from 'classnames';

import style from './mbtiTag.module.css';

const MbtiTag = ({ children, mbti }) => {
  const userMbti = mbti.toLowerCase();

  return (
    <>
      <span className={classnames(style.mbti, style[userMbti])}>
        {children}
      </span>
    </>
  );
};

export default MbtiTag;
