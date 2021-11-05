import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Comments, Counter, Goback } from '../../components';
import { postActions } from '../../redux/modules/post';
import style from './detail.module.css';

const Detail = props => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postList);
  const postId = parseInt(props.match.params.id);
  const post = postList?.find(item => {
    return item.board_id === postId;
  });

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <>
      <div className={style.detail}>
        <Goback page='/contents'>{post?.board_title}</Goback>
        <div className={style.image}>
          <img src={post?.board_image} alt={post?.board_title} />
        </div>
        <h3 className={style.title}>{post?.board_title}</h3>
        <span className={style.like}>{post?.like_count}</span>
        <p className={style.contents}>{}</p>
        <Counter //
          commentCount={post?.comment_count}
          viewCount={post?.view_count}
        />
        <Comments boardId={post?.board_id} />
      </div>
    </>
  );
};

export default Detail;
