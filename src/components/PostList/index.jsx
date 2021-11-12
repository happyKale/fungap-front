import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components';
import { postActions } from '../../redux/modules/post';

const PostList = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.post.postList);

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  console.log('관리자 리스트: ', list);
  return (
    <div>
      {list?.map((post, index) => {
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
