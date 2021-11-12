import React from 'react';
import { useSelector } from 'react-redux';

import { Goback, PostList, SearchBar, SortContents } from '../../components';
import style from './contents.module.css';

const Contents = props => {
  const postList = useSelector(state => state.post.postList);

  return (
    <>
      <Goback page='/'>상황별 콘텐츠</Goback>
      <SearchBar />
      <div className={style.wrapper}>
        <span className={style.commentCount}>{postList.length}개의 게시글</span>
        <SortContents />
      </div>
      <PostList />
    </>
  );
};

export default Contents;
