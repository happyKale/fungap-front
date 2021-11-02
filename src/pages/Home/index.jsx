import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postActions } from '../../redux/modules/post';
import { Post } from '../../components';
import style from './index.module.css';

const Home = props => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postList);

  const new4 = postList.slice(1, 5);
  const top4 = postList.slice(1, 5);

  const goSituationPage = () => {
    window.alert('상황별 페이지 이동');
  };
  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <React.Fragment>
      <p className={style.logo}>LOGO</p>
      <img
        className={style.banner}
        src='https://cdn.crowdpic.net/list-thumb/thumb_l_9420675A44EC073FDA8AF00F765B411B.jpg'
        alt='배너이미지'
      />
      <div className={style.titleContent}>
        <h2>새로나온 콘텐츠</h2>
        <span onClick={goSituationPage}>모두 보기</span>
      </div>
      <div className={style.grid}>
        {new4.map((post, index) => {
          return (
            <Post
              direction='column'
              board_image={post.board_image}
              board_title={post.board_title}
              view_count={post.view_count}
              comment_count={post.comment_count}
              like_count={post.like_count}
              key={index}
            />
          );
        })}
      </div>
      <div className={style.middleBanner}>
        <span>나와 맞는 MBTI궁합은?</span>
      </div>
      <div className={style.titleContent}>
        <h2>인기 콘텐츠</h2>
      </div>
      <div className={style.grid}>
        {top4.map((post, index) => {
          return (
            <Post
              direction='column'
              board_image={post.board_image}
              board_title={post.board_title}
              view_count={post.view_count}
              comment_count={post.comment_count}
              like_count={post.like_count}
              key={index}
            />
          );
        })}
      </div>
      <div className={style.bottomBanner}>
        <span>회원가입하고 더 많은 컨텐츠 보기</span>
      </div>
    </React.Fragment>
  );
};

export default Home;
