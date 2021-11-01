import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckIcon from '@mui/icons-material/Check';

import { userActions } from '../../redux/modules/user';
import { Input, Button, Form, FlexBox } from '../../elements';
import { TypeOfMbti } from '../../components';
import style from './signup.module.css';

const icon = {
  position: 'absolute',
  left: '5px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#555',
};

const SignUp = props => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    nickname: '',
    mbti: '',
    pwd: '',
    pwdCheck: '',
  });
  const { email, nickname, mbti, pwd, pwdCheck } = input;

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleBlur = e => {
    const { classList } = e.target;

    if (classList.contains('checkEmail')) {
      dispatch(userActions.isEmailDB(email));
    }

    if (classList.contains('checkNickname')) {
      dispatch(userActions.isNicknameDB(nickname));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pwd !== pwdCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    dispatch(userActions.signupDB(input));
  };

  return (
    <form //
      className={style.form}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <p>
        <PersonOutlineIcon style={icon} />
        <label htmlFor=''>이메일</label>
        <input
          name='email'
          type='text'
          placeholder='이메일'
          defaultValue={email}
          className='checkEmail'
          onBlur={handleBlur}
        />
      </p>
      <p>
        <CheckIcon style={icon} />
        <label htmlFor=''>닉네임</label>
        <input
          name='nickname'
          type='text'
          placeholder='닉네임'
          defaultValue={nickname}
          className='checkNickname'
          onBlur={handleBlur}
        />
      </p>
      <p>
        <label htmlFor=''>MBTI</label>
        <TypeOfMbti name='mbti' defaultValue={mbti} />
      </p>
      <p>
        <LockOpenIcon style={icon} />
        <label htmlFor=''>비밀번호</label>
        <input
          name='pwd'
          type='password'
          placeholder='비밀번호'
          defaultValue={pwd}
        />
      </p>
      <p>
        <LockOpenIcon style={icon} />
        <label htmlFor=''>비밀번호확인</label>
        <input
          name='pwdCheck'
          type='password'
          placeholder='비밀번호확인'
          defaultValue={pwdCheck}
        />
      </p>
      <button className={style.btnSignUp}>회원가입</button>
    </form>
  );
};

export default SignUp;
