import React from 'react';

import { createKakaoButton } from '../../shared/kakaoShare';
import style from './kakao.module.css';
import btn_kakao_share from '../../assets/btn_kakao_share.png';

const KakaoShareButton = ({ kakaoData }) => {
  return (
    <>
      {/* Kakao share button */}
      <button
        id='kakao-link-btn'
        className={style.btnKakaoShare}
        onClick={() => createKakaoButton(kakaoData)}
      >
        <img src={btn_kakao_share} alt='카카카오 공유하기' />
      </button>
    </>
  );
};

export default KakaoShareButton;
