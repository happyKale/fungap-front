import React from 'react';

import { GoogleSignIn, KakaoSignIn, NaverSignIn } from '../';
import { EmailSignIn, EmailSignUp } from '../../components';
import style from './signin.module.css';

const SignIn = props => {
  return (
    <div className={style.container}>
      <div className={style.bg}></div>
      <h2 className={style.logo}>logo</h2>
      <div className={style.socialLogin}>
        <KakaoSignIn />
        <NaverSignIn />
        <GoogleSignIn />
        <p className={style.or}>또는</p>
        <EmailSignIn />
        <EmailSignUp />
      </div>
    </div>
  );
};

export default SignIn;
