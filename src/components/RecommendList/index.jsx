import React from 'react';
// components
import { Recommend } from '@components';

const recommend = [
  {
    title: 'MBTI 유형별 내가 해리포터 캐릭터라면?',
    id: 21,
  },
  {
    title: 'MBTI 유형별 반려견 추천',
    id: 12,
  },
  {
    title: 'MBTI 유형별 무인도에 고립되었을 때',
    id: 19,
  },
];

const RecommendList = props => {
  return (
    <div>
      {recommend.map((item, index) => {
        return <Recommend key={index} {...item} />;
      })}
    </div>
  );
};

export default RecommendList;
