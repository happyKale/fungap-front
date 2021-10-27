import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userActions } from '../../redux/modules/user';
import { Input, Button, Form, FlexBox } from '../../elements';
import { TypeOfMbti } from '../../components';

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
    <Form //
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <FlexBox>
        <label htmlFor=''>이메일</label>
        <Input
          name='email'
          defaultValue={email}
          type='text'
          className='checkEmail'
          onBlur={handleBlur}
        />
      </FlexBox>
      <p>
        <label htmlFor=''>닉네임</label>
        <Input
          name='nickname'
          defaultValue={nickname}
          type='text'
          className='checkNickname'
          onBlur={handleBlur}
        />
      </p>
      <p>
        <label htmlFor=''>MBTI</label>
        <TypeOfMbti name='mbti' defaultValue={mbti} />
      </p>
      <p>
        <label htmlFor=''>비밀번호</label>
        <Input name='pwd' defaultValue={pwd} type='password' />
      </p>
      <p>
        <label htmlFor=''>비밀번호확인</label>
        <Input name='pwdCheck' defaultValue={pwdCheck} type='password' />
      </p>
      <Button className='signup'>회원가입</Button>
    </Form>
  );
};

export default SignUp;
