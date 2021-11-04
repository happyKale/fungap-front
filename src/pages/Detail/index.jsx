import React from 'react';
import { useSelector } from 'react-redux';

import { Comments, Counter, Goback } from '../../components';
import style from './detail.module.css';

const Detail = props => {
  const postList = useSelector(state => state.post.postList);
  const postId = parseInt(props.match.params.id);

  const post = postList.find(item => {
    return item.board_id === postId;
  });

  const {
    board_id,
    board_title,
    board_image,
    like_count,
    board_desc,
    comment_count,
    view_count,
    like_state,
  } = post;

  return (
    <>
      <div className={style.detail}>
        <Goback page='/contents'>{board_title}</Goback>
        <div className={style.image}>
          <img src={board_image} alt={board_title} />
        </div>
        <h3 className={style.title}>{board_title}</h3>
        <span className={style.like}>{like_count}</span>
        <p className={style.contents}>{board_desc}</p>
        <Counter //
          commentCount={comment_count}
          viewCount={view_count}
        />
        <Comments boardId={board_id} />
      </div>
    </>
  );
};

export default Detail;
