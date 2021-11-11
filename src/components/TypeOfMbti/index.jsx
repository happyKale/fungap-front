import React, { useState } from 'react';

import style from './typeofmbti.module.css';

const mbtiList = [
  'MBTI를 선택해주세요',
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

const TypeOfMbti = ({ id, name, color, ...rest }) => {
  return (
    <>
      <select
        id={id}
        name={name}
        className={style.select}
        style={{ color: color }}
        {...rest}
      >
        {mbtiList.map((mbti, index) => {
          return <option key={index}>{mbti}</option>;
        })}
      </select>
    </>
  );
};

export default TypeOfMbti;
