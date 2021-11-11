import axios from 'axios';
import { getToken, setToken, delToken } from './token';

const instance = axios.create({
  baseURL: 'http://nyannyan.shop',
  // withCredentials: true,
});

instance.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['authorization'] = getToken() ? `Bearer ${getToken()}` : '';
  config.headers.Accept = 'application/json';
  return config;
});

const apis = {
  // 로그인
  signin: userinfo => instance.post('/user/signin', userinfo),
  signinKakao: token => instance.post('/user/signin/kakao', token),
  signinGoogle: token => instance.post('/user/signin/google', token),
  signinNaver: token => instance.post('/user/signin/naver', token),
  signup: userinfo => instance.post('/user/signup', userinfo),
  checkEmail: email => instance.post('/user/email_check', email),
  checkNickname: nickname => instance.post('/user/nickname_check', nickname),

  //게시물
  getHomePost: () => instance.get('/board/home'),
  getPost: () => instance.get('/board'),
  getMorePost: (sort, page) => instance.get(`/board?sort=${sort}&page=${page}`),
  getOroderPopularPost: page => instance.get(`/board/popularity?page=${page}`),
  getOrderViewPost: page => instance.get(`/board/view?page=${page}`),
  searchPost: keyword => instance.post(`/board/search?keyword=${keyword}`),

  // 게시물 - 관리자
  getPosts: () => instance.get('/admin/board'),
  addPost: board_info => instance.post('/admin/board/write', board_info),
  editPost: (board_id, board_info) =>
    instance.patch(`/admin/board/${board_id}/edit`, board_info),
  deletePost: board_id => instance.delete(`/admin/board/${board_id}/delete`),
  detailPost: board_id => instance.get(`/admin/board/${board_id}/detail`),

  //댓글
  getComment: board_id => instance.get(`/comment/${board_id}`),
  addComment: (board_id, comment) =>
    instance.post(`/comment/${board_id}`, comment),
  deleteComment: (board_id, comment_id) =>
    instance.delete(`/comment/${board_id}/${comment_id}`),
  editComment: (board_id, comment_id, comment) =>
    instance.patch(`/comment/${board_id}/${comment_id}`, comment),

  //마이페이지
  getUserInfo: () => instance.get('/mypage'),
  updateUserInfo: userInfo => instance.patch('/mypage/edit', userInfo),
  deleteUserInfo: () => instance.delete('/mypage/delete'),

  //좋아용
  clikeLikeButton: (board_id, like_state) =>
    instance.post(`/board/${board_id}/like`, like_state),
};

export default apis;
