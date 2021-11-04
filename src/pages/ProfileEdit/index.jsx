import React from 'react';
import style from './profileedit.module.css';
import { Goback, ImageUpload } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/modules/user';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('user'));
  const user_image = useSelector(state => state.user.uploadImage);
  const [nickname, setNickname] = React.useState(userInfo?.nickname);
  const [user_mbti, setUser_mbti] = React.useState(userInfo.user_mbti);

  const changeNickname = e => {
    setNickname(e.target.value);
  };
  const changeMbti = e => {
    setUser_mbti(e.target.value);
  };

  const newinfo = { user_mbti, nickname, user_image };
  const updateUserInfo = () => {
    dispatch(userActions.updateUserInfoDB(newinfo));
  };
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
      <Goback page='/userpage'>프로필 수정</Goback>
      <div className={style.background} />
      <ImageUpload profile url={userInfo.user_image} />
      <div className={style.inputContent}>
        <p>닉네임</p>
        <input type='text' value={nickname} onChange={changeNickname} />
        <p>MBTI</p>
        <select value={user_mbti} onChange={changeMbti}>
          {mbtiList.map((list, index) => {
            return <option key={index}>{list}</option>;
          })}
        </select>
      </div>
      <div className={style.editBtn} onClick={updateUserInfo}>
        수정
      </div>
    </div>
  );
};

export default ProfileEdit;
