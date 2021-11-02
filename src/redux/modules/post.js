import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';
import { FlareSharp } from '@mui/icons-material';

// action type
const GET_POST = 'GET_POST';
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';

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

// initial state
const initialState = {
  post: {
    title: '',
    img: '',
    desc: '',
    mbti: '',
  },
  postList: [
    {
      board_id: 1,
      board_title: '친구가 숙제 빌려달라고 했을 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'https://image.edaily.co.kr/images/Photo/files/NP/S/2021/07/PS21073100154.jpg',
      view_count: 3,
      comment_count: 5,
      like_count: 12,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 2,
      board_title: '상사한테 혼났을때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'https://youimg1.tripcdn.com/target/100m1f000001gzon8658E.jpg?proc=source%2Ftrip',
      view_count: 21,
      comment_count: 55,
      like_count: 100,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 3,
      board_title: '여행갈 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'http://san.chosun.com/site/data/img_dir/2019/04/24/2019042401956_0.jpg',
      view_count: 10,
      comment_count: 52,
      like_count: 120,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 4,
      board_title: '화장실 급할 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image: 'http://www.bonhd.net/news/photo/202101/11490_33496_554.jpg',
      view_count: 21,
      comment_count: 15,
      like_count: 9,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 5,
      board_title: '친구랑 싸울 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'https://newsimg.hankookilbo.com/cms/articlerelease/2021/04/23/6ab95831-7075-4b6f-92b6-c04bd3d95a91.jpg',
      view_count: 12,
      comment_count: 10,
      like_count: 94,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 6,
      board_title: '연락할 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/LhotseMountain.jos.500pix.jpg',
      view_count: 3,
      comment_count: 12,
      like_count: 96,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 7,
      board_title: '배고플 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'https://image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Genie_Magazine/2713/Mgz_Main_Top_20161114135623.jpg',
      view_count: 9,
      comment_count: 11,
      like_count: 75,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 8,
      board_title: '기분나쁠 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4e/LhotseMountain.jos.500pix.jpg',
      view_count: 19,
      comment_count: 6,
      like_count: 55,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 9,
      board_title: '영화볼 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'https://cdn.mkhealth.co.kr/news/photo/202108/54607_56591_5215.jpg',
      view_count: 2,
      comment_count: 3,
      like_count: 46,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
    {
      board_id: 10,
      board_title: '퇴사할 때 MBTI별 반응',
      board_desc: '설명이다~~~',
      board_image:
        'https://cdn.crowdpic.net/list-thumb/thumb_l_9420675A44EC073FDA8AF00F765B411B.jpg',
      view_count: 0,
      comment_count: 98,
      like_count: 19,
      like_state: 'false',
      board_content: {
        enfp: '언제 끝나냐규',
        entp: 'ggg',
        infp: '가능하니이거',
        infj: 'hi hello',
        intp: 'ㅠㅠ',
        intj: '선호야 미안하다...',
        isfp: '사람이 참 간사하다',
        isfj: '언제쯤',
        istp: '철이 들까',
        istj: '하루하루',
        enfj: 'enfj',
        entj: '그만',
        esfp: '초코',
        esfj: '곱창',
        estp: '쭈꾸미',
        estj: '제발',
      },
    },
  ],
};

// middleware
const getPostDB = isSort => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 메인페이지 포스트 가져오기', isSort);
    // if (isSort) {
    //   try {
    //     const response = await apis.getPost();
    //     console.log(response);
    //     if (isSort) {
    //       response.sort(function (a, b) {
    //         if (a.view_count < b.view_count) {
    //           return 1;
    //         }
    //         if (a.view_count > b.view.count) {
    //           return -1;
    //         }
    //         return 0;
    //       });
    //     }
    //     dispatch(getPosts(response));
    //   } catch (error) {
    //     console.log(error);
    //   }

    // }
  };
};

const addPostDB = () => {
  return (dispatch, getState, { history }) => {
    const post = getState().post.post;
    apis
      .addPost({
        board_title: post.title,
        board_desc: post.desc,
        board_image: post.img,
        board_content: post.mbti,
      })
      .then(
        apis
          .getPosts()
          .then(res => {
            dispatch(setPosts(res.board_list));
          })
          .then(() => {
            history.push('/');
          }),
      )
      .catch(error => {
        console.log(error);
      });
  };
};

const deletePostDB = postId => {
  return (dispatch, getState, { history }) => {
    const postList = getState().post.postList;
    const resultList = postList.filter(post => post.board_id !== postId);
    dispatch(deletePost(resultList));
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
    dispatch(editPost(postId, result));
    history.push('/admin');
  };
};
const getAdminPostDB = () => {
  return (dispatch, getState, { history }) => {
    apis.getPosts().then(res => {
      console.log('어드민 데이터 가져오기: ', res.data);
    });
  };
};

// reducer
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        // draft.postList = action.payload.posts;
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
  },
  initialState,
);

export const postActions = {
  getPosts,
  setPosts,
  editPost,
  addPost,
  getPostDB,
  addPostDB,
  deletePostDB,
  editPostDB,
  getAdminPostDB,
};
