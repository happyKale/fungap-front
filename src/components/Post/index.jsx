import React from 'react';
// redux
import { useDispatch } from 'react-redux';
import { postActions } from '@redux/modules/post';
// route
import { history } from '@redux/configureStore';
// css
import style from './post.module.css';
// images
import pinkheart from '@assets/heart_pink.png';
import heart from '@assets/heart.png';

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
  const dispatch = useDispatch();

  const handleClick = () => history.push(`/detail/${board_id}`);

  const editPost = () => {
    dispatch(postActions.setEditPost(board_id));

    history.push(`/admin_write/${board_id}`);
  };

  const deletePost = () => {
    const result = window.confirm(
      `'${board_title}' 게시글을 삭제하시겠습니까?`,
    );

    if (!result) return false;

    dispatch(postActions.deletePostDB(board_id));
  };

  return (
    <>
      <div className={direction === 'row' ? style.rowFlex : style.columnFlex}>
        <div
          className={direction === 'row' ? style.rowImgBox : style.columnImgBox}
        >
          <img
            className={direction === 'row' ? style.rowImg : style.columnImg}
            src={board_image}
            alt='임시이미지'
            onClick={handleClick}
          />
        </div>
        <div className={style.textContent}>
          <p className={style.title} onClick={handleClick}>
            {board_title}
          </p>
          <div className={style.content}>
            <p className={style.viewCount}>조회수 {view_count}</p>
            <p className={style.commentCount}>댓글 {comment_count}</p>
          </div>
          <button className={style.heartButton}>
            {JSON.parse(like_state) ? (
              <img className={style.heartImage} src={pinkheart} alt='좋아요' />
            ) : (
              <img className={style.heartImage} src={heart} alt='좋아요' />
            )}
            <span>{like_count}</span>
          </button>
        </div>
        {isAdmin && (
          <div className={style.buttonBox}>
            <button className={style.button} onClick={editPost}>
              수정
            </button>
            <button className={style.button} onClick={deletePost}>
              삭제
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
