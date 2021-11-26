import React, { useEffect } from 'react';
import classnames from 'classnames';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { compatibilityActions } from '@redux/modules/compatibility';
// route
import { history } from '@redux/configureStore';
// components
import { Goback, TestHeader, KakaoShareButton, NewContents } from '@components';
// customhook
import usePostList from '@hook/usePostList';
// css
import style from './mbtiTestResult.module.css';

const MbtiTestResult = props => {
  const dispatch = useDispatch();
  const { postList } = usePostList();
  const testResult = useSelector(state => state.compatibility.result);
  const parameter = props.match.params.id;

  const mbti = parameter.split('&')[0];
  const other_mbti = parameter.split('&')[1];
  const info = { mbti, other_mbti };

  const KAKAO_SHARE_DATA = {
    title: 'MBTI 궁합테스트',
    desc: `${mbti}와 ${other_mbti}의 궁합은?`,
  };

  const handleClick = e => {
    const { id } = e.target;

    if (id === 'share') {
      const kakaoBtn = document.getElementById('kakaoShare').firstChild;
      kakaoBtn.click();
    }
    if (id === 'reset') {
      history.replace('/compatibility');
    }
  };

  useEffect(() => {
    dispatch(compatibilityActions.getCompatibilityResultDB(info));
  }, []);

  return (
    <>
      <>
        <Goback>궁합 테스트</Goback>
        <TestHeader
          title='나와 맞는 친구? 이성? 동료?'
          desc='MBTI궁합으로 나와 찰떡 인연을 찾아보아요!'
        />

        <div className={style.test}>
          <div className={style.title}>
            <div>나의 MBTI</div>
            <div>상대방의 MBTI</div>
          </div>
          <div className={style.mbti}>
            <div>{mbti}</div>
            <div>{other_mbti}</div>
          </div>
        </div>
        <div className={style.score}>
          <p>{testResult.score}점</p>
        </div>
        <div className={style.content}>
          <p>{testResult.content}</p>
        </div>
        <div className={style.btns}>
          <button //
            id='share'
            className={classnames(style.btn, style.btnResult)}
            onClick={handleClick}
          >
            결과 공유하기
          </button>
          <button //
            id='reset'
            className={classnames(style.btn, style.btnShare)}
            onClick={handleClick}
          >
            테스트 다시하기
          </button>
          <div className={style.fake} id='kakaoShare'>
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
    </>
  );
};

export default MbtiTestResult;
