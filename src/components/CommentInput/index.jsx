import React, { useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { commentActions } from '@redux/modules/comment';
// route
import { history } from '@redux/configureStore';
// components
import { Modal } from '@components';
// css
import style from './commentInput.module.css';
// images
import defaultImg from '@assets/background/profile_default.webp';

const CommentInput = ({ boardId, mode }) => {
  const dispatch = useDispatch();

  const isLogin = useSelector(state => state.user.is_login);
  const { user_image, nickname } =
    isLogin && JSON.parse(sessionStorage.getItem('user'));

  const [visible, setVisible] = useState(null);
  const [input, setInput] = useState({ comment: '' });
  const { comment } = input;

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });

    if (value.length >= 100) {
      alert('댓글 작성은 100글자 까지 가능합니다.');
      return false;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.tagName !== 'BUTTON') return false;
    if (!isLogin) {
      setVisible(!isLogin);
      setInput({ comment: '' });
      return false;
    }

    dispatch(commentActions.addCommentDB(boardId, comment, mode));
    setInput({ comment: '' });
  };

  const closeModal = () => setVisible(false);

  return (
    <div className={style.wrap}>
      <img
        className={style.img}
        src={user_image ? user_image : defaultImg}
        alt={nickname ? `${nickname}님의 프로필 이미지` : '기본 이미지'}
      />
      <form className={style.form} onClick={handleSubmit}>
        <label //
          className={style.label}
          htmlFor='comment'
        ></label>
        <input
          id='comment'
          name='comment'
          value={comment}
          className={style.input}
          type='text'
          placeholder={
            isLogin
              ? '댓글을 입력해주세요.'
              : '댓글은 로그인 후 이용 가능합니다.'
          }
          onChange={handleChange}
        />
        <button className={style.btn}>등록</button>
        <span className={style.limit}>{comment.length}/100</span>
      </form>
      {visible && (
        <Modal
          title='로그인하면 댓글쓰기가 가능해요!'
          desc='로그인하러 가시겠어요?'
          btnLeft='닫기'
          btnRight='로그인하기'
          visible={visible}
          maskClosable
          onClose={closeModal}
          clickBtnRight={() => history.replace('/signin')}
        />
      )}
    </div>
  );
};

export default CommentInput;
