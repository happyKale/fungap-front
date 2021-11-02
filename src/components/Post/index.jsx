import React from 'react';
import heart from '../../assets/heart.png';
import style from './post.module.css';
const Post = ({
  board_id,
  board_title,
  board_image,
  view_count,
  comment_count,
  like_count,
  like_state,
  direction,
}) => {
  return (
    <div className={direction === 'row' ? style.rowFlex : style.columnFlex}>
      <img
        className={direction === 'row' ? style.rowImg : style.columnImg}
        src={board_image}
        alt='임시이미지'
      />
      <div className={style.textContent}>
        <p className={style.title}>{board_title}</p>
        <div className={style.content}>
          <p className={style.viewCount}>조회수 {view_count}</p>
          <p className={style.commentCount}>댓글 {comment_count}</p>
        </div>
        <button className={style.heartButton}>
          <img className={style.heartImage} src={heart} alt='좋아요' />
          {like_count}
        </button>
      </div>
    </div>
  );
};

export default Post;
