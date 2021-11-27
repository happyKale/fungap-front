import axios from 'axios';
import { getToken } from './token';

const instance = axios.create({
  baseURL: 'https://stravinest.shop',
  withCredentials: true,
  // https://stravinest.shop,
  // http://nyannyan.shop
  // http://ozam.shop
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
  authEmail: email => instance.post('/auth/email', email),
  authPassword: data => instance.patch('/auth/password', data),

  //게시물
  getPost: () => instance.get('/board'),
  getMorePost: (sort, page) => instance.get(`/board?sort=${sort}&page=${page}`),
  getHomePost: () => instance.get('/board/home'),
  getDetailPost: board_id => instance.get(`/board/${board_id}`),
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

  //궁합 페이지
  getTestResult: info => instance.post('/mbti/test', info),

  // 게임
  getGames: () => instance.get('/games'),
  getGame: game_id => instance.get(`/games/${game_id}`),
  addGame: game => instance.post('/games/write', game),
  editGame: (game_id, game) => instance.patch(`/games/${game_id}/edit`, game),
  deleteGame: game_id => instance.delete(`/games/${game_id}/delete`),
  participateGame: (game_id, game_quest) =>
    instance.post(`/games/${game_id}`, game_quest),
  clickGameLikeButton: game_id => instance.post(`/games/${game_id}/like`),
  getGameComment: game_id => instance.get(`/games/${game_id}/comment`),
  addGameComment: (game_id, comment) =>
    instance.post(`/games/${game_id}/comment`, comment),
  deleteGameComment: (game_id, game_comment_id) =>
    instance.delete(`/games/${game_id}/comment/${game_comment_id}`),
  editGameComment: (game_id, game_comment_id, comment) =>
    instance.patch(`/games/${game_id}/comment/${game_comment_id}`, comment),
  getOrderPopularGame: () => instance.get(`/games/popularity`),
  getOrderViewGame: () => instance.get(`/games/view`),

  // 둘러보기 페이지
  getAllContent: () => instance.get('/allcontent'),
};

export default apis;
