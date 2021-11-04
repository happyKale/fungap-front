import React from 'react';

import { Goback, PostList, SearchBar, SortContents } from '../../components';
import style from './contents.module.css';

const Contents = props => {
  return (
    <>
      <Goback page='/'>상황별 콘텐츠</Goback>
      <SearchBar />
      <div className={style.wrapper}>
        <span className={style.commentCount}>16개의 게시글</span>
        <SortContents />
      </div>
      <PostList />
    </>
  );
};

export default Contents;
