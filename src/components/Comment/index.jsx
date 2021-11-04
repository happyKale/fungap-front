import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { commentActions } from '../../redux/modules/comment';
import style from './comment.module.css';
import { useSelector } from 'react-redux';

const Comment = ({ User, board_id, comment_id, comment }) => {
  const { nickname, user_id, user_image, user_mbti } = User;
  const dispatch = useDispatch();
  const newComment = useRef();
  const [editBox, setEditBox] = useState(false);

  const userNickname =
    sessionStorage.getItem('user') &&
    JSON.parse(sessionStorage.getItem('user')).nickname;

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
          <span className={style.mbti}>{user_mbti}</span>
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
        <span className={style.date}>2시간</span>
      </div>
      {userNickname !== nickname ? null : (
        <div className={style.handleComment}>
          <DeleteIcon onClick={deleteComment} />
          <EditIcon onClick={toggleEditBox} />
        </div>
      )}
    </li>
  );
};

export default Comment;
