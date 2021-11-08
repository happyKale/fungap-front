import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postActions } from '../../redux/modules/post';

import style from './searchbar.module.css';

const SearchBar = prop => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ search: '' });
  const { search } = input;

  const handleChange = e => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });

    // 검색어 제거 시 전체 게시글 보여주기
    if (value === '') {
      dispatch(postActions.getPostDB());
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(postActions.searchPostDB(search));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className={style.inputWrap}>
        <label htmlFor='search'></label>
        <input
          name='search'
          value={search}
          id='search'
          type='text'
          placeholder='콘텐츠를 검색해보세요'
          onChange={handleChange}
        />
        <button className={style.searchIcon}>검색 버튼</button>
      </p>
    </form>
  );
};

export default SearchBar;
