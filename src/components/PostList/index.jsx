import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Post } from '../../components';
import { postActions } from '../../redux/modules/post';

const PostList = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postList);

  useEffect(() => {
    if (!isAdmin) {
      dispatch(postActions.getPostDB());
    } else {
      dispatch(postActions.getAdminPostDB());
    }
  }, []);

  return (
    <div>
      {postList.map((post, index) => {
        return (
          <Post
            isAdmin={isAdmin ? isAdmin : null}
            key={index}
            direction='row'
            {...post}
          />
        );
      })}
    </div>
  );
};

export default PostList;
