import React from 'react';
// components
import {
  GoogleSignIn,
  KakaoSignIn,
  NaverSignIn,
  SignInButton,
  SignUpButton,
} from '@components/';
// css
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
        <SignInButton />
        <SignUpButton />
      </div>
    </div>
  );
};

export default SignIn;
