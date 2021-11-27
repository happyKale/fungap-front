import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { commentActions } from '@redux/modules/comment';

const useCommentList = (id, mode) => {
  const dispatch = useDispatch();
  const commentList = useSelector(state => state.comment.list);

  useEffect(() => {
    dispatch(commentActions.getCommentDB(id, mode));
  }, [dispatch, id, mode]);

  return { commentList };
};

export default useCommentList;
