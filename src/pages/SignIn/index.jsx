import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { history } from '../../redux/configureStore';
import { userActions } from '../../redux/modules/user';
import { Input, Button } from '../../elements';
import { KakaoSignIn, NaverSignIn } from '../';

const SignIn = props => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ id: '', pwd: '' });
  const { id, pwd } = input;

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleClick = e => {
    e.preventDefault();
    const { tagName, classList } = e.target;

    if (tagName !== 'BUTTON') {
      return false;
    }

    if (classList.contains('btnSignIn')) {
      console.log('로그인 클릭', id, pwd);
      dispatch(userActions.signinDB(id, pwd));
    }
    if (classList.contains('btnSignUp')) {
      history.push('/signup');
    }
    if (classList.contains('btnGoogleSignIn')) {
      console.log('구글 로그인 클릭');
    }
    if (classList.contains('btnKakaoSignIn')) {
      console.log('카카오 로그인 클릭');
    }
  };

  return (
    <form>
      <p>
        <label htmlFor=''>아이디</label>
        <Input
          name='id'
          defaultValue={id}
          type='text'
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor=''>비밀번호</label>
        <Input
          name='pwd'
          defaultValue={pwd}
          type='password'
          onChange={handleChange}
        />
      </p>
      <div className='buttonWrap' onClick={handleClick}>
        <Button className='btnSignIn'>로그인</Button>
        <Button className='btnSignUp'>회원가입</Button>
      </div>
      <div className='socialLogin' onClick={handleClick}>
        <Button className='btnGoogleSignIn'>구글로그인</Button>
        <KakaoSignIn />
        <NaverSignIn />
      </div>
    </form>
  );
};

export default SignIn;
