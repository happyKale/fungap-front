import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import useFetch from '../../shared/useFetch';
import Loading from '../Loading';
import { Post } from '../../components';

const PostList = ({ isAdmin }) => {
  const isSearching = useSelector(state => state.post.isSearching);
  const postSort = useSelector(state => state.post.postSort);
  const postList = useSelector(state => state.post.postList);

  const [pageNum, setPageNum] = useState(1);
  const { list, hasMore, isLoading } = useFetch(pageNum);

  const observerRef = useRef();
  const observer = node => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    const ioOptions = {
      root: null,
      threshold: 1,
    };
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setPageNum(page => page + 1);
      }
    }, ioOptions);

    node && observerRef.current.observe(node);
  };

  // 무한스크롤
  return (
    <div>
      {isSearching || postSort
        ? postList?.map((post, index) => {
            return (
              <Post
                isAdmin={isAdmin ? isAdmin : null}
                key={index}
                direction='row'
                {...post}
              />
            );
          })
        : list?.map((post, index) => {
            return <Post key={index} direction='row' {...post} />;
          })}
      <p ref={observer}></p>
      {isLoading && <Loading />}
    </div>
  );
};

export default PostList;
