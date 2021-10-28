import React from 'react';
import { GoogleLogin } from 'react-google-login';
// npm i react-google-login 패키지 설치하시면 됩니다!
// yarn add react-google-login

const GoogleSignIn = props => {
  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <GoogleLogin
      accessType={'offline'}
      clientId={
        '939807777586-erf4tslq3av97pkh7mbki88cek2mjrsi.apps.googleusercontent.com'
      }
      buttonText='구글 로그인'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      redirectUri={'http://localhost:3000'}
      approvalPrompt={'force'}
    />
  );
};

export default GoogleSignIn;
