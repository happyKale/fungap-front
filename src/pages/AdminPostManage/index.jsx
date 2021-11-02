import React, { useRef, useState } from 'react';
import style from './adminPostManage.module.css';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { postActions } from '../../redux/modules/post';

const AdminPostManage = props => {
  const dispatch = useDispatch();

  const titleRef = useRef('');
  const descRef = useRef('');
  const mbtiList = [
    { key: 'INFP', ref: useRef(''), bgColor: '#FFEBEE' },
    { key: 'INFJ', ref: useRef(''), bgColor: '#FFEBEE' },
    { key: 'INTP', ref: useRef(''), bgColor: '#FFEBEE' },
    { key: 'INTJ', ref: useRef(''), bgColor: '#FFEBEE' },
    { key: 'ISFP', ref: useRef(''), bgColor: '#FCE4EC' },
    { key: 'ISFJ', ref: useRef(''), bgColor: '#FCE4EC' },
    { key: 'ISTP', ref: useRef(''), bgColor: '#FCE4EC' },
    { key: 'ISTJ', ref: useRef(''), bgColor: '#FCE4EC' },
    { key: 'ENFP', ref: useRef(''), bgColor: '#E1F5FE' },
    { key: 'ENFJ', ref: useRef(''), bgColor: '#E1F5FE' },
    { key: 'ENTP', ref: useRef(''), bgColor: '#E1F5FE' },
    { key: 'ENTJ', ref: useRef(''), bgColor: '#E1F5FE' },
    { key: 'ESFP', ref: useRef(''), bgColor: '#E8F5E9' },
    { key: 'ESFJ', ref: useRef(''), bgColor: '#E8F5E9' },
    { key: 'ESTP', ref: useRef(''), bgColor: '#E8F5E9' },
    { key: 'ESTJ', ref: useRef(''), bgColor: '#E8F5E9' },
  ];

  const saveData = () => {
    const title = titleRef.current.value.trimEnd();
    const img = '임시이미지';
    const desc = descRef.current.value.trimEnd();
    const mbtiDescObject = {};
    // 제목과 설명이 없으면 경고문 띄우고 중지하기
    if (title === '') {
      window.alert('게시글 제목을 적어주세요!');
      return;
    } else if (desc === '') {
      window.alert('게시글 설명을 적어주세요!');
      return;
    }
    // mbti별 내용을 mbtiDescObject 객체에 저장하기
    mbtiList.map(mbti => {
      console.log(mbti.ref.current.value);
      // mbti별 내용이 없으면 경고문 띄우고 중지하기
      if (mbti.ref.current.value.trimEnd() === '') {
        window.alert(`${mbti.key}의 내용을 입력해주세요!`);
        throw 'mbti 내용을 모두 입력해주세요!';
      }
      mbtiDescObject[mbti.key.toLowerCase()] = mbti.ref.current.value.trimEnd();
    });

    // 리덕스에 저장하기
    dispatch(postActions.setPostDB(title, img, desc, mbtiDescObject));
    history.push('/admin_preview');
  };

  return (
    <div className={style.container}>
      {/* 페이지 제목 */}
      <textarea
        placeholder='게시글의 제목을 적으세요!'
        className={style.title}
        ref={titleRef}
      />
      <img
        className={style.img}
        src='https://i.pinimg.com/originals/b2/63/77/b2637760a3dbc1762d72ab99a83cb20f.jpg'
        alt='게시글 이미지'
      ></img>
      <textarea
        placeholder='게시글의 설명을 적으세요!'
        rows='4'
        className={style.desc}
        ref={descRef}
      />
      {mbtiList.map((mbti, idx) => {
        return (
          <div key={idx} className={style.mbtiBox}>
            <div className={style.mbtiName}>{mbti.key}</div>
            <textarea
              placeholder='해당 MBTI에 맞는 설명을 적으세요!'
              rows='3'
              ref={mbti.ref}
              className={style.mbtiDesc}
            />
          </div>
        );
      })}
      <button onClick={saveData} className={style.submitButton}>
        작성하기
      </button>
    </div>
  );
};

export default AdminPostManage;
