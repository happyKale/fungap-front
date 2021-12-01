import React, { useEffect, useState } from 'react';
// redux
import apis from '@shared/apis';
import { useSelector } from 'react-redux';
// route
import { history } from '@redux/configureStore';
// components
import { Modal } from '@components';
// css
import style from './likeBtn.module.css';
// images
import unlikeImage from '@assets/icon/like_off.webp';
import likeImage from '@assets/icon/like_on.webp';

const LikeButton = ({ board_id, like_count, like_state, mode }) => {
  const isLogin = useSelector(state => state.user.is_login);
  const [likeCount, setLikeCount] = useState(null);
  const [likeState, setLikeState] = useState(null);
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const handleLikeButton = () => {
    if (!isLogin) {
      openModal();
      return false;
    }
    if (likeState === 'false') {
      setLikeCount(likeCount + 1);
      setLikeState('true');
    } else {
      setLikeCount(likeCount - 1);
      setLikeState('false');
    }

    if (mode === 'game') {
      apis.clickGameLikeButton(board_id);
    } else {
      apis.clikeLikeButton(board_id, { likeState });
    }
  };

  useEffect(() => {
    setLikeCount(like_count);
    setLikeState(like_state);
  }, [like_count, like_state]);

  return (
    <>
      <button className={style.heartButton} onClick={handleLikeButton}>
        <img
          className={style.heartImage}
          alt='하트이미지'
          src={likeState === 'false' ? unlikeImage : likeImage}
        />
        {likeCount}
      </button>
      {visible && (
        <Modal
          title='로그인하기'
          desc='좋아요는 로그인 해야만 쓸 수 있어요!'
          desc2='로그인 하루 가시겠어요?'
          btnLeft='닫기'
          btnRight='로그인 하러가기'
          visible={visible}
          maskClosable
          onClose={closeModal}
          clickBtnRight={() => history.push('/signin')}
        />
      )}
    </>
  );
};

export default LikeButton;
