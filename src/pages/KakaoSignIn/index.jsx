import React from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../../redux/modules/user';
import { Button } from '../../elements';

const { Kakao } = window;

const KakaoSignIn = props => {
  const dispatch = useDispatch();

  const handClick = e => {
    e.preventDefault();

    Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj);

        dispatch(userActions.signinKakaoDB(authObj));
      },
      fail: function (err) {
        console.log(JSON.stringify(err));
      },
    });
  };

  return <Button onClick={handClick}>카카오로그인</Button>;
};

export default KakaoSignIn;
