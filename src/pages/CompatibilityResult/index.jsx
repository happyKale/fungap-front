import React, { useState, useEffect } from 'react';
import style from './compatibilityResult.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../../redux/modules/post';
import { Goback, Post, KakaoShareButton } from '../../components';
import { history } from '../../redux/configureStore';
import { compatibilityActions } from '../../redux/modules/compatibility';

const CompatibilityResult = props => {
  const dispatch = useDispatch();
  const newPostList = useSelector(state => state.post.newList);
  const testResult = useSelector(state => state.compatibility.result);

  const new4 = newPostList.slice(0, 4);
  const query = props.match.params.id;

  const Id = query.split('-');
  const mbti = Id[0].split(':')[1];
  const other_mbti = Id[1];

  const info = { mbti, other_mbti };

  const shareResultBtn = () => {
    const kakaoBtn = document.getElementById('kakaoShare2').firstChild;
    kakaoBtn.click();
  };

  const resetBtn = () => {
    history.replace('/compatibility');
  };

  const data = {
    title: 'MBTI 궁합테스트',
    desc: `${mbti}와 ${other_mbti}의 궁합은?`,
  };
  useEffect(() => {
    dispatch(postActions.getHomePostDB());
    dispatch(compatibilityActions.getCompatibilityResultDB(info));
  }, []);
  return (
    <React.Fragment>
      <>
        <Goback>궁합 테스트</Goback>
        <h3>나와 맞는 친구? 이성? 동료?</h3>
        <p>MBTI궁합으로 나와 찰떡 인연을 찾아보아요!</p>

        <div className={style.testContainer}>
          <div className={style.testTitleBox}>
            <div>나의 MBTI</div>
            <div>상대방의 MBTI</div>
          </div>
          <div className={style.textMbti}>
            <div>{mbti}</div>
            <div>{other_mbti}</div>
          </div>
        </div>
        <div className={style.scoreImage}>
          <p>{testResult.score}점</p>
        </div>
        <div className={style.content}>
          <p>{testResult.content}</p>
        </div>
        <div className={style.btnBox}>
          <button className={style.resultBtn} onClick={shareResultBtn}>
            결과 공유하기
          </button>
          <button className={style.shareBtn} onClick={resetBtn}>
            테스트 다시하기
          </button>
          <div className={style.fake} id='kakaoShare2'>
            <KakaoShareButton kakaoData={data} />
          </div>
        </div>
        <h2>이런 콘텐츠는 어때요?</h2>
        <div className={style.grid}>
          {new4.map((post, index) => {
            return <Post key={post.board_id} direction='column' {...post} />;
          })}
        </div>
      </>
    </React.Fragment>
  );
};

export default CompatibilityResult;
