import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '@shared/apis';

// action type
const GET_POST = 'GET_POST';
const SET_POST = 'SET_POST';
const SEARCH_POST = 'SEARCH_POST';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';
const ADD_IMAGE = 'ADD_IMAGE';
const RESET_POST = 'RESET_POST';
const RESET_EDIT_POST = 'RESET_EDIT_POST';
const SET_EDIT_POST = 'SET_EDIT_POST';
const ADD_EDIT_POST = 'ADD_EDIT_POST';

const SET_ALLCONTENT = 'SET_ALLCONTENT';

// action creator
const getPosts = createAction(GET_POST, posts => ({ posts }));
const setPosts = createAction(SET_POST, posts => ({ posts }));
const searchPost = createAction(SEARCH_POST, posts => ({ posts }));
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

const setAllContent = createAction(SET_ALLCONTENT, data => ({ data }));

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
  searchList: [],
};

// middleware
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getPost();
      const boardlistDB = response.data.board_list;

      dispatch(getPosts(boardlistDB));
    } catch (error) {
      console.log(error);

      if (error.response.status === 403) {
        alert('로그인 유지시간이 지났습니다. 다시 로그인해주세요.');
        history.push('/signin');
      }
    }
  };
};

const searchPostDB = word => {
  return async (dispatch, getState, { history }) => {
    const keyword = word.split(' ').join('+');

    try {
      const response = await apis.searchPost(keyword);
      const boardlistDB = response.data.search_board_list;

      if (boardlistDB.length === 0) {
        alert('검색 결과가 없습니다.');
      }
      dispatch(searchPost(boardlistDB));
    } catch (error) {
      console.log(error);
    }
  };
};

const addPostDB = () => {
  return async (dispatch, getState, { history }) => {
    const post = getState().post.post;
    const image = getState().post.postImg;

    const newPost = {
      board_title: post.title,
      board_desc: post.desc,
      board_image: image,
      board_content: post.mbti,
    };

    try {
      const response = await apis.addPost(newPost);

      response && dispatch(resetPost());
      history.push('/admin');
    } catch (error) {
      console.log(error);
    }
  };
};

const deletePostDB = postId => {
  return async (dispatch, getState, { history }) => {
    const postList = getState().post.postList;
    const delPost = postList.filter(post => post.board_id !== postId);

    try {
      const response = await apis.deletePost(postId);

      response && dispatch(deletePost(delPost));
    } catch (error) {
      console.log(error);
    }
  };
};

const editPostDB = (postId, data) => {
  return async (dispatch, getState, { history }) => {
    // console.log(postId, data);
    try {
      const response = await apis.updatePost(postId, data);

      response && dispatch(editPost(postId, data));
      history.push('/admin');
    } catch (error) {
      console.log(error);
    }
  };
};

const getAllContentDB = () => {
  return (dispatch, getState, { history }) => {
    apis
      .getAllContent()
      .then(res => {
        console.log(res.data);
        dispatch(setAllContent(res.data));
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
        draft.list = action.payload.posts;
      }),
    [SEARCH_POST]: (state, action) =>
      produce(state, draft => {
        draft.searchList = action.payload.posts;
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
          post => post.board_id === action.payload.postId,
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
          post => post.board_id === action.payload.postId,
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
    [SET_ALLCONTENT]: (state, action) =>
      produce(state, draft => {
        draft.allContent = action.payload.data;
      }),
  },
  initialState,
);

export const postActions = {
  getPosts,
  setPosts,
  searchPostDB,
  searchPost,
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
  getAllContentDB,
};
