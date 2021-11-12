import React, { useState, useEffect } from 'react';
import style from './compatibility.module.css';
import { Goback, Post, KakaoShareButton } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../../redux/modules/post';
import { compatibilityActions } from '../../redux/modules/compatibility';
import { history } from '../../redux/configureStore';
import apis from '../../shared/apis';

const Compatibility = () => {
  const dispatch = useDispatch();

  const newPostList = useSelector(state => state.post.newList);
  const new4 = newPostList.slice(0, 4);

  const [mbti, setMbti] = useState('');
  const [other_mbti, setOther_Mbti] = useState('');

  const changeMyMbti = e => {
    setMbti(e.target.value);
  };
  const changeOtherMbti = e => {
    setOther_Mbti(e.target.value);
  };

  const info = { mbti, other_mbti };

  const resultBtn = async () => {
    if (mbti == '' || other_mbti == '') {
      window.alert('mbti를 선택해주세요');
    } else {
      history.push(`/compatibility/result/:${mbti}-${other_mbti}`);
      dispatch(compatibilityActions.getCompatibilityResultDB(info));
    }
  };
  const data = {
    title: 'MBTI 궁합테스트',
    desc: 'MBTI 궁합으로 나와 찰떡 인연을 찾아보아요!',
  };
  const sharetestBtn = () => {
    const kakaoBtn = document.getElementById('kakaoShare').firstChild;
    kakaoBtn.click();
  };

  const mbtiList = [
    'MBTI를 입력해주세요',
    'ISTJ',
    'ISFJ',
    'ISTP',
    'ISFP',
    'INTJ',
    'INTP',
    'INFJ',
    'INFP',
    'ESTJ',
    'ESTP',
    'ESFJ',
    'ESFP',
    'ENTJ',
    'ENTP',
    'ENFJ',
    'ENFP',
  ];
  useEffect(() => {
    dispatch(postActions.getHomePostDB());
  }, []);
  return (
    <React.Fragment>
      <Goback page='/'>궁합 테스트</Goback>
      <h3>나와 맞는 친구? 이성? 동료?</h3>
      <p>MBTI궁합으로 나와 찰떡 인연을 찾아보아요!</p>

      <div className={style.selectBox}>
        <h2>나의 MBTI</h2>
        <select className={style.Mbti} onChange={changeMyMbti}>
          {mbtiList.map((list, index) => {
            return <option key={index}>{list}</option>;
          })}
        </select>

        <div name='플러스이미지' className={style.plusIcon} />

        <h2 className={style.otherMbtiTitle}>상대방의 MBTI</h2>
        <select className={style.otherMbti} onChange={changeOtherMbti}>
          {mbtiList.map((list, index) => {
            return <option key={index}>{list}</option>;
          })}
        </select>
      </div>

      <div className={style.btnBox}>
        <button className={style.resultBtn} onClick={resultBtn}>
          결과 보기
        </button>
        <button className={style.shareBtn} onClick={sharetestBtn}>
          테스트 공유하기
        </button>
        <div className={style.fake} id='kakaoShare'>
          <KakaoShareButton kakaoData={data} />
        </div>
      </div>

      <h2>이런 콘텐츠는 어때요?</h2>
      <div className={style.grid}>
        {new4.map((post, index) => {
          return <Post key={post.board_id} direction='column' {...post} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Compatibility;
