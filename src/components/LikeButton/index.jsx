import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import apis from '../../shared/apis';
import { history } from '../../redux/configureStore';
import { Modal } from '../../components';
import style from './likebutton.module.css';
import unlikeImage from '../../assets/heart.png';
import likeImage from '../../assets/heart_pink.png';

const LikeButton = props => {
  const status = props.post ? true : false;
  const postId = props?.board_id;
  const isLogin = useSelector(state => state.user.is_login);
  const mode = props?.mode;

  const [likeCount, setLikeCount] = useState(null);
  const [likeState, setLikeState] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setLikeCount(props?.like_count);
    setLikeState(props?.like_state);
  }, [props]);

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
      if (mode === 'game') {
        apis.clickGameLikeButton(postId);
      } else {
        apis.clikeLikeButton(postId, { likeState });
      }
    } else {
      openModal();
    }
  };

  return (
    <>
      <button
        className={status ? style.postHeartButton : style.heartButton}
        onClick={clickLikeButton}
      >
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
