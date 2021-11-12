import React from 'react';

import { LikeButton, KakaoShareButton } from '..';
import style from './contentFt.module.css';

const ContentFt = ({
  boardId,
  commentCount,
  viewCount,
  likeCount,
  likeState,
  postId,
}) => {
  return (
    <div className={style.counter}>
      <div className={style.counts}>
        <span className={style.comments}>댓글 {commentCount}</span>
        <span className={style.views}>조회수 {viewCount}</span>
      </div>
      <div className={style.buttons}>
        <LikeButton
          board_id={boardId}
          like_count={likeCount}
          like_state={likeState}
        />
        <KakaoShareButton postId={boardId} />
      </div>
    </div>
  );
};

export default ContentFt;
