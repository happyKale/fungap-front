import React, { useState } from 'react';

import style from './sortcontents.module.css';

const SortContents = props => {
  const [input, setInput] = useState({ sort: '' });
  const { sort } = input;

  const handleChange = e => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
  console.log(`${sort}로 게시글 정렬!`);

  return (
    <form className={style.sortWrap}>
      <label htmlFor='sort'>게시글 분류</label>
      <select //
        name='sort'
        id='sort'
        onChange={handleChange}
      >
        <option value='date'>최신순</option>
        <option value='view'>조회수</option>
        <option value='comment'>댓글순</option>
      </select>
    </form>
  );
};

export default SortContents;
