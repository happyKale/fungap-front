import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';

// action type
const GET_POST = 'GET_POST';
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';
const ADD_IMAGE = 'ADD_IMAGE';
const RESET_POST = 'RESET_POST';
const RESET_EDIT_POST = 'RESET_EDIT_POST';
const SET_EDIT_POST = 'SET_EDIT_POST';
const ADD_EDIT_POST = 'ADD_EDIT_POST';

// action creator
const getPosts = createAction(GET_POST, posts => ({ posts }));
const setPosts = createAction(SET_POST, posts => ({ posts }));
const addPost = createAction(ADD_POST, (title, img, desc, mbti) => ({
  title,
  img,
  desc,
  mbti,
}));
const deletePost = createAction(DELETE_POST, posts => ({ posts }));
const editPost = createAction(EDIT_POST, (postId, post) => ({ postId, post }));
const addImage = createAction(ADD_IMAGE, image => ({ image }));
const resetPost = createAction(RESET_POST, () => ({}));
const resetEditPost = createAction(RESET_EDIT_POST, () => ({}));
const setEditPost = createAction(SET_EDIT_POST, postId => ({ postId }));
const addEditPost = createAction(ADD_EDIT_POST, (title, img, desc, mbti) => ({
  title,
  img,
  desc,
  mbti,
}));

// initial state
const initialState = {
  editPost: {
    board_title: '',
    board_image: '',
    board_desc: '',
    board_content: '',
  },
  postImg: '',
  post: {
    title: '',
    img: '',
    desc: '',
    mbti: '',
  },
  postList: [],
};

// middleware
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 메인페이지 포스트 가져오기');
    try {
      const response = await apis.getPost();
      const boardlistDB = response.data.board_list;

      dispatch(getPosts(boardlistDB));
    } catch (error) {
      console.log(error);
    }
  };
};

const getPopularPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getOroderPopularPost();
      const boardlistDB = response.data.board_list;

      dispatch(getPosts(boardlistDB));
    } catch (error) {
      console.log(error);
    }
  };
};

const getViewPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getOrderViewPost();
      const boardlistDB = response.data.board_list;

      dispatch(getPosts(boardlistDB));
    } catch (error) {
      console.log(error);
    }
  };
};

const addPostDB = () => {
  return (dispatch, getState, { history }) => {
    const post = getState().post.post;
    const image = getState().post.postImg;
    apis
      .addPost({
        board_title: post.title,
        board_desc: post.desc,
        board_image: image,
        board_content: post.mbti,
      })
      .then(res => {
        history.push('/admin');
        dispatch(resetPost());
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const deletePostDB = postId => {
  return (dispatch, getState, { history }) => {
    const postList = getState().post.postList;
    const resultList = postList.filter(post => post.board_id !== postId);

    apis
      .deletePost(postId)
      .then(res => {
        console.log(res);
        dispatch(deletePost(resultList));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const editPostDB = (
  postId,
  board_title,
  board_image,
  board_desc,
  board_content,
) => {
  return (dispatch, getState, { history }) => {
    const result = {
      board_title,
      board_image,
      board_desc,
      board_content,
    };
    apis
      .editPost(postId, result)
      .then(res => {
        dispatch(editPost(postId, result));
        history.push('/admin');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getAdminPostDB = () => {
  return (dispatch, getState, { history }) => {
    apis
      .getPosts()
      .then(res => {
        console.log('어드민 데이터 가져오기: ', res.data);
        dispatch(setPosts(res.data.board_list));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.posts;
      }),
    [SET_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.posts;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, draft => {
        draft.post.title = action.payload.title;
        draft.post.img = action.payload.img;
        draft.post.desc = action.payload.desc;
        draft.post.mbti = action.payload.mbti;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.posts;
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, draft => {
        let idx = draft.postList.findIndex(
          post => post.board_id == action.payload.postId,
        );
        draft.postList[idx] = {
          ...draft.postList[idx],
          ...action.payload.post,
        };
      }),
    [ADD_IMAGE]: (state, action) =>
      produce(state, draft => {
        draft.postImg = action.payload.image;
      }),
    [RESET_POST]: (state, action) =>
      produce(state, draft => {
        draft.post.title = '';
        draft.post.img = '';
        draft.post.desc = '';
        draft.post.mbti = '';
      }),
    [RESET_EDIT_POST]: (state, action) =>
      produce(state, draft => {
        draft.editPost.board_title = '';
        draft.editPost.board_image = '';
        draft.editPost.board_desc = '';
        draft.editPost.board_content = '';
      }),
    [SET_EDIT_POST]: (state, action) =>
      produce(state, draft => {
        let idx = draft.postList.findIndex(
          post => post.board_id == action.payload.postId,
        );
        draft.editPost = {
          ...draft.postList[idx],
        };
      }),
    [ADD_EDIT_POST]: (state, action) =>
      produce(state, draft => {
        draft.editPost.board_title = action.payload.title;
        draft.editPost.board_image = action.payload.img;
        draft.editPost.board_desc = action.payload.desc;
        draft.editPost.board_content = action.payload.mbti;
      }),
  },
  initialState,
);

export const postActions = {
  getPosts,
  getPopularPostDB,
  getViewPostDB,
  setPosts,
  editPost,
  addPost,
  addImage,
  resetPost,
  resetEditPost,
  setEditPost,
  addEditPost,
  getPostDB,
  addPostDB,
  deletePostDB,
  editPostDB,
  getAdminPostDB,
};
