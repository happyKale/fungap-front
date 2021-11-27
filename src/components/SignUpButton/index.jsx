import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './signupBtn.module.css';

const SignUpButton = props => {
  const handleClick = e => history.push('/signup');

  return (
    <div className={style.wrap}>
      <button className={style.btn} onClick={handleClick}>
        이메일로 시작하기
      </button>
    </div>
  );
};

export default SignUpButton;
