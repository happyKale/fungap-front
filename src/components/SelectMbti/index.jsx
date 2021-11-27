import React from 'react';
// css
import style from './selectMbti.module.css';

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

const SelectMbti = ({ id, name, color, ...rest }) => {
  return (
    <>
      <select
        id={id}
        name={name}
        className={style.select}
        style={{ color }}
        {...rest}
      >
        {mbtiList.map((mbti, index) => {
          return <option key={index}>{mbti}</option>;
        })}
      </select>
    </>
  );
};

export default SelectMbti;
