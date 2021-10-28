import React from 'react';
import { useSelector } from 'react-redux';
//elements
import { FlexBox, Text } from '../../elements';

//components
import Post from '../Post';

const TopPost = () => {
  const Posts = useSelector(state => state.post?.postList);
  Posts.sort(function (a, b) {
    if (a.view_count < b.view_count) {
      return 1;
    }
    if (a.view_count > b.view_count) {
      return -1;
    }
    return 0;
  });
  const top4 = Posts.slice(1, 4);
  const top10 = Posts.slice(0, 10);

  return (
    <React.Fragment>
      <FlexBox direction='column' width='100vw'>
        <FlexBox>
          <Text>실시간 인기글</Text>
        </FlexBox>

        <FlexBox>
          <FlexBox direction='column'>
            <Post bgColor='#cacaca' width='400px' height='250px'>
              <Text padding='0em 1em'>{Posts[0].title}</Text>
            </Post>
          </FlexBox>
          <FlexBox
            direction='column'
            width='300px'
            height='250px'
            padding='6px'
          >
            {top4 &&
              top4.map((post, index) => {
                return (
                  <FlexBox key={index}>
                    <Post
                      bgColor='#cacaca'
                      width='160px'
                      height='70px'
                      margin='7px 0px'
                    ></Post>
                    <Text padding='0px 3px' width='140px'>
                      {post.title}
                    </Text>
                  </FlexBox>
                );
              })}
          </FlexBox>
          <Post bgColor='#cacaca' width='180px' height='250px' bgImage='""'>
            <Text align='center'>실시간 인기 게시글</Text>
            {top10 &&
              top10.map((post, index) => {
                return (
                  <Text
                    margin='0px'
                    padding='0px 3px'
                    key={index}
                    textOverflow='ellipsis'
                    overflow='hidden'
                    width='130px'
                    whiteSpace='nowrap'
                  >
                    {index + 1}.{post.title}
                  </Text>
                );
              })}
          </Post>
        </FlexBox>
      </FlexBox>
    </React.Fragment>
  );
};

export default TopPost;
