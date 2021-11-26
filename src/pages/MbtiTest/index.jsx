import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
// redux
import { useDispatch } from 'react-redux';
import { compatibilityActions } from '@redux/modules/compatibility';
// route
import { history } from '@redux/configureStore';
// components
import {
  Goback,
  TestHeader,
  SelectMbti,
  KakaoShareButton,
  NewContents,
} from '@components';
// customhook
import usePostList from '@hook/usePostList';
// css
import style from './mbtiTest.module.css';

const KAKAO_SHARE_DATA = {
  title: 'MBTI 궁합테스트',
  desc: 'MBTI 궁합으로 나와 찰떡 인연을 찾아보아요!',
};

const Compatibility = () => {
  const dispatch = useDispatch();
  const { postList } = usePostList();
  const [mbti, setMbti] = useState('');
  const [otherMbti, setOtherMbti] = useState('');
  const info = { mbti, otherMbti };

  const handleChange = useCallback(
    e => {
      const { id, value } = e.target;

      if (id === 'myMbti') setMbti(value);
      if (id === 'otherMbti') setOtherMbti(value);
    },
    [mbti, otherMbti],
  );

  const handleClick = e => {
    const { classList } = e.target;

    // 결과보기
    if (classList.contains('result')) {
      if (mbti === '' || otherMbti === '') {
        alert('mbti를 선택해주세요');

        return false;
      } else {
        dispatch(compatibilityActions.getCompatibilityResultDB(info));

        history.push(`/mbti/result/${mbti}&${otherMbti}`);
      }
    }
    // 공유하기
    if (classList.contains('share')) {
      const kakaoBtn = document.getElementById('kakaoShare').firstChild;

      kakaoBtn.click();
    }
  };

  return (
    <>
      <Goback page='/'>궁합 테스트</Goback>
      <TestHeader
        title='나와 맞는 친구? 이성? 동료?'
        desc='MBTI궁합으로 나와 찰떡 인연을 찾아보아요!'
      />

      <div className={style.selectBox}>
        <h2>나의 MBTI</h2>
        <SelectMbti
          id='myMbti'
          name='myMbti'
          color='#333333'
          onChange={handleChange}
        />

        <div name='플러스이미지' className={style.plusIcon} />

        <h2 className={style.otherMbtiTitle}>상대방의 MBTI</h2>
        <SelectMbti
          id='otherMbti'
          name='otherMbti'
          color='#333333'
          onChange={handleChange}
        />
      </div>

      <div className={style.btns}>
        <button
          className={classnames('result', style.btn, style.btnResult)}
          onClick={handleClick}
        >
          결과 보기
        </button>
        <button
          className={classnames('share', style.btn, style.btnShare)}
          onClick={handleClick}
        >
          테스트 공유하기
        </button>
        <div id='kakaoShare' className={style.fake}>
          <KakaoShareButton kakaoData={KAKAO_SHARE_DATA} />
        </div>
      </div>

      <h2>이런 콘텐츠는 어때요?</h2>
      <div className={style.grid}>
        <NewContents //
          postList={postList}
          leng='4'
        />
      </div>
    </>
  );
};

export default Compatibility;
