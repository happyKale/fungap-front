import React, { useState } from 'react';
import classnames from 'classnames';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@redux/modules/user';
// route
import { history } from '@redux/configureStore';
// components
import { Goback } from '@components';
// util
import { idRegExp, pwdRegExp } from '@shared/validation';
// css
import style from './signinEmail.module.css';

const SignInEmail = () => {
  const dispatch = useDispatch();
  // email 중복 체크(중복 된 이메일 있으면 true, 없으면 false)
  const emailCheckStatus = useSelector(state => state.user.is_email);

  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPwd, setCheckPwd] = useState(true);
  const [input, setInput] = useState({
    email: '',
    pwd: '',
  });
  const { email, pwd } = input;

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleBlur = e => {
    const { classList } = e.target;

    // 아이디
    if (classList.contains('email')) {
      if (!idRegExp.test(email)) {
        setCheckEmail(false);
        return false;
      } else {
        setCheckEmail(true);
      }
    }

    // 비밀번호
    if (classList.contains('pwd')) {
      if (!pwdRegExp.test(pwd)) {
        setCheckPwd(false);
        return false;
      } else {
        setCheckPwd(true);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.signinDB(email, pwd));
  };

  const handleClick = () => history.push('./signin_findpwd');

  return (
    <div>
      <Goback page='/signin'>이메일로 로그인</Goback>
      <form
        className={style.form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <p className={style.inputBox}>
          <label htmlFor='email'>아이디</label>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='이메일을 입력해주세요'
            defaultValue={email}
            className={classnames(
              'email',
              (!checkEmail || emailCheckStatus) && style.error,
            )}
            onBlur={handleBlur}
          />
          {!checkEmail && (
            <span className={style.errorMeg}>
              올바른 이메일 형식을 입력해주세요.
            </span>
          )}
          {emailCheckStatus && (
            <span className={style.errorMeg}>{emailCheckStatus}</span>
          )}
        </p>
        <p className={style.inputBox}>
          <label htmlFor='pwd'>비밀번호</label>
          <input
            id='pwd'
            name='pwd'
            type='password'
            placeholder='8자 이상의 영문과 숫자의 조합으로 입력해주세요'
            defaultValue={pwd}
            className={classnames('pwd', !checkPwd && style.error)}
            onBlur={handleBlur}
          />
          {!checkPwd && (
            <span className={style.errorMeg}>
              8자 이상의 영문과 숫자 조합을 입력해주세요.
            </span>
          )}
        </p>
        <span onClick={handleClick} className={style.pwdcheck}>
          비밀번호를 잊었어요
        </span>
        <button
          className={classnames(style.btn, email && pwd ? style.active : null)}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignInEmail;
