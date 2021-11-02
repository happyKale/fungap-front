import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from '../../components';

const PostList = props => {
  // 게시글 목록을 리덕스에서 가져온다.
  const postList = useSelector(state => state.post.postList);
  console.log('포스트 리스트: ', postList);

  return (
    <div>
      {/* 게시글 목록 (수정/삭제 버튼 추가) */}
      {postList.map((post, idx) => {
        return (
          <Post
            key={post.board_id}
            boardImage={post.board_image}
            direction='row'
            boardTitle={post.board_title}
            viewCount={post.view_count}
            commentCount={post.comment_count}
            likeCount={post.like_count}
          ></Post>
        );
      })}
    </div>
  );
};

export default PostList;
