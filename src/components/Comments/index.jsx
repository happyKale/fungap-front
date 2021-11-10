import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { commentActions } from '../../redux/modules/comment';
import { Comment, CommentInput } from '../';
import style from './comments.module.css';

const Comments = ({ boardId }) => {
  const dispatch = useDispatch();
  const [commentVisible, setCommentVisible] = useState(false);
  const comments = useSelector(state => state.comment.list);

  const comment = comments.filter(item => {
    return item.board_id === boardId;
  });

  useEffect(() => {
    dispatch(commentActions.getCommentDB(boardId));
  }, []);

  const showTotalComment = () => {
    setCommentVisible(!commentVisible);
  };

  return (
    <div className={style.comments}>
      <CommentInput boardId={boardId} />
      <ul className={style.commentList}>
        {!commentVisible
          ? comment.slice(0, 2).map((item, index) => {
              return <Comment key={index} {...item} />;
            })
          : comment.map((item, index) => {
              return <Comment key={index} {...item} />;
            })}
      </ul>
      <div className={style.btnTotalCommentWrap}>
        {comment.length < 3 ? null : (
          <button onClick={showTotalComment}>
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
