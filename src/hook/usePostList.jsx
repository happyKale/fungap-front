import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '@redux/modules/post';

const usePostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.post.postList);
  const postNums = postList?.length;

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, [dispatch]);

  return { postList, postNums };
};

export default usePostList;
