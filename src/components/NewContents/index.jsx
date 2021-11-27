import React from 'react';
// components
import { Post } from '@components';

const NewContents = ({ postList, leng }) => {
  const list = postList?.slice(0, leng);

  return (
    <>
      {list.map((post, index) => {
        return <Post key={post.board_id} direction='column' {...post} />;
      })}
    </>
  );
};

export default React.memo(NewContents);
