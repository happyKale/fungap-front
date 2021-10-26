import React from 'react';

import { Select, Option } from '../../elements';

const mbtiList = [
  'INTJ',
  'INTP',
  'ENTJ',
  'ENTP',
  'INFA',
  'INFP',
  'ENFJ',
  'ENFP',
  'ISTJ',
  'ISFJ',
  'ESTJ',
  'ESFJ',
  'ISTP',
  'ISFP',
  'ESTP',
  'ESFP',
];

const TypeOfMbti = ({ children, ...rest }) => {
  return (
    <>
      <Select {...rest}>
        {mbtiList.map((mbti, index) => {
          return <Option key={index}>{mbti}</Option>;
        })}
      </Select>
    </>
  );
};

export default TypeOfMbti;
