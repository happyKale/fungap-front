import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post } from '../../components';
import style from './postList.module.css';
import { postActions } from '../../redux/modules/post';

const PostList = props => {
  console.log(props.isAdmin);
  const dispatch = useDispatch();
  // 게시글 목록을 리덕스에서 가져온다.
  const postList = useSelector(state => state.post.postList);
  console.log('포스트 리스트: ', postList);

  React.useEffect(() => {
    dispatch(postActions.getAdminPostDB());
  }, []);

  return (
    <div>
      {postList.map((post, index) => {
        return (
          <Post isAdmin={props.isAdmin} key={index} direction='row' {...post} />
        );
      })}
    </div>
  );
};

export default PostList;
