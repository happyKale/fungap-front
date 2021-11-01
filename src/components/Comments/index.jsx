import React from 'react';

import { Comment } from '../';
import style from './comments.module.css';

const Comments = props => {
  return (
    <div className={style.comments}>
      <ul className={style.commentList}>
        <Comment />
      </ul>
    </div>
  );
};

export default Comments;
