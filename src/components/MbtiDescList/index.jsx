import React from 'react';
// components
import { MbtiSection } from '@components';

const MbtiDescList = ({ list }) => {
  const mbti = [
    'INFJ',
    'INFP',
    'ENFJ',
    'ENFP',
    'ISTP',
    'ISFP',
    'ESTP',
    'ESFP',
    'INTP',
    'INTJ',
    'ENTJ',
    'ENTP',
    'ISTJ',
    'ISFJ',
    'ESTJ',
    'ESFJ',
  ];
  const mbtiList = [[], [], [], []];
  mbti.forEach((item, idx) => {
    const num = parseInt(idx / 4);
    const result = list?.find(mbti => mbti[0] === item.toLowerCase());

    mbtiList[num].push(result);
  });

  return (
    <>
      {mbtiList?.map((item, idx) => {
        return <MbtiSection key={idx} item={item} idx={idx} />;
      })}
    </>
  );
};

export default MbtiDescList;
