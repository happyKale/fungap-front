import React from 'react';
// components
import { Post } from '@components';
// customhook
import usePostList from '@hook/usePostList';

const PostList = ({ isAdmin }) => {
  const { postList: list } = usePostList();

  return (
    <>
      {list?.map((post, index) => {
        return (
          <Post
            key={index}
            isAdmin={isAdmin ? isAdmin : null}
            direction='row'
            {...post}
          />
        );
      })}
    </>
  );
};

export default PostList;
