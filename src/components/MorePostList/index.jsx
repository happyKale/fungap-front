import React, { useRef, useState } from 'react';
// components
import { Post, Loader } from '@components';
// util
import useFetch from '~/shared/useFetch';

const MorePostList = ({ sort }) => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, hasMore, list } = useFetch(sort, pageNum);
  const observerRef = useRef();

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
        setPageNum(page => page + 1);
      }
    }, ioOptions);

    node && observerRef.current.observe(node);
  };

  return (
    <div>
      {list?.map((post, index) => {
        return <Post key={index} direction='row' {...post} />;
      })}
      <p ref={observer}></p>
      {isLoading && <Loader />}
    </div>
  );
};

export default MorePostList;
