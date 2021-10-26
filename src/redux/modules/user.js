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

    // try {
    //   const response = await apis.signup(userinfo);

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
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
};
