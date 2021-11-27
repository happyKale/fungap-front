import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@redux/modules/user';
// components
import { Goback, ImageUpload, SelectMbti } from '@components';
// css
import style from './profileEdit.module.css';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const user_image = useSelector(state => state.user.uploadImage);
  const userInfo = JSON.parse(sessionStorage.getItem('user'));

  const [change, setChange] = useState(false);
  const [input, setInput] = useState({
    nickname: userInfo.nickname,
    user_mbti: userInfo.user_mbti,
  });
  const { nickname, user_mbti } = input;
  const newInfo = { user_mbti, nickname, user_image };

  const handleChange = e => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleBlur = () => {
    if (userInfo.nickname === nickname && userInfo.user_mbti === user_mbti) {
      setChange(false);
    } else {
      setChange(true);
    }
  };

  const handleClick = () => {
    if (change !== true) {
      window.alert('프로필이 변경되지 않았습니다.');
      return false;
    }

    dispatch(userActions.updateUserInfoDB(newInfo));
  };

  useEffect(() => {
    if (user_image !== userInfo.user_image) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [user_image]);

  return (
    <div className={style.wrap}>
      <Goback color>프로필 수정</Goback>
      <ImageUpload profile url={userInfo.user_image} />
      <div className={style.editBox}>
        <p>닉네임</p>
        <input
          type='text'
          name='nickname'
          className={style.input}
          defaultValue={nickname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p>MBTI</p>
        <SelectMbti
          id='mbti'
          name='user_mbti'
          color='#333333'
          defaultValue={user_mbti}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div
        className={classnames(
          style.btnEdit,
          change ? style.btnEditOn : style.btnEditOff,
        )}
        onClick={handleClick}
      >
        수정 완료
      </div>
    </div>
  );
};

export default ProfileEdit;
