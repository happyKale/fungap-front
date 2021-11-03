import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';
import { setToken, getToken, delToken } from '../../shared/token';
import { FastRewindOutlined } from '@mui/icons-material';

// action type
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

// action creator
const setUser = createAction(SET_USER, (token, user) => ({
  token,
  user,
}));
const logout = createAction(LOGOUT, user => ({ user }));

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
      const _token = response.data.token;
      const user = response.data.user;

      dispatch(setUser(_token, user));
      history.push('/');
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
      const _token = response.data.token;
      const user = response.data.user;

      dispatch(setUser(_token, user));
      history.push('/');
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
      const _token = response.data.token;
      const user = response.data.user;

      dispatch(setUser(_token, user));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

const signinNaverDB = auth => {
  return async (dispatch, getState, { history }) => {
    const token = {
      access_token: auth,
    };

    console.log('DB 네이버 로그인', token);

    if (!auth) return false;

    try {
      const response = await apis.signinNaver(token);
      const _token = response.data.token;
      const user = response.data.user;

      dispatch(setUser(_token, user));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

const signinCheckDB = () => {
  return (dispatch, getState, { history }) => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (!token || !user) return false;

    dispatch(setUser(token, user));
  };
};

// initial state
const initialState = {
  is_email: false,
  is_nickname: false,
  is_login: false,
  user: {},
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        setToken(JSON.stringify(action.payload.token));
        sessionStorage.setItem('user', JSON.stringify(action.payload.user));
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, draft => {
        delToken('token');
        sessionStorage.removeItem('user');
        draft.is_login = false;
      }),
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
  signinCheckDB,
  logout,
};
