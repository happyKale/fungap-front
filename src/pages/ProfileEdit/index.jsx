import React from 'react';
import style from './profileedit.module.css';
import userPlaceholer from '../../assets/userplaceholder.png';
import { Goback } from '../../components';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/modules/user';
const ProfileEdit = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('user'));

  const [previewImg, setPreviewImg] = React.useState(userPlaceholer);
  const [nickname, setNickname] = React.useState(userInfo?.nickname);
  const [user_mbti, setUser_mbti] = React.useState(userInfo.user_mbti);

  const changeNickname = e => {
    setNickname(e.target.value);
  };
  const changeMbti = e => {
    setUser_mbti(e.target.value);
  };

  const onChangeHandle = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
  };
  const user_image =
    'https://img.huffingtonpost.com/asset/5dd5f293250000ab11d2dbc4.jpeg?cache=A1ADNLUVMY&ops=scalefit_630_noupscale';
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
      <div className={style.editImage}>
        <label htmlFor='inputfile'>
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/edit-2653317-2202989.png'
            alt='수정아이콘'
          />
        </label>
        <input type='file' id='inputfile' onChange={onChangeHandle} />
      </div>
      <img src={previewImg} alt='유저이미지' className={style.userImage} />
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
