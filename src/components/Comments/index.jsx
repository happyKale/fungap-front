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
    <div>
      <CommentInput boardId={boardId} />
      <ul className={style.list}>
        {!commentVisible
          ? comment.slice(0, 5).map((item, index) => {
              return <Comment key={index} {...item} />;
            })
          : comment.map((item, index) => {
              return <Comment key={index} {...item} />;
            })}
      </ul>
      <div className={style.btnTotal}>
        {comment.length < 5 ? null : (
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
