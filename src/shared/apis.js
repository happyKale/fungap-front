import axios from 'axios';
import { getToken, setToken, delToken } from './token';

const instance = axios.create({
  baseURL: 'http://3.36.105.156',
  // withCredentials: true,
});

instance.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['authorization'] = getToken();
  config.headers.Accept = 'application/json';
  return config;
});

const apis = {
  // 로그인
  signin: userinfo => instance.post('/user/signin', userinfo),
  signinKakao: token => instance.post('/user/signin/kakao', token),
  signup: userinfo => instance.post('/user/signup', userinfo),
  checkEmail: email => instance.post('/user/email_check', email),
  checkNickname: nickname => instance.post('/user/nickname_check', nickname),
  signinNaver: token => instance.post('/user/signin/naver', token),

  //게시물
  getPost: () => instance.get('/board'),
};

export default apis;
