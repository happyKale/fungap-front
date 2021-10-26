import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';

// action type
const GET_POST = 'GET_POST';

// action creator
const getposts = createAction(GET_POST, posts => ({ posts }));

// middleware

// initial state
const initialState = {};

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        draft.post_list = action.payload.posts;
      }),
  },
  initialState,
);

export const postActions = {
  getposts,
};
