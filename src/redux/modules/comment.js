import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '@shared/apis';

// action type
const SET_COMMENT = 'SET_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// action creator
const setComment = createAction(SET_COMMENT, comments => ({ comments }));
const delComment = createAction(DELETE_COMMENT, (comment_id, mode) => ({
  comment_id,
  mode,
}));
const editComment = createAction(EDIT_COMMENT, (comment_id, comment, mode) => ({
  comment_id,
  comment,
  mode,
}));

// middleware
const getCommentDB = (boardId, mode) => {
  return async (dispatch, getState, { history }) => {
    try {
      if (mode === 'game') {
        const response = await apis.getGameComment(boardId);
        const comments = response.data.comments;
        if (!response) return false;
        dispatch(setComment(comments));
      } else {
        const response = await apis.getComment(boardId);
        const comments = response.data.comments;

        if (!comments) return false;
        dispatch(setComment(comments));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const addCommentDB = (boardId, comment, mode) => {
  return async (dispatch, getState, { history }) => {
    const commentData = {
      comment,
    };

    try {
      if (mode === 'game') {
        const response = await apis.addGameComment(boardId, commentData);
        const comments = response.data.comments;

        dispatch(setComment(comments));
      } else {
        const response = await apis.addComment(boardId, commentData);
        const comments = response.data.comments;

        dispatch(setComment(comments));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const editCommentDB = (boardId, commentId, comment, mode) => {
  return async (dispatch, getState, { history }) => {
    const commentData = { comment };

    try {
      if (mode === 'game') {
        await apis.editGameComment(boardId, commentId, commentData);
      } else {
        await apis.editComment(boardId, commentId, commentData);
      }

      dispatch(editComment(commentId, commentData, mode));
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteCommentDB = (boardId, commentId, mode) => {
  return async (dispatch, getState, { history }) => {
    try {
      if (mode === 'game') {
        const response = await apis.deleteGameComment(boardId, commentId);
        const comment_id = parseInt(response.data.game_comment_id);
        dispatch(delComment(comment_id, mode));
      } else {
        const response = await apis.deleteComment(boardId, commentId);
        const comment_id = parseInt(response.data.comment_id);

        dispatch(delComment(comment_id, mode));
      }
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
        if (action.payload.mode === 'game') {
          draft.list = state.list.filter(item => {
            return item.game_comment_id !== action.payload.comment_id;
          });
        } else {
          draft.list = state.list.filter(item => {
            return item.comment_id !== action.payload.comment_id;
          });
        }
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, draft => {
        if (action.payload.mode === 'game') {
          const commentIdx = state.list.findIndex(item => {
            return item.game_comment_id === action.payload.comment_id;
          });
          const comment = { game_comment: action.payload.comment.comment };
          draft.list[commentIdx] = {
            ...state.list[commentIdx],
            ...comment,
          };
        } else {
          const commentIdx = state.list.findIndex(item => {
            return item.comment_id === action.payload.comment_id;
          });
          draft.list[commentIdx] = {
            ...state.list[commentIdx],
            ...action.payload.comment,
          };
        }
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
