import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';
import { setToken, delToken } from '../../shared/token';

// action type
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const UPDATE_USER = 'UPDATE_USER';
const SET_IMAGE = 'SET_IMAGE';
const CHECK_EMAIL = 'CHECK_EMAIL';
const CHECK_NICKNAME = 'CHECK_NICKNAME';

// action creator
const setUser = createAction(SET_USER, (token, user) => ({
  token,
  user,
}));
const logout = createAction(LOGOUT, user => ({ user }));
const updateUserInfo = createAction(UPDATE_USER, userinfo => ({ userinfo }));
const setUploadImage = createAction(SET_IMAGE, image => ({ image }));
const checkDuplEmail = createAction(CHECK_EMAIL, status => ({ status }));
const checkDuplNickname = createAction(CHECK_NICKNAME, status => ({
  status,
}));

// middleware
// 아이디(이메일) 중복 체크
const changePwdDB = (email, password) => {
  return async (dispatch, getState, { history }) => {
    console.log(email, password);

    const authData = { email, password };

    console.log(authData);

    try {
      const response = await apis.authPassword(authData);

      console.log(response);
      alert('비밀번호가 재설정 되었습니다.');
      history.replace('/signin_email');
    } catch (error) {
      alert('비밀번호 재설정에 실패하였습니다.');
      console.log(error);
    }
  };
};

const isEmailDB = email => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.checkEmail({ email });
      const isEmail = response.data.is_Email;
      console.log(response);
      response && console.log('중복된 아이디가 없습니다.');
      dispatch(checkDuplEmail(isEmail));
    } catch (error) {
      const isEmailMsg = error.response.data.errormessage;

      dispatch(checkDuplEmail(isEmailMsg));
    }
  };
};

// 닉네임 중복 체크
const isNicknameDB = nickname => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.checkNickname({ nickname });
      const isNickname = response.data.is_nickname;

      response && console.log('사용 가능한 닉네임입니다.');
      dispatch(checkDuplNickname(isNickname));
    } catch (error) {
      const isNicknameMsg = error.response.data.errormessage;

      dispatch(checkDuplNickname(isNicknameMsg));
    }
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
      const response = await apis.signup(userData);

      response && history.push('/signin');
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

const updateUserInfoDB = newinfo => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.updateUserInfo(newinfo);
      const oldUserinfo = getState().user.user;

      const newUserInfo = { ...oldUserinfo, ...response.data.user };

      dispatch(updateUserInfo(newUserInfo));
      history.push('/userpage');
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteUserInfoDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.deleteUserInfo();
      console.log(response);
      dispatch(userActions.logout());
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
};

// initial state
const initialState = {
  uploadImage: '',
  is_email: null,
  is_nickname: null,
  is_login: false,
  user: {},
  message: '',
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        setToken(JSON.stringify(action.payload.token));
        sessionStorage.setItem('user', JSON.stringify(action.payload.user));
        draft.is_login = true;
        draft.user = action.payload.user;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, draft => {
        delToken('token');
        sessionStorage.removeItem('user');
        draft.is_login = false;
      }),
    [UPDATE_USER]: (state, action) =>
      produce(state, draft => {
        sessionStorage.setItem('user', JSON.stringify(action.payload.userinfo));

        draft.user = action.payload.userinfo;
      }),
    [SET_IMAGE]: (state, action) =>
      produce(state, draft => {
        draft.uploadImage = action.payload.image;
      }),
    [CHECK_EMAIL]: (state, action) =>
      produce(state, draft => {
        draft.is_email = action.payload.status;
      }),
    [CHECK_NICKNAME]: (state, action) =>
      produce(state, draft => {
        draft.is_nickname = action.payload.status;
      }),
  },
  initialState,
);

export const userActions = {
  isEmailDB,
  isNicknameDB,
  changePwdDB,
  signupDB,
  signinDB,
  signinKakaoDB,
  signinNaverDB,
  signinGoogleDB,
  signinCheckDB,
  logout,
  setUploadImage,
  updateUserInfoDB,
  deleteUserInfoDB,
};
