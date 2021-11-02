import React, { useState } from 'react';

import style from './searchbar.module.css';

const SearchBar = prop => {
  //
  const [input, setInput] = useState({ search: '' });
  const { search } = input;

  const handleChange = e => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(search);
    setInput({
      search: '',
    });
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
