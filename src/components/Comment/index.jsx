import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { commentActions } from '../../redux/modules/comment';
import style from './comment.module.css';

const Comment = ({ User, board_id, comment_id, comment }) => {
  const { nickname, user_id, user_image, user_mbti } = User;
  const dispatch = useDispatch();

  const editComment = () => {
    dispatch(commentActions.editCommentDB(board_id, comment_id, comment));
  };
  const deleteComment = () => {
    dispatch(commentActions.deleteCommentDB(board_id, comment_id));
  };

  return (
    <li className={style.comment}>
      <div className={style.profileImg}>
        {/* {user_image} */}
        <img src='http://placehold.it/40x40' alt='임시' />
      </div>
      <div className={style.user}>
        <div className={style.userInfo}>
          <p className={style.nickname}>{nickname}</p>
          <span className={style.mbti}>{user_mbti}</span>
        </div>
        <p className={style.desc}>{comment}</p>
        <span className={style.date}>2시간</span>
      </div>
      <div className={style.handleComment}>
        <DeleteIcon onClick={editComment} />
        <EditIcon onClick={deleteComment} />
      </div>
    </li>
  );
};

export default Comment;
