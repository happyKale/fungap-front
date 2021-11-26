import React, { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { userActions } from '@redux/modules/user';
// css
import style from './naver.module.css';

const { naver } = window;

const NaverSignIn = () => {
  const dispatch = useDispatch();
  const NAVER_CALLBACK_URL = process.env.REACT_APP_NAVER_CALLBACK_URL;
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_API_KEY;

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: 'white', type: 1, height: '30' },
    });
    naverLogin.init();

    dispatch(userActions.signinNaverDB(naverLogin?.accessToken?.accessToken));
  };

  const clickNaverLogin = () => {
    const loginBtn = document.getElementById('naverIdLogin').firstChild;
    loginBtn.click();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <>
      <div className={style.btn} onClick={clickNaverLogin}></div>
      <div id='naverIdLogin' className={style.fake}></div>
    </>
  );
};

export default NaverSignIn;
