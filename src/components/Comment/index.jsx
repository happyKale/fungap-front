import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import style from './comment.module.css';

const Comment = props => {
  const editComment = () => {
    console.log('수정버튼 클릭');
  };
  const deleteComment = () => {
    console.log('삭제버튼 클릭');
  };

  return (
    <li className={style.comment}>
      <div className={style.profileImg}>
        <img src='http://placehold.it/40x40' alt='임시' />
      </div>
      <div className={style.user}>
        <div className={style.userInfo}>
          <p className={style.nickname}>조성민</p>
          <span className={style.mbti}>ENFJ</span>
        </div>
        <p className={style.desc}>
          왘ㅋㅋㅋ 진짜 공감... 엣티제 아무것도 안하면 오히려 피곤해지는 거 진짜
          공 감... 아무것도 안하고 가만히 있으라고 하면 넘 힘듬
        </p>
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
