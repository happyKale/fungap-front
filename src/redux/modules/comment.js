import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';

// action type
const GET_COMMENT = 'GET_COMMENT';
const Add_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// action creator
const getComment = createAction(GET_COMMENT, () => ({}));

// middleware
const getCommentDB = () => {
  return async (dispatch, getState, { history }) => {
    console.log('댓글 전체조회');
    // try {
    //   const response = await apis.checkEmail(email);

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

const addCommentDB = (boardId, comment) => {
  return async (dispatch, getState, { history }) => {
    console.log('댓글 추가', boardId, comment);
    // try {
    //   const response = await apis.checkEmail(email);

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

const editCommentDB = (boardId, commentId, comment) => {
  return async (dispatch, getState, { history }) => {
    console.log('댓글 수정', boardId, commentId, comment);
    // try {
    //   const response = await apis.checkEmail(email);

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

const deleteCommentDB = (boardId, commentId) => {
  return async (dispatch, getState, { history }) => {
    console.log('댓글 삭제', boardId, commentId);
    // try {
    //   const response = await apis.checkEmail(email);

    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

// initial state
const initialState = {
  list: [
    {
      comment: 'ㅎㅎㅎㅎㅎ',
      board_id: 1,
      comment_id: 1,
      User: {
        user_image: 'user_image',
        user_id: 1,
        user_mbti: 'ENFJ',
        nickname: '조성민',
      },
    },
    {
      comment: 'ㅋㅋㅋㅋㅋ',
      board_id: 2,
      comment_id: 1,
      User: {
        user_image: 'user_image',
        user_id: 2,
        user_mbti: 'ENFP',
        nickname: '모찌오빠',
      },
    },
    {
      comment: '2번 게시글 댓글',
      board_id: 2,
      comment_id: 2,
      User: {
        user_image: 'user_image',
        user_id: 2,
        user_mbti: 'ENFP',
        nickname: '모찌오빠',
      },
    },
    {
      comment: '테스트중입니다.',
      board_id: 3,
      comment_id: 3,
      User: {
        user_image: 'user_image',
        user_id: 3,
        user_mbti: 'INFJ',
        nickname: '테스트',
      },
    },
    {
      comment: '5조 화이팅',
      board_id: 4,
      comment_id: 4,
      User: {
        user_image: 'user_image',
        user_id: 4,
        user_mbti: 'INFP',
        nickname: '테스트2',
      },
    },
    {
      comment: '잘해봅시다',
      board_id: 5,
      comment_id: 5,
      User: {
        user_image: 'user_image',
        user_id: 5,
        user_mbti: 'ENFP',
        nickname: '테스트3',
      },
    },
  ],
};

// reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

export const commentActions = {
  getCommentDB,
  addCommentDB,
  editCommentDB,
  deleteCommentDB,
};
