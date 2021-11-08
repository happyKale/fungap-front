import React from 'react';
import style from './mbtiDescList.module.css';

const MbtiDescList = props => {
  const mbtiList = props.list;
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
  const list = [[], [], [], []];
  mbti.map((item, idx) => {
    const num = parseInt(idx / 4);
    const result = mbtiList.find(mbti => mbti[0] === item.toLowerCase());
    list[num].push(result);
  });

  const sectionName = [
    { name: '외교형', color: style.green },
    { name: '탐험가형', color: style.yellow },
    { name: '분석형', color: style.purple },
    { name: '관리자형', color: style.blue },
  ];
  return (
    <React.Fragment>
      {list?.map((item, idx) => {
        return (
          <div key={idx} className={style.container}>
            <div className={sectionName[idx].color}>
              {sectionName[idx]?.name}
            </div>
            {item?.map(i => {
              return (
                <div key={i[0]} className={style.mbtiBox}>
                  <div className={style.mbtiName}>{i[0].toUpperCase()}</div>
                  <div className={style.mbtiDesc}>{i[1]}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default MbtiDescList;
