import React, { useRef, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
// redux
import { useDispatch } from 'react-redux';
import { commentActions } from '@redux/modules/comment';
// components
import { MbtiTag, Modal } from '@components';
// icon
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// css
import style from './comment.module.css';
// images
import defatulImg from '@assets/profileplaceholder.png';

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
  const [isEditing, setIsEditing] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [visible, setVisible] = useState(null);
  if (mode === 'game') {
    comment = game_comment;
  }

  // 댓글 작성 분,시간,일 계산
  const timeFormat = moment(createdAt).fromNow();

  const userId =
    sessionStorage.getItem('user') &&
    JSON.parse(sessionStorage.getItem('user')).user_id;

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
    if (mode === 'game') {
      dispatch(commentActions.deleteCommentDB(game_id, game_comment_id, mode));
    } else {
      dispatch(commentActions.deleteCommentDB(board_id, comment_id, mode));
    }

    setVisible(false);
  };

  const toggleEditBox = () => {
    setEditBox(!editBox);
    setIsEditing(true);
  };
  const openModal = () => {
    if (isEditing) return false;
    setVisible(true);
  };
  const closeModal = () => setVisible(!visible);

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
        <span className={style.date}>{timeFormat}</span>
      </div>
      {/* 댓글 작성자에 한해서 댓글 수정/삭제 버튼 생성 */}
      {userId !== user_id ? null : (
        <div className={style.handleComment}>
          <DeleteIcon style={{ color: '#999999' }} onClick={openModal} />
          <EditIcon style={{ color: '#999999' }} onClick={toggleEditBox} />
        </div>
      )}
      {visible && (
        <Modal
          title='정말 댓글을 삭제하시겠어요?'
          desc='삭제 시 이전 댓글은 복구되지 않습니다.'
          btnLeft='닫기'
          btnRight='삭제하기'
          btnRightType='leave'
          visible={visible}
          maskClosable
          onClose={closeModal}
          clickBtnRight={deleteComment}
        />
      )}
    </li>
  );
};

export default Comment;
