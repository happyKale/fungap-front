import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postActions } from '../../redux/modules/post';
import { Post, Goback, SearchBar } from '../../components';
import style from './search.module.css';

const Search = props => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postList);
  const is_searching = useSelector(state => state.post.is_searching);
  const top6 = postList.slice(0, 6);

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <>
      <Goback page='/'>검색</Goback>
      <SearchBar />
      <h3>펀캡 추천 검색어</h3>
      <ul>
        <li>
          <button>MBTI 유형별 궁합</button>
        </li>
        <li>
          <button>MBTI 유형별 반려견 추천</button>
        </li>
        <li>
          <button>MBTI 유형별 무인도에 고립되었을 때</button>
        </li>
      </ul>
      <p>펀갭 서비스 런칭!</p>
      <div>
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
