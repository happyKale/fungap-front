import React, { useEffect } from 'react';
import style from './profileedit.module.css';
import { Goback, ImageUpload } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/modules/user';
import { history } from '../../redux/configureStore';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(sessionStorage.getItem('user'));
  const user_image = useSelector(state => state.user.uploadImage);
  const [nickname, setNickname] = React.useState(userInfo?.nickname);
  const [user_mbti, setUser_mbti] = React.useState(userInfo.user_mbti);
  const [change, setChange] = React.useState(false);

  const changeNickname = e => {
    setNickname(e.target.value);
  };

  const changeMbti = e => {
    setUser_mbti(e.target.value);
  };

  const checkChange = () => {
    if (userInfo.nickname == nickname && userInfo.user_mbti == user_mbti) {
      setChange(false);
    } else {
      setChange(true);
    }
  };

  useEffect(() => {
    if (user_image !== userInfo.user_image) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [user_image]);

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
      <div className={style.background}>
        <div
          name='뒤로가기이미지'
          onClick={() => {
            history.push('/userpage');
          }}
        ></div>
        <p>프로필 수정</p>
        <div />
      </div>
      <ImageUpload profile url={userInfo.user_image} />
      <div className={style.inputContent}>
        <p>닉네임</p>
        <input
          type='text'
          value={nickname}
          onChange={changeNickname}
          onBlur={checkChange}
        />
        <p>MBTI</p>
        <select value={user_mbti} onChange={changeMbti} onBlur={checkChange}>
          {mbtiList.map((list, index) => {
            return <option key={index}>{list}</option>;
          })}
        </select>
      </div>
      <div
        className={change ? style.onEditBtn : style.offEditBtn}
        onClick={updateUserInfo}
      >
        수정 완료
      </div>
    </div>
  );
};

export default ProfileEdit;
