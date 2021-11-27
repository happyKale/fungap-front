import React from 'react';
// components
import { Post } from '@components';

const TopContents = ({ postList, leng }) => {
  const topPostList = [...postList]?.sort((a, b) => {
    if (a.like_count < b.like_count) {
      return 1;
    }
    if (a.like_count > b.like_count) {
      return -1;
    }
    return 0;
  });
  const list = topPostList.slice(0, leng);

  return (
    <>
      {list?.map((post, index) => {
        return <Post key={post.board_id} direction='column' {...post} />;
      })}
    </>
  );
};

// export default React.memo(TopContents);
export default React.memo(TopContents);
