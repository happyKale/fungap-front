import React, { useMemo, useState } from 'react';
// components
import { Comment, CommentInput } from '@components';
// customhook
import useCommentList from '@hook/useCommentList';
// css
import style from './comments.module.css';

const Comments = ({ boardId, mode }) => {
  const { commentList } = useCommentList(boardId, mode);
  const [commentVisible, setCommentVisible] = useState(false);
  const comment = useMemo(
    () =>
      commentList.filter(item => {
        if (mode === 'game') {
          return item.game_id === boardId;
        } else {
          return item.board_id === boardId;
        }
      }),
    [commentList, boardId, mode],
  );

  const handleClick = () => setCommentVisible(!commentVisible);

  return (
    <div>
      <CommentInput boardId={boardId} mode={mode} />
      <ul className={style.list}>
        {!commentVisible
          ? comment.slice(0, 5).map((item, index) => {
              return <Comment key={index} {...item} mode={mode} />;
            })
          : comment.map((item, index) => {
              return <Comment key={index} {...item} mode={mode} />;
            })}
      </ul>
      <div className={style.btnTotal}>
        {comment.length < 5 ? null : (
          <button onClick={handleClick}>
            {!commentVisible
              ? `${comment.length}개의 댓글 전체보기`
              : '댓글 숨기기'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Comments;
