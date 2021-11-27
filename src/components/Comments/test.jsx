import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { history } from '../../redux/configureStore';
import { commentActions } from '../../redux/modules/comment';
import { Comment, CommentInput } from '../';
import style from './comments.module.css';

const Comments = ({ boardId, comments }) => {
  const [commentVisible, setCommentVisible] = useState(false);

  const showTotalComment = () => {
    setCommentVisible(!commentVisible);
  };

  return (
    <div>
      <CommentInput boardId={boardId} />
      <ul className={style.list}>
        {!commentVisible
          ? comments.slice(0, 5).map((item, index) => {
              return <Comment key={index} {...item} />;
            })
          : comments.map((item, index) => {
              return <Comment key={index} {...item} />;
            })}
      </ul>
      <div className={style.btnTotal}>
        {comments.length < 5 ? null : (
          <button onClick={showTotalComment}>
            {!commentVisible
              ? `${comments.length}개의 댓글 전체보기`
              : '댓글 숨기기'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Comments;
