import React from 'react';
import { Post } from '../../components';

const Home = () => {
  return (
    <React.Fragment>
      <Post
        direction='row'
        viewCount='50'
        commentCount='10'
        likeCount='22'
        title='무인도에 '
      ></Post>
      <Post
        direction='column'
        viewCount='50'
        commentCount='10'
        likeCount='22'
        title='무인도에 갇혔을때dddddddd'
      ></Post>
    </React.Fragment>
  );
};

export default Home;
