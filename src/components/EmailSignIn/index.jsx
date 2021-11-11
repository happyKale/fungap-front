import React from 'react';

import { history } from '../../redux/configureStore';
import style from './emailSignIn.module.css';

const EmailSignIn = props => {
  const handleClick = e => {
    history.push('/signup');
  };

  return (
    <div className={style.wrap}>
      <button className={style.btn} onClick={handleClick}>
        이메일로 시작하기
      </button>
    </div>
  );
};

export default EmailSignIn;
