import React from 'react';
import heart from '../../assets/heart.png';
import style from './index.module.css';
const Post = ({ children, ...rest }) => {
  const direction = rest.direction;

  return (
    <div className={direction === 'row' ? style.rowFlex : style.columnFlex}>
      <img
        className={direction === 'row' ? style.rowImg : style.columnImg}
        src={rest.boardImage}
        alt='임시이미지'
      />
      <div className={style.textContent}>
        <p className={style.title}>{rest.boardTitle}</p>

        <div className={style.content}>
          <p className={style.viewCount}>조회수 {rest.viewCount}</p>

          <p className={style.commentCount}>댓글 {rest.commentCount}</p>
        </div>
        <button className={style.heartButton}>
          <img className={style.heartImage} src={heart} alt='좋아요' />
          {rest.likeCount}
        </button>
      </div>
    </div>
  );
};

export default Post;
