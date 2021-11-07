import React from 'react';
import style from './mbtiDescList.module.css';

const MbtiDescList = props => {
  const mbtiList = props.list;
  const list = [
    [mbtiList[0], mbtiList[1], mbtiList[2], mbtiList[3]],
    [mbtiList[4], mbtiList[5], mbtiList[6], mbtiList[7]],
    [mbtiList[8], mbtiList[9], mbtiList[10], mbtiList[11]],
    [mbtiList[12], mbtiList[13], mbtiList[14], mbtiList[15]],
  ];

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
