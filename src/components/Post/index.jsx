import React from 'react';
import heart from '../../assets/heart.png';
import style from './post.module.css';
const Post = ({ children, ...rest }) => {
  const direction = rest.direction;
  console.log(direction);
  return (
    <div className={direction === 'row' ? style.rowFlex : style.columnFlex}>
      <img
        className={direction === 'row' ? style.rowImg : style.columnImg}
        src='https://www.koya-culture.com/data/photos/20200728/art_1594283293302_09f507.jpg'
        alt='임시이미지'
      />
      <div className={style.textContent}>
        <p className={style.title}>{rest.title}</p>

        <div className={style.content}>
          <p className={style.viewCount}>조회수 {rest.viewCount}</p>

          <p className={style.commentCount}>댓글 {rest.commentCount}</p>
        </div>
        <button className={style.heartButton}>
          <img className={style.heartImage} src={heart} alt='좋아요' />
          12
        </button>
      </div>
    </div>
  );
};

export default Post;
