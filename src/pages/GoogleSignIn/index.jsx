import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';

import { userActions } from '../../redux/modules/user';
import style from './google.module.css';

const GoogleSignIn = () => {
  const dispatch = useDispatch();

  const responseGoogle = response => {
    const auth = response.accessToken;

    dispatch(userActions.signinGoogleDB(auth));
  };

  return (
    <GoogleLogin
      clientId='942550805289-gh3e1gpfscr9itti0db6n8b7a67u1rm3.apps.googleusercontent.com'
      render={renderProps => (
        <button
          className={style.btn}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          구글 로그인 버튼
        </button>
      )}
      buttonText='Login'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignIn;
