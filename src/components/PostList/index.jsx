import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from '../../components';

const PostList = props => {
  const postList = useSelector(state => state.post.postList);
  console.log('포스트 리스트: ', postList);

  return (
    <div>
      {postList.map((post, index) => {
        return <Post key={index} direction='row' {...post} />;
      })}
    </div>
  );
};

export default PostList;
