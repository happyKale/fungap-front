import React from 'react';

import { Comments, Counter, Goback } from '../../components';
import style from './detail.module.css';

const Detail = props => {
  return (
    <>
      <div className={style.detail}>
        <Goback page='/contents'>무인도에 고립됐을 때, MBTI별 대처법</Goback>
        <div className={style.img}></div>
        <h3 className={style.title}>무인도에 고립됐을 때, MBTI별 대처법</h3>
        <span className={style.like}>304</span>
        <p className={style.contents}>
          무인도에 고립됐을 때, MBTI별로 어떻게 살아남을지 궁금하시지
          않으신가요? 과연 어떤 MBTI가 무인도에서 살아남을 수 있을지! 펀갭과
          함께 알아봅시다.(이모지) 무인도에 고립됐을 때, MBTI별로 어떻게
          살아남을지 궁금하시지 않으신가요? 과연 어떤 MBTI가 무인도에서 살아남을
          수 있을지! 펀갭과 함께 알아봅시다.(이모지)
        </p>
        <Counter />
        <Comments />
      </div>
    </>
  );
};

export default Detail;
