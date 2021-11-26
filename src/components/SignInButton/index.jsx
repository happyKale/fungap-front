import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './signinBtn.module.css';

const SignInButton = props => {
  const handleClick = e => history.push('/signin_email');

  return (
    <div className={style.wrap}>
      <button className={style.btn} onClick={handleClick}>
        이메일로 시작하기
      </button>
    </div>
  );
};

export default SignInButton;
