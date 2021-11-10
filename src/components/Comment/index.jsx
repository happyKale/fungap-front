import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { commentActions } from '../../redux/modules/comment';
import style from './comment.module.css';
import { elapsedMin, elapsedHour, elapsedDate } from '../../shared/elapsed';

const Comment = ({ User, board_id, comment_id, comment, createdAt }) => {
  const { nickname, user_image, user_mbti, user_id } = User;
  const dispatch = useDispatch();
  const newComment = useRef();
  const [editBox, setEditBox] = useState(false);

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

    dispatch(
      commentActions.editCommentDB(
        board_id,
        comment_id,
        newComment.current.value,
      ),
    );
  };
  const deleteComment = () => {
    dispatch(commentActions.deleteCommentDB(board_id, comment_id));
  };

  return (
    <li className={style.comment}>
      <div className={style.profileImg}>
        {user_image ? (
          <img src={user_image} alt='임시' />
        ) : (
          <img src='http://placehold.it/40x40' alt='임시' />
        )}
      </div>
      <div className={style.user}>
        <div className={style.userInfo}>
          <p className={style.nickname}>{nickname}</p>
          {user_mbti && <span className={style.mbti}>{user_mbti}</span>}
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
          <DeleteIcon onClick={deleteComment} />
          <EditIcon onClick={toggleEditBox} />
        </div>
      )}
    </li>
  );
};

export default Comment;
