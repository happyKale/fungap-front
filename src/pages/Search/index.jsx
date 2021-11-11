import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../../redux/configureStore';
import { postActions } from '../../redux/modules/post';
import { Post, Goback, SearchBar } from '../../components';
import style from './search.module.css';

const Search = props => {
  const dispatch = useDispatch();
  const is_searching = useSelector(state => state.post.is_searching);

  const searchList = useSelector(state => state.post.postList);
  const hotPostList = useSelector(state => state.post.topList);

  const top6 = hotPostList.slice(0, 6);
  const searchResult = searchList.slice(0, 6);

  useEffect(() => {
    dispatch(postActions.getPostDB());
    dispatch(postActions.getHomePostDB());
  }, []);

  return (
    <>
      <Goback page='/'>검색</Goback>
      <SearchBar />

      {searchList.length < '20' ? (
        <div className={style.grid}>
          {searchResult.map((post, index) => {
            return <Post direction='column' key={post.board_id} {...post} />;
          })}
        </div>
      ) : (
        <>
          <h3>펀캡 추천 검색어</h3>
          <div>
            <div
              className={style.recommendList}
              onClick={() => {
                history.push('/detail/21');
              }}
            >
              <div name='아이콘이미지' />
              <p>MBTI 유형별 내가 해리포터 캐릭터라면?</p>
            </div>
            <div
              className={style.recommendList}
              onClick={() => {
                history.push('/detail/12');
              }}
            >
              <div name='아이콘이미지' />
              <p>MBTI 유형별 반려견 추천</p>
            </div>
            <div
              className={style.recommendList}
              onClick={() => {
                history.push('/detail/19');
              }}
            >
              <div name='아이콘이미지' />
              <p>MBTI 유형별 무인도에 고립되었을 때</p>
            </div>
          </div>
          <div className={style.list4}>
            <div name='아이콘이미지' />
            <p>펀갭 서비스 런칭!</p>
          </div>
        </>
      )}

      <div
        className={style.banner}
        onClick={() => {
          history.push('/contents');
        }}
      >
        <h3>펀갭 콘텐츠 모두 보기</h3>
        <p>펀갭에 있는 재미있는 이야기를 모두 살펴보세요.</p>
      </div>
      <h2>인기 콘텐츠</h2>

      <div className={style.grid}>
        {top6.map((post, index) => {
          return <Post direction='column' key={post.board_id} {...post} />;
        })}
      </div>
    </>
  );
};

export default Search;
