import axios from 'axios';
import { getToken, setToken, delToken } from './token';

const instance = axios.create({
  baseURL: 'https://stravinest.shop',
  // withCredentials: true,
});

instance.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['authorization'] = `Bearer ${getToken()}`;
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
  addPost: postinfo => instance.post('/admin/board/write', postinfo),
  editPost: board_id => instance.patch(`/admin/board/${board_id}/edit`),
  deletePost: board_id => instance.delete(`/admin/board/${board_id}/delete`),
  detailPost: board_id => instance.get(`/admin/board/${board_id}/detail`),
};

export default apis;
