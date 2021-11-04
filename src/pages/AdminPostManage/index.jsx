import React, { useRef, useState } from 'react';
import style from './adminPostManage.module.css';
import { history } from '../../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';

import { postActions } from '../../redux/modules/post';
import { Goback, ImageUpload } from '../../components';

const AdminPostManage = props => {
  const dispatch = useDispatch();
  let postId = props.match.params.id;
  // postId가 넘어오면 수정 페이지
  let isEdit = postId ? true : false;
  // image: 업로드한 이미지
  const image = useSelector(state => state.post.postImg);

  // defaultPost, defaultEditPost : 기본으로 보여줄 게시글
  // 미리보기 페이지로 넘어갈 때 작성한 데이터는 post 모듈의 post에 저장되게 됨.
  //                           수정한 데이터는 post 모듈의 editPost에 저장되게 됨.
  // 미리보기 페이지에서 뒤로 돌아올 때 작성하는 중이었으면 defaultPost를 보여준다.
  //                                 수정하는 중이었으면 defaultEditPost를 보여준다.
  let defaultPost = useSelector(state => state.post.post);
  let defaultEditPost = useSelector(state => state.post.editPost);

  const titleRef = useRef('');
  const descRef = useRef('');
  const mbtiList = [
    { key: 'INFP', ref: useRef('') },
    { key: 'INFJ', ref: useRef('') },
    { key: 'INTP', ref: useRef('') },
    { key: 'INTJ', ref: useRef('') },
    { key: 'ISFP', ref: useRef('') },
    { key: 'ISFJ', ref: useRef('') },
    { key: 'ISTP', ref: useRef('') },
    { key: 'ISTJ', ref: useRef('') },
    { key: 'ENFP', ref: useRef('') },
    { key: 'ENFJ', ref: useRef('') },
    { key: 'ENTP', ref: useRef('') },
    { key: 'ENTJ', ref: useRef('') },
    { key: 'ESFP', ref: useRef('') },
    { key: 'ESFJ', ref: useRef('') },
    { key: 'ESTP', ref: useRef('') },
    { key: 'ESTJ', ref: useRef('') },
  ];

  const saveData = () => {
    const title = titleRef.current.value.trimEnd();
    const img = image;
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
    // 게시글 작성일 때 이미지가 없으면 경고문 띄우고 중지하기
    if (!isEdit && !image) {
      window.alert('게시글 사진을 등록해주세요!');
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

    if (isEdit) {
      dispatch(postActions.addEditPost(title, img, desc, mbtiDescObject));
      history.push(`/admin_preview/${postId}`);
    } else {
      dispatch(postActions.addPost(title, img, desc, mbtiDescObject));
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
          defaultValue={
            postId
              ? defaultEditPost.board_title
              : defaultPost && defaultPost.title
          }
        />
        {postId ? (
          <ImageUpload url={defaultEditPost.board_image} />
        ) : (
          defaultPost && <ImageUpload url={defaultPost.img} />
        )}

        <textarea
          placeholder='게시글의 설명을 적으세요!'
          rows='4'
          className={style.desc}
          ref={descRef}
          defaultValue={
            isEdit
              ? defaultEditPost.board_desc
              : defaultPost && defaultPost.desc
          }
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
                  isEdit
                    ? defaultEditPost.board_content[mbti.key.toLowerCase()]
                    : defaultPost && defaultPost.mbti[mbti.key.toLowerCase()]
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
