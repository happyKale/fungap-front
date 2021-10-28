import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';

// action type
const SIGNUP = 'SIGNUP';

// action creator
const signup = createAction(SIGNUP, nickname => ({ nickname }));

// middleware
const isEmailDB = email => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 중복 이메일 체크', email);

    // try {
    //   const response = await apis.checkEmail(email);

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

const isNicknameDB = nickname => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 중복 닉네임 체크', nickname);

    // try {
    //   const response = await apis.checkEmail(nickname);

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

const signupDB = userinfo => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 회원가입', userinfo);

    const userData = {
      email: userinfo.email,
      nickname: userinfo.nickname,
      user_mbti: userinfo.mbti,
      password: userinfo.pwd,
      confirm_password: userinfo.pwdCheck,
    };

    try {
      await apis.signup(userData);

      history.push('/signin');
    } catch (error) {
      console.log(error);
    }
  };
};

const signinDB = (id, pwd) => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 로그인', id, pwd);

    const userData = {
      email: id,
      password: pwd,
    };

    try {
      const response = await apis.signin(userData);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

const signinKakaoDB = auth => {
  return async (dispatch, getState, { history }) => {
    const token = {
      access_token: auth.access_token,
    };

    console.log('DB 카카오 로그인', token);

    try {
      const response = await apis.signinKakao(token);

      console.log(response);
      // history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

const signinGoogleDB = auth => {
  return async (dispatch, getState, { history }) => {
    const token = {
      access_token: auth,
    };

    console.log('DB 구글 로그인', token);

    try {
      const response = await apis.signinGoogle(token);

      console.log(response);
      // history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

const signinNaverDB = auth => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 네이버 로그인', auth);

    try {
      const response = await apis.signinNaver(auth);

      console.log(response);
      // history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

// initial state
const initialState = {
  is_email: false,
  is_nickname: false,
  user: {},
};

// reducer
export default handleActions(
  {
    [SIGNUP]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

export const userActions = {
  isEmailDB,
  isNicknameDB,
  signupDB,
  signinDB,
  signinKakaoDB,
  signinNaverDB,
  signinGoogleDB,
};
