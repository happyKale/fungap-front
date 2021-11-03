import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { commentActions } from '../../redux/modules/comment';
import { Modal } from '../';
import style from './commentInput.module.css';

const CommentInput = props => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState({ comment: '' });
  const { comment } = input;
  const isLogin = false;
  //
  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.tagName !== 'BUTTON') {
      return false;
    }

    if (!isLogin) {
      setVisible(true);

      return false;
    }

    dispatch(commentActions.addCommentDB(1, comment));
    setInput({
      comment: '',
    });
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
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
      {visible && <Modal visible={visible} maskClosable onClose={closeModal} />}
    </>
  );
};

export default CommentInput;
