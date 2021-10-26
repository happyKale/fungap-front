import React from 'react';
import styled from 'styled-components';
//elements
import { FlexBox, Text } from '../elements';

//components
import Post from './Post';

const TopPost = () => {
  return (
    <React.Fragment>
      <FlexBox direction='column' width='100vw'>
        <FlexBox>
          <Text>실시간 인기글</Text>
        </FlexBox>

        <FlexBox>
          <FlexBox direction='column'>
            <Post bg_color='#cacaca' width='400px' height='250px'>
              <Text padding='0em 1em'>
                친구가 숙제 빌려달라고 했을 때 MBTI 별 반응
              </Text>
            </Post>
          </FlexBox>
          <FlexBox
            direction='column'
            width='250px'
            height='250px'
            padding='6px'
          >
            <FlexBox>
              <Post bg_color='#cacaca' width='160px' height='70px'></Post>
              <Text padding='0px 6px'>상사한테 혼났을 때 MBTI 별 반응</Text>
            </FlexBox>
            <FlexBox padding='20px 0px'>
              <Post bg_color='#cacaca' width='160px' height='70px'></Post>
              <Text padding='0px 6px'>상사한테 혼났을 때 MBTI 별 반응</Text>
            </FlexBox>
            <FlexBox>
              <Post bg_color='#cacaca' width='160px' height='70px'></Post>
              <Text padding='0px 6px'>상사한테 혼났을 때 MBTI 별 반응</Text>
            </FlexBox>
          </FlexBox>
          <Post bg_color='#cacaca' width='140px' height='250px'>
            <Text align='center'>실시간 인기 게시글</Text>

            <Text margin='0px' padding='0px 3px'>
              1.
            </Text>
          </Post>
        </FlexBox>
      </FlexBox>
    </React.Fragment>
  );
};

export default TopPost;
