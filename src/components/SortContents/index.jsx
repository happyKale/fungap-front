import React from 'react';
// redux
import { useDispatch } from 'react-redux';
import { postActions } from '@redux/modules/post';
// css
import style from './sortContents.module.css';

const SortContents = ({ mode }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    if (value === 'date') {
      dispatch(postActions.getPostDB());
    }
    if (value === 'like') {
      dispatch(postActions.getPopularPostDB());
    }
    if (value === 'view') {
      dispatch(postActions.getViewPostDB());
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
