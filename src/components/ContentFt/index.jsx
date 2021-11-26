import React from 'react';
// redux
import { useSelector } from 'react-redux';
// components
import { LikeButton, KakaoShareButton } from '@components';
// css
import style from './contentFt.module.css';

const ContentFt = ({ post }) => {
  const commentCount = useSelector(state => state.comment.list)?.length;
  const {
    mode: modeState,
    view_count: viewCount,
    board_id: boardId,
    like_count: likeCount,
    like_state: likeState,
    board_title: boardTitle,
  } = post;
  const data = {
    title: boardTitle,
    likeCount,
    commentCount,
  };

  return (
    <div className={style.counter}>
      <div className={style.counts}>
        <span className={style.comments}>댓글 {commentCount}</span>
        <span className={style.views}>조회수 {viewCount}</span>
      </div>
      <div className={style.buttons}>
        <LikeButton
          mode={modeState}
          board_id={boardId}
          like_count={likeCount}
          like_state={likeState}
        />
        <KakaoShareButton kakaoData={data} />
      </div>
    </div>
  );
};

export default ContentFt;
