import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';

// action type
const SET_COMMENT = 'SET_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// action creator
const setComment = createAction(SET_COMMENT, comments => ({ comments }));
const delComment = createAction(DELETE_COMMENT, comment_id => ({
  comment_id,
}));
const editComment = createAction(EDIT_COMMENT, (comment_id, comment) => ({
  comment_id,
  comment,
}));

// middleware
const getCommentDB = boardId => {
  return async (dispatch, getState, { history }) => {
    console.log('댓글 전체조회', boardId);

    try {
      const response = await apis.getComment(boardId);
      const comments = response.data.comments;

      dispatch(setComment(comments));
    } catch (error) {
      const errMessage = error.response.data.errormessage;
      console.log(errMessage);
    }
  };
};

const addCommentDB = (boardId, comment) => {
  return async (dispatch, getState, { history }) => {
    const commentData = {
      comment,
    };

    console.log('댓글 추가', boardId, commentData);

    try {
      const response = await apis.addComment(boardId, commentData);
      const comments = response.data.comments;

      dispatch(setComment(comments));
    } catch (error) {
      console.log(error);
    }
  };
};

const editCommentDB = (boardId, commentId, comment) => {
  return async (dispatch, getState, { history }) => {
    console.log('댓글 수정', boardId, commentId, comment);

    const commentData = { comment };

    try {
      await apis.editComment(boardId, commentId, commentData);

      dispatch(editComment(commentId, commentData));
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteCommentDB = (boardId, commentId) => {
  return async (dispatch, getState, { history }) => {
    console.log('댓글 삭제', boardId, commentId);

    try {
      const response = await apis.deleteComment(boardId, commentId);
      const comment_id = parseInt(response.data.comment_id);

      dispatch(delComment(comment_id));
    } catch (error) {
      console.log(error);
    }
  };
};

// initial state
const initialState = {
  list: [],
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.list = action.payload.comments;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.list = state.list.filter(item => {
          return item.comment_id !== action.payload.comment_id;
        });
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, draft => {
        const commentIdx = state.list.findIndex(item => {
          return item.comment_id === action.payload.comment_id;
        });
        draft.list[commentIdx] = {
          ...state.list[commentIdx],
          ...action.payload.comment,
        };
      }),
  },
  initialState,
);

export const commentActions = {
  getCommentDB,
  addCommentDB,
  editCommentDB,
  deleteCommentDB,
};
