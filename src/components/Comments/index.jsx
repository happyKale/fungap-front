import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { history } from '../../redux/configureStore';
import { commentActions } from '../../redux/modules/comment';
import { Comment, CommentInput } from '../';
import style from './comments.module.css';

const Comments = ({ boardId, mode }) => {
  const postId = parseInt(history.location.pathname.split('/')[2]);
  const dispatch = useDispatch();
  const [commentVisible, setCommentVisible] = useState(false);
  const comments = useSelector(state => state.comment.list);
  let comment = comments.filter(item => {
    if (mode === 'game') {
      return item.game_id === boardId;
    } else {
      return item.board_id === boardId;
    }
  });

  useEffect(() => {
    dispatch(commentActions.getCommentDB(postId, mode));
  }, []);

  const showTotalComment = () => {
    setCommentVisible(!commentVisible);
  };

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
