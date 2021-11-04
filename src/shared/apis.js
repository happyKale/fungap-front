import axios from 'axios';
import { getToken, setToken, delToken } from './token';

const instance = axios.create({
  baseURL: 'https://stravinest.shop',
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
  getPost: () => instance.get('/board'),
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
};

export default apis;
