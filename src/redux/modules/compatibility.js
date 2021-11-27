import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '@shared/apis';

//action type
const GET_RESULT = 'GET_RESULT';
const SET_MBTI = 'SET_MBTI';

//action creator
const getResult = createAction(GET_RESULT, result => ({ result }));
const setMbti = createAction(SET_MBTI, mbti => ({ mbti }));

//middleware
const getCompatibilityResultDB = info => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getTestResult(info);
      dispatch(setMbti(info));
      dispatch(getResult(response.data.mbti_test));
    } catch (error) {
      console.log(error);
    }
  };
};

//initial state
const initialState = {
  result: [],
  mbti: [],
};

//reducer
export default handleActions(
  {
    [GET_RESULT]: (state, action) =>
      produce(state, draft => {
        draft.result = action.payload.result;
      }),
    [SET_MBTI]: (state, action) =>
      produce(state, draft => {
        draft.mbti = action.payload.mbti;
      }),
  },
  initialState,
);

export const compatibilityActions = {
  getResult,
  getCompatibilityResultDB,
};
