import React from 'react';
import heart from '../../assets/heart.png';
import style from './index.module.css';
const Post = ({ children, ...rest }) => {
  const direction = rest.direction;

  return (
    <div className={direction === 'row' ? style.rowFlex : style.columnFlex}>
      <img
        className={direction === 'row' ? style.rowImg : style.columnImg}
        src={rest.board_image}
        alt='임시이미지'
      />
      <div className={style.textContent}>
        <p className={style.title}>{rest.board_title}</p>

        <div className={style.content}>
          <p className={style.viewCount}>조회수 {rest.view_count}</p>

          <p className={style.commentCount}>댓글 {rest.comment_count}</p>
        </div>
        <button className={style.heartButton}>
          <img className={style.heartImage} src={heart} alt='좋아요' />
          {rest.like_count}
        </button>
      </div>
    </div>
  );
};

export default Post;
