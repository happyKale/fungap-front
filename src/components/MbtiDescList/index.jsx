import React from 'react';
import style from './mbtiDescList.module.css';

const MbtiDescList = props => {
  const mbtiList = props.list;

  const sectionName = ['외교형', '탐험가형', '분석형', '관리자형'];
  return (
    <React.Fragment>
      {mbtiList.map((mbti, idx) => {
        let section = false;
        const num = idx / 4;
        if (num === 0 || num === 1 || num === 2 || num === 3) {
          section = true;
        }
        return (
          <React.Fragment>
            {section && <div className={style.section}>{sectionName[num]}</div>}
            <div key={idx} className={style.mbtiBox}>
              <div className={style.mbtiName}>{mbti[0].toUpperCase()}</div>
              <div className={style.mbtiDesc}>{mbti[1]}</div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default MbtiDescList;
