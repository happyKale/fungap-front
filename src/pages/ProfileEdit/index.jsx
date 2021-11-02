import React from 'react';
import style from './profileedit.module.css';
import { Goback } from '../../components';
const ProfileEdit = () => {
  const mbtiList = [
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

  return (
    <div className={style.wrap}>
      <Goback>프로필 수정</Goback>
      <div className={style.background} />
      <div className={style.editImage}>
        <label htmlFor='inputfile'>
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/edit-2653317-2202989.png'
            alt='수정아이콘'
          />
        </label>
        <input type='file' id='inputfile' />
      </div>

      <img
        src='https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
        alt='유저이미지'
        className={style.userImage}
      />

      <div className={style.inputContent}>
        <p>닉네임</p>
        <input type='text' placeholder=' 닉네임을 입력해주세요' />
        <p>MBTI</p>
        <select>
          {mbtiList.map((list, index) => {
            return <option key={index}>{list}</option>;
          })}
        </select>
      </div>

      <div className={style.editBtn}>수정</div>
    </div>
  );
};

export default ProfileEdit;
