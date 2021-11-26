import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { commentActions } from '../../redux/modules/comment';
import style from './comment.module.css';
import { elapsedMin, elapsedHour, elapsedDate } from '../../shared/elapsed';
import MbtiTag from '../MbtiTag';
import { Modal } from '../../components';
import defatulImg from '../../assets/profileplaceholder.png';

const Comment = ({
  User,
  board_id,
  comment_id,
  comment,
  createdAt,
  mode,
  game_id,
  game_comment,
  game_comment_id,
}) => {
  const { nickname, user_image, user_mbti, user_id } = User;
  const dispatch = useDispatch();
  const newComment = useRef();
  const [editBox, setEditBox] = useState(false);
  const [visible, setVisible] = useState(null);
  if (mode === 'game') {
    comment = game_comment;
  }

  // 댓글 작성 분,시간,일 계산
  const min = elapsedMin(createdAt) < 0 ? 0 : elapsedMin(createdAt);
  const hour = elapsedHour(createdAt);
  const date = elapsedDate(createdAt);
  const elapsed =
    min < 60
      ? `${min === 0 ? '조금전' : `${min}분전`}`
      : hour < 24
      ? `${hour}시간전`
      : `${date}일전`;

  const userId =
    sessionStorage.getItem('user') &&
    JSON.parse(sessionStorage.getItem('user')).user_id;

  const toggleEditBox = () => {
    setEditBox(!editBox);
  };

  const editComment = e => {
    e.preventDefault();
    setEditBox(!editBox);

    if (mode === 'game') {
      dispatch(
        commentActions.editCommentDB(
          game_id,
          game_comment_id,
          newComment.current.value,
          mode,
        ),
      );
    } else {
      dispatch(
        commentActions.editCommentDB(
          board_id,
          comment_id,
          newComment.current.value,
          mode,
        ),
      );
    }
  };
  const deleteComment = () => {
    // 삭제 하기전에 modal 컴포넌트로 확인하고 삭제하기
    // modal 컴포넌트를 보이게 하고
    // modal clickBtnRight속성에 dispatch 실행시킴.
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <li className={style.item}>
      <div className={style.profileImg}>
        {user_image ? (
          <img src={user_image} alt='프로필사진' />
        ) : (
          <img src={defatulImg} alt='기본이미지' />
        )}
      </div>
      <div>
        <div className={style.userInfo}>
          <p className={style.nickname}>{nickname}</p>
          {/* {user_mbti && <span className={style.mbti}>{user_mbti}</span>} */}
          {user_mbti && <MbtiTag mbti={user_mbti}>{user_mbti}</MbtiTag>}
        </div>
        {editBox ? (
          <form className={style.editForm} onSubmit={editComment}>
            <textarea
              ref={newComment}
              name=''
              id=''
              rows='3'
              defaultValue={comment}
            ></textarea>
            <button>댓글수정</button>
          </form>
        ) : (
          <p className={style.desc}>{comment}</p>
        )}
        <span className={style.date}>{elapsed}</span>
      </div>
      {userId !== user_id ? null : (
        <div className={style.handleComment}>
          <DeleteIcon style={{ color: '#999999' }} onClick={deleteComment} />
          <EditIcon style={{ color: '#999999' }} onClick={toggleEditBox} />
        </div>
      )}
      {visible && (
        <Modal
          title='정말로 댓글을 삭제하시겠어요?'
          btnLeft='아니요'
          btnRight='예'
          clickBtnRight={() => {
            if (mode === 'game') {
              dispatch(
                commentActions.deleteCommentDB(game_id, game_comment_id, mode),
              );
            } else {
              dispatch(
                commentActions.deleteCommentDB(board_id, comment_id, mode),
              );
            }
            closeModal();
          }}
          visible={visible}
          maskClosable
          onClose={closeModal}
        />
      )}
    </li>
  );
};

export default Comment;
