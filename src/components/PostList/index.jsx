import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post } from '../../components';
import style from './postList.module.css';
import { postActions } from '../../redux/modules/post';

const PostList = ({ isAdmin }) => {
  const dispatch = useDispatch();
  // 게시글 목록을 리덕스에서 가져온다.
  const postList = useSelector(state => state.post.postList);
  console.log('포스트 리스트: ', postList);

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
        return <Post isAdmin={isAdmin} key={index} direction='row' {...post} />;
      })}
    </div>
  );
};

export default PostList;
