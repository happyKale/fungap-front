import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../../redux/configureStore';
import { postActions } from '../../redux/modules/post';
import { Post, Carousel } from '../../components';
import style from './home.module.css';

const Home = props => {
  const dispatch = useDispatch();
  const newPostList = useSelector(state => state.post.newList);
  const topPostList = useSelector(state => state.post.topList);
  const new4 = newPostList.slice(0, 4);
  const top4 = topPostList.slice(0, 4);

  const goContentsPage = () => {
    history.push('/contents');
  };
  useEffect(() => {
    dispatch(postActions.getHomePostDB());
  }, []);

  return (
    <React.Fragment>
      <div className={style.header}>
        <div className={style.logo} />
        <div className={style.icon}>
          <div
            className={style.searchIcon}
            onClick={() => {
              history.push('/search');
            }}
          />
          <div className={style.alramIcon} />
        </div>
      </div>

      <Carousel />

      <div className={style.titleContent}>
        <h2>새로나온 콘텐츠</h2>
        <span onClick={goContentsPage}>모두 보기</span>
      </div>
      <div className={style.grid}>
        {new4.map((post, index) => {
          return <Post key={post.board_id} direction='column' {...post} />;
        })}
        <div
          className={style.middleBanner}
          onClick={() => {
            history.push('/compatibility');
          }}
        />
      </div>

      <div className={style.titleContent}>
        <h2>인기 콘텐츠</h2>
      </div>
      <div className={style.grid}>
        {top4.map((post, index) => {
          return <Post direction='column' key={post.board_id} {...post} />;
        })}
        <div
          className={style.bottomBanner}
          onClick={() => {
            history.push('/signin');
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
