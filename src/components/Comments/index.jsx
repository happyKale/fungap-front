import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { commentActions } from '../../redux/modules/comment';
import { Comment, CommentInput } from '../';
import style from './comments.module.css';
import { useDispatch } from 'react-redux';

const Comments = props => {
  const dispatch = useDispatch();
  const [commentVisible, setCommentVisible] = useState(false);
  const comments = useSelector(state => state.comment.list);
  console.log(comments);

  useEffect(() => {
    if (comments) {
      return false;
    }
    dispatch(commentActions.getCommentDB());
  }, [comments]);

  const showTotalComment = () => {
    setCommentVisible(!commentVisible);
  };

  return (
    <div className={style.comments}>
      <ul className={style.commentList}>
        {!commentVisible
          ? comments.slice(0, 2).map((item, index) => {
              return <Comment key={index} {...item} />;
            })
          : comments.map((item, index) => {
              return <Comment key={index} {...item} />;
            })}
      </ul>
      <div className={style.btnTotalCommentWrap}>
        <button onClick={showTotalComment}>
          {!commentVisible ? '5개의 댓글 전체보기' : '댓글 숨기기'}
        </button>
      </div>
      <CommentInput />
    </div>
  );
};

export default Comments;
