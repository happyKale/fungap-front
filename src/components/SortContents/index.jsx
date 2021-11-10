import React from 'react';
import { useDispatch } from 'react-redux';

import { postActions } from '../../redux/modules/post';
import style from './sortcontents.module.css';

const SortContents = props => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    // API 하나로 무한스크롤 (query이용)
    if (value === 'date' || value === '') {
      dispatch(postActions.getMorePostDB(value));
    }
    if (value === 'like') {
      dispatch(postActions.getMorePostDB(value));
    }
    if (value === 'view') {
      dispatch(postActions.getMorePostDB(value));
    }
  };

  return (
    <form className={style.sortWrap}>
      <label htmlFor='sort'>게시글 분류</label>
      <select //
        id='sort'
        onChange={handleChange}
      >
        <option value='date'>최신순</option>
        <option value='like'>인기순</option>
        <option value='view'>조회순</option>
      </select>
    </form>
  );
};

export default SortContents;
