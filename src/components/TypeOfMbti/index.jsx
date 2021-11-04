import React from 'react';

import { Select, Option } from '../../elements';
import style from './typeofmbti.module.css';

const mbtiList = [
  '유형',
  'INTJ',
  'INTP',
  'ENTJ',
  'ENTP',
  'INFJ',
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
      <select className={style.select} {...rest}>
        {mbtiList.map((mbti, index) => {
          return <Option key={index}>{mbti}</Option>;
        })}
      </select>
    </>
  );
};

export default TypeOfMbti;
