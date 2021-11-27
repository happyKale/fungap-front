import React from 'react';
// components
import { MbtiReaction } from '@components';
// css
import style from './mbtiSection.module.css';

const MbtiSection = ({ item, idx }) => {
  const sectionName = [
    { name: '외교형', color: style.green },
    { name: '탐험가형', color: style.yellow },
    { name: '분석형', color: style.purple },
    { name: '관리자형', color: style.blue },
  ];

  return (
    <div className={style.container}>
      <div className={sectionName[idx].color}>{sectionName[idx]?.name}</div>
      {item?.map((list, index) => {
        return <MbtiReaction key={index} {...list} />;
      })}
    </div>
  );
};

export default MbtiSection;
