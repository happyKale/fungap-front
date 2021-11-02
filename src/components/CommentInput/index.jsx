import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { commentActions } from '../../redux/modules/comment';
import style from './commentInput.module.css';

const CommentInput = props => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ comment: '' });
  const { comment } = input;
  //
  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(commentActions.addCommentDB(1, comment));
    setInput({
      comment: '',
    });
  };

  return (
    <form //
      className={style.inputWrap}
      onClick={handleSubmit}
    >
      <label //
        className={style.label}
        htmlFor=''
      ></label>
      <input //
        name='comment'
        value={comment}
        className={style.input}
        type='text'
        placeholder='댓글을 입력해주세요.'
        onChange={handleChange}
      />
      <button className={style.write}>작성</button>
    </form>
  );
};

export default CommentInput;
