import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../Loading';
import { Post } from '../../components';
import { postActions } from '../../redux/modules/post';

const PostList = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const observerRef = useRef();
  const sort = useSelector(state => state.post.sort);
  const { isLoading, hasMore, list } = useSelector(state => state.post);

  React.useEffect(() => {
    // 게시물을 수정, 작성하고 admin 페이지로 넘어올때와 admin 페이지에서 게시글을 삭제할 때
    // 수정, 작성, 삭제된 게시글이 게시글 목록에 바로 반영이 되지 않아서 추가하였습니다.
    dispatch(postActions.getAdminPostDB());
  }, []);

  const observer = node => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    const ioOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 1,
    };
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        dispatch(postActions.getMorePostDB(sort));
      }
    }, ioOptions);

    node && observerRef.current.observe(node);
  };

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
      <p ref={observer}></p>
      {isLoading && <Loading />}
    </div>
  );
};

export default PostList;
