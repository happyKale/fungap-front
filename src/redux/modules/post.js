import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';

// action type
const GET_POST = 'GET_POST';
const SET_POST = 'SET_POST';

// action creator
const getPosts = createAction(GET_POST, posts => ({ posts }));
const setPost = createAction(SET_POST, (title, img, desc, mbti) => ({
  title,
  img,
  desc,
  mbti,
}));

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
      title: '친구가 숙제 빌려달라고 했을 때 MBTI별 반응',
      image_url: 'https:t1.daumcdn.net/cfile/tistory/999B7336600CEE9E14',
      view_count: 3,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 2,
      title: '상사한테 혼났을때 MBTI별 반응',
      image_url:
        'http:cdn.thescoop.co.kr/news/photo/202108/51685_73885_957.jpg',
      view_count: 21,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 3,
      title: '여행갈 때 MBTI별 반응',
      image_url:
        'https://lh3.googleusercontent.com/proxy/0X0lgddwvbjvIIlOF95H1h2Jcj_MtxLyfMEDrtiZUgVOwo9j9UipUrgpybsSmEk4DQb0lBAayhJlB0oFeJpUMHbmKaXLyUbLCse91twwHDHpSUBXLQkrOmLGbsFX9dkUuujoKlEbqW4XLbTngzk',
      view_count: 10,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 4,
      title: '화장실 급할 때 MBTI별 반응',
      image_url:
        'https://image.shutterstock.com/image-illustration/personality-types-based-on-mbti-600w-1726335802.jpg',
      view_count: 21,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 5,
      title: '친구랑 싸울 때 MBTI별 반응',
      image_url:
        'https://image.shutterstock.com/image-illustration/personality-types-based-on-mbti-600w-1726335802.jpg',
      view_count: 12,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 6,
      title: '연락할 때 MBTI별 반응',
      image_url:
        'https://image.shutterstock.com/image-illustration/personality-types-based-on-mbti-600w-1726335802.jpg',
      view_count: 3,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 7,
      title: '배고플 때 MBTI별 반응',
      image_url:
        'https://image.shutterstock.com/image-illustration/personality-types-based-on-mbti-600w-1726335802.jpg',
      view_count: 9,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 8,
      title: '기분나쁠 때 MBTI별 반응',
      image_url:
        'https://image.shutterstock.com/image-illustration/personality-types-based-on-mbti-600w-1726335802.jpg',
      view_count: 19,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 9,
      title: '영화볼 때 MBTI별 반응',
      image_url:
        'https://image.shutterstock.com/image-illustration/personality-types-based-on-mbti-600w-1726335802.jpg',
      view_count: 2,
      comment_count: 10,
      heart_count: 12,
    },
    {
      board_id: 10,
      title: '퇴사할 때 MBTI별 반응',
      image_url:
        'https://image.shutterstock.com/image-illustration/personality-types-based-on-mbti-600w-1726335802.jpg',
      view_count: 0,
      comment_count: 10,
      heart_count: 12,
    },
  ],
};

// middleware
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    console.log('DB 메인페이지 포스트 가져오기');

    // try {
    //   const response = await apis.getPost();
    //   console.log(response);
    //   response.sort(function (a, b) {
    //     if (a.view_count < b.view_count) {
    //       return 1;
    //     }
    //     if (a.view_count > b.view.count) {
    //       return -1;
    //     }
    //     return 0;
    //   });
    //   dispatch(getPosts(response));
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

const setPostDB = (title, img, desc, mbti) => {
  return (dispatch, getState, { history }) => {
    dispatch(setPost(title, img, desc, mbti));
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
        draft.post.title = action.payload.title;
        draft.post.img = action.payload.img;
        draft.post.desc = action.payload.desc;
        draft.post.mbti = action.payload.mbti;
      }),
  },
  initialState,
);

export const postActions = {
  getPosts,
  getPostDB,
  setPostDB,
};
