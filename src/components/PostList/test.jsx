// 무한스크롤
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Loader';
import { Post } from '..';
import { postActions } from '../../redux/modules/post';

const PostList = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const observerRef = useRef();
  const sort = useSelector(state => state.post.sort);
  const { isLoading, hasMore, list } = useSelector(state => state.post);

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
      {isLoading && <Loader />}
    </div>
  );
};

export default PostList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '..';
import { postActions } from '../../redux/modules/post';

const PostList = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.post.postList);

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

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
    </div>
  );
};

export default PostList;
