import React from 'react';
import GoogleLogin from 'react-google-login';
// redux
import { useDispatch } from 'react-redux';
import { userActions } from '@redux/modules/user';
// css
import style from './google.module.css';

const GoogleSignIn = () => {
  const dispatch = useDispatch();

  const responseGoogle = response => {
    const auth = response.accessToken;

    dispatch(userActions.signinGoogleDB(auth));
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_API_KEY}
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
