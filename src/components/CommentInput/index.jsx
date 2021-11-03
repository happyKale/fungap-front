import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { commentActions } from '../../redux/modules/comment';
import { Modal } from '../';
import style from './commentInput.module.css';
import { history } from '../../redux/configureStore';

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
      {visible && (
        <Modal
          title='로그인'
          desc='댓글은 로그인 해야만 쓸 수 있어요!'
          desc2='로그인 하루 가시겠어요?'
          btnLeft='닫기'
          btnRight='로그인 하러가기'
          clickBtnRight={() => history.replace('/signin')}
          visible={visible}
          maskClosable
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default CommentInput;
