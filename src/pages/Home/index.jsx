import React from 'react';
// route
import { history } from '@redux/configureStore';
// components
import {
  Header,
  SliderBanner,
  NewContents,
  TopContents,
  Banner,
} from '@components';
// customhook
import usePostList from '@hook/usePostList';
// css
import style from './home.module.css';

const Home = props => {
  const { postList } = usePostList();
  const goContentsPage = () => history.push('/contents');

  return (
    <>
      <Header />
      <SliderBanner />

      <div className={style.subTitle}>
        <h2>새로나온 콘텐츠</h2>
        <span onClick={goContentsPage}>모두 보기</span>
      </div>
      <div className={style.grid}>
        <NewContents //
          postList={postList}
          leng='4'
        />
      </div>
      <Banner page='/mbti/test' image='middleBanner' />

      <div className={style.subTitle}>
        <h2>인기 콘텐츠</h2>
      </div>
      <div className={style.grid}>
        <TopContents //
          postList={postList}
          leng='4'
        />
      </div>
      <Banner page='/signin' image='bottomBanner' />
    </>
  );
};

export default Home;
