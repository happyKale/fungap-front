import React, { useRef, useState } from 'react';
import style from './adminPostManage.module.css';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { postActions } from '../../redux/modules/post';
import { Goback } from '../../components';

const AdminPostManage = props => {
  const dispatch = useDispatch();
  const postId = props.match.params.id;
  // 주소창에 id값이 넘어오면 게시글 수정으로 바꾸기 위해서 변수를 만듦.
  const isEdit = postId ? true : false;
  const postList = useSelector(state => state.post.postList);
  let post = postList.filter(post => post.board_id == postId);
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

    dispatch(postActions.addPost(title, img, desc, mbtiDescObject));
    if (isEdit) {
      history.push(`/admin_preview/${postId}`);
    } else {
      history.push('/admin_preview');
    }
  };

  return (
    <React.Fragment>
      {/* 페이지 제목 */}
      <Goback page='/admin'>
        {isEdit ? `게시글 수정 페이지` : `게시글 작성 페이지`}
      </Goback>
      <div className={style.container}>
        <textarea
          placeholder='게시글의 제목을 적으세요!'
          className={style.title}
          ref={titleRef}
          defaultValue={isEdit ? post[0].board_title : ''}
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
          defaultValue={isEdit ? post[0].board_desc : ''}
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
                defaultValue={
                  isEdit ? post[0].board_content[mbti.key.toLowerCase()] : ''
                }
              />
            </div>
          );
        })}
        <button onClick={saveData} className={style.submitButton}>
          {isEdit ? `수정하기` : `작성하기`}
        </button>
      </div>
    </React.Fragment>
  );
};

export default AdminPostManage;
