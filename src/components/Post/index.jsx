import React from 'react';
import heart from '../../assets/heart.png';
import style from './post.module.css';
import { useDispatch } from 'react-redux';
import { postActions } from '../../redux/modules/post';
import { history } from '../../redux/configureStore';

const Post = ({
  isAdmin,
  board_id,
  board_title,
  board_image,
  view_count,
  comment_count,
  like_count,
  like_state,
  direction,
}) => {
  const movePostDetail = () => {
    history.push(`/detail/${board_id}`);
  };

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div
        className={direction === 'row' ? style.rowFlex : style.columnFlex}
        onClick={movePostDetail}
      >
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
            <span>{like_count}</span>
          </button>
        </div>
      </div>
      {isAdmin && (
        <div className={style.buttonBox}>
          <button
            className={style.button}
            onClick={() => {
              console.log('수정함');
              dispatch(postActions.setEditPost(board_id));
              history.push(`/admin_write/${board_id}`);
            }}
          >
            수정
          </button>
          <button
            className={style.button}
            onClick={() => {
              console.log('삭제함');
              console.log(board_id);
              dispatch(postActions.deletePostDB(board_id));
            }}
          >
            삭제
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Post;
