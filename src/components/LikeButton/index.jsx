import React, { useState } from 'react';
import style from './likebutton.module.css';
import likeImage from '../../assets/heart.png';
import unlikeImage from '../../assets/heart_pink.png';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../components';
import { history } from '../../redux/configureStore';
import apis from '../../shared/apis';

const LikeButton = props => {
  const postId = props.board_id;
  const isLogin = useSelector(state => state.user.is_login);

  const [likeCount, setLikeCount] = useState(props.like_count);
  const [likeState, setLikeState] = useState(props.like_state);
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  const clickLikeButton = () => {
    if (isLogin == true) {
      if (likeState === 'false') {
        setLikeCount(likeCount + 1);
        setLikeState('true');
      } else {
        setLikeCount(likeCount - 1);
        setLikeState('false');
      }
      apis.clikeLikeButton(postId, { likeState });
    } else {
      openModal();
    }
  };

  return (
    <>
      <button className={style.heartButton} onClick={clickLikeButton}>
        <img
          className={style.heartImage}
          alt='하트이미지'
          src={likeState === 'false' ? likeImage : unlikeImage}
        />
        {likeCount}
      </button>
      {visible && (
        <Modal
          title='로그인하기'
          visible={visible}
          desc='좋아요는 로그인 해야만 쓸 수 있어요!'
          desc2='로그인 하루 가시겠어요?'
          onClose={closeModal}
          btnLeft='닫기'
          btnRight='로그인 하러가기'
          clickBtnRight={() => {
            history.push('/signin');
          }}
        />
      )}
    </>
  );
};

export default LikeButton;
