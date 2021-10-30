import React from 'react';
import styled from 'styled-components';
import { Image, FlexBox, Text, Button } from '../../elements';
import heart from '../../assets/heart.png';
const Post = ({ children, ...rest }) => {
  // return <Post1 {...rest}>{children}</Post1>;
  const direction = rest.direction;

  return (
    <FlexBox
      direction={direction}
      border='1px solid black'
      width={direction == 'row' ? '400px' : '200px'}
      height={direction == 'row' ? '110px' : '240px'}
      padding={direction == 'row' ? '8px' : '5px'}
    >
      <Image
        width={direction == 'row' ? '160px' : '191px'}
        height={direction == 'row' ? '109px' : '143px'}
        padding='8px'
        cursor='pointer'
        onClick={() => {
          window.alert('게시글상세로 이동!');
        }}
        src='https://img.huffingtonpost.com/asset/5dd5f293250000ab11d2dbc4.jpeg?cache=A1ADNLUVMY&ops=scalefit_630_noupscale'
      />
      <FlexBox
        direction='column'
        width='100%'
        height='110px'
        padding='12px'
        align='flex-start'
      >
        <Text
          ftSize='18px'
          ftWeight='600'
          width='100%'
          margin='15px 0px 10px 0px'
          padding='0px 0px 0px 5px'
          textOverflow='ellipsis'
          overflow='hidden'
          width='94%'
          whiteSpace='nowrap'
          cursor='pointer'
          onClick={() => {
            window.alert('게시글상세로 이동!');
          }}
        >
          {rest.title}
        </Text>
        <FlexBox width='100%' padding='0px 0px 0px 5px'>
          <Text
            ftSize='12px'
            ftWeight='600'
            margin='0px 10px 0px 0px'
            width='auto'
          >
            조회수 {rest.viewCount}
          </Text>

          <Text ftSize='12px' ftWeight='600' margin='0px'>
            댓글 {rest.commentCount}
          </Text>
        </FlexBox>
        <Button
          className='heartButton'
          radius='24px'
          border='1px solid #DFDFDF'
          ftSize='12px'
          lineHeight='16px'
          bgColor='#FFFFFF'
          margin='12px 0px 0px 5px'
          onClick={() => {
            window.alert('하트 클릭!');
          }}
        >
          <Image src={heart} top='1.5px' position='relative' /> {rest.likeCount}
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default Post;
