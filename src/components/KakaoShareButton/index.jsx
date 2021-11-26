import React from 'react';
// util
import { createKakaoButton } from '@shared/kakaoShare';
// css
import style from './kakaoShare.module.css';
// images
import btn_kakao_share from '@assets/btn_kakao_share.png';

const KakaoShareButton = ({ kakaoData }) => {
  const handleClick = () => createKakaoButton(kakaoData);

  return (
    <>
      <button
        id='kakao-link-btn'
        className={style.btnKakaoShare}
        onClick={handleClick}
      >
        <img src={btn_kakao_share} alt='카카카오 공유하기' />
      </button>
    </>
  );
};

export default KakaoShareButton;
