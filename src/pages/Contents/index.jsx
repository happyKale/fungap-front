import React, { useEffect, useState } from 'react';
// components
import { Goback, MorePostList } from '@components';
// css
import style from './contents.module.css';
import usePostList from '@hook/usePostList';

const Contents = props => {
  const { postNums } = usePostList();
  const currentSort = sessionStorage.getItem('sort');
  const [sort, setSort] = useState(currentSort ? currentSort : 'date');

  const handleChange = e => {
    const { value } = e.target;

    if (value === 'date' || value === '') {
      setSort(value);
      sessionStorage.setItem('sort', value);
    }
    if (value === 'popularity') {
      setSort(value);
      sessionStorage.setItem('sort', value);
    }
    if (value === 'view') {
      setSort(value);
      sessionStorage.setItem('sort', value);
    }
  };

  return (
    <>
      <Goback>상황별 콘텐츠</Goback>
      <div className={style.wrapper}>
        <span className={style.commentCount}>{postNums}개의 게시글</span>
        <form className={style.sortWrap}>
          <label htmlFor='sort'>게시글 분류</label>
          <select //
            id='sort'
            defaultValue={currentSort}
            onChange={handleChange}
          >
            <option value='date'>최신순</option>
            <option value='popularity'>인기순</option>
            <option value='view'>조회순</option>
          </select>
        </form>
      </div>
      {sort === 'date' && <MorePostList sort='date' />}
      {sort === 'popularity' && <MorePostList sort='popularity' />}
      {sort === 'view' && <MorePostList sort='view' />}
    </>
  );
};

export default Contents;
