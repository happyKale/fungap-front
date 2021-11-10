import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';

// action type
const GET_POST = 'GET_POST';
const SET_POST = 'SET_POST';
const SET_HOME_POST = 'SET_HOME_POST';
const SEARCH_POST = 'SEARCH_POST';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';
const ADD_IMAGE = 'ADD_IMAGE';
const RESET_POST = 'RESET_POST';
const RESET_EDIT_POST = 'RESET_EDIT_POST';
const SET_EDIT_POST = 'SET_EDIT_POST';
const ADD_EDIT_POST = 'ADD_EDIT_POST';
const GET_MORE_POST = 'GET_MORE_POST';
const SET_LOADING = 'SET_LOADING';
const CLEAR_LIST = 'CLEAR_LIST';

// action creator
const getPosts = createAction(GET_POST, posts => ({ posts }));
const setPosts = createAction(SET_POST, posts => ({ posts }));
const setHomePosts = createAction(SET_HOME_POST, (new_posts, top_posts) => ({
  new_posts,
  top_posts,
}));
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
const getMorePost = createAction(
  GET_MORE_POST,
  (posts, hasMore, page, sort) => ({
    posts,
    hasMore,
    page,
    sort,
  }),
);
const setLoading = createAction(SET_LOADING, isLoading => ({ isLoading }));
const clearList = createAction(CLEAR_LIST, () => ({}));

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
  newList: [],
  topList: [],
  isSearching: false,
  sort: 'date',
  list: [],
  start: 1,
  isLoading: false,
  hasMore: true,
};

// middleware
const getMorePostDB = sort => {
  return async (dispatch, getState, { history }) => {
    let _start = getState().post.start;

    dispatch(setLoading(true));
    if (_start === 1) {
      dispatch(clearList());
    }

    // 최신순 무한스크롤
    if (sort === 'date') {
      try {
        const response = await apis.getMorePost(sort, _start);
        const boardlistDB = response.data.board_list;
        const hasMore = boardlistDB.length !== 0 ? true : false;
        const next = boardlistDB.length !== 0 ? _start + 1 : 1;

        dispatch(getMorePost(boardlistDB, hasMore, next, sort));
      } catch (error) {
        console.log(error);
      }
    }
    // 인기순 무한스크롤
    if (sort === 'like') {
      try {
        const response = await apis.getMorePost('popularity', _start);
        const boardlistDB = response.data.board_list;
        const hasMore = boardlistDB.length !== 0 ? true : false;
        const next = boardlistDB.length !== 0 ? _start + 1 : 1;

        dispatch(getMorePost(boardlistDB, hasMore, next, sort));
      } catch (error) {
        console.log(error);
      }
    }
    // // 조회순 무한스크롤
    if (sort === 'view') {
      try {
        const response = await apis.getMorePost(sort, _start);
        const boardlistDB = response.data.board_list;
        const hasMore = boardlistDB.length !== 0 ? true : false;
        const next = boardlistDB.length !== 0 ? _start + 1 : 1;

        dispatch(getMorePost(boardlistDB, hasMore, next, sort));
      } catch (error) {
        console.log(error);
      }
    }
  };
};

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

const getHomePostDB = () => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 메인페이지 포스트 가져오기');
    try {
      const response = await apis.getHomePost();
      const new_list = response.data.new_board_list;
      const popularity_list = response.data.popularity_board_list;

      dispatch(setHomePosts(new_list, popularity_list));
    } catch (error) {
      console.log(error);
    }
  };
};

const getPopularPostDB = page => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getOroderPopularPost(page);
      const boardlistDB = response.data.board_list;
      const boardList = boardlistDB.sort((a, b) => {
        if (a.view_count > b.view_count) {
          return -1;
        }
        if (a.view_count < b.view_count) {
          return 1;
        }
        return 0;
      });

      dispatch(getMorePost(boardList, 'like'));
    } catch (error) {
      console.log(error);
    }
  };
};

const getViewPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getPost();
      const boardlistDB = response.data.board_list;
      const boardList = boardlistDB.sort((a, b) => {
        if (a.view_count > b.view_count) {
          return -1;
        }
        if (a.view_count < b.view_count) {
          return 1;
        }
        return 0;
      });

      dispatch(getPosts(boardList, 'view'));
    } catch (error) {
      console.log(error);
    }
  };
};

const searchPostDB = word => {
  return async (dispatch, getState, { history }) => {
    const keyword = word.replace(' ', '+');

    try {
      const response = await apis.searchPost(keyword);
      const boardlistDB = response.data.search_board_list;

      dispatch(searchPost(boardlistDB));
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
    [CLEAR_LIST]: (state, action) =>
      produce(state, draft => {
        draft.list = [];
      }),
    [SET_LOADING]: (state, action) =>
      produce(state, draft => {
        draft.isLoading = action.payload.isLoading;
      }),
    //
    [GET_MORE_POST]: (state, action) =>
      produce(state, draft => {
        draft.list.push(...action.payload.posts);
        draft.start = action.payload.page;
        draft.hasMore = action.payload.hasMore;
        draft.sort = action.payload.sort;
        draft.isLoading = false;
      }),
    //
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.posts;
      }),
    [SET_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.posts;
      }),
    [SET_HOME_POST]: (state, action) =>
      produce(state, draft => {
        draft.newList = action.payload.new_posts;
        draft.topList = action.payload.top_posts;
      }),
    [SEARCH_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.posts;
        draft.isSearching = true;
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
  },
  initialState,
);

export const postActions = {
  getPosts,
  getHomePostDB,
  getPopularPostDB,
  getViewPostDB,
  setPosts,
  searchPostDB,
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
  getMorePostDB,
};
