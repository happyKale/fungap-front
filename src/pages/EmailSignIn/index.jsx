import React, { useState } from 'react';
import { Goback } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { history } from '../../redux/configureStore';
import style from './emailSignIn.module.css';

import { userActions } from '../../redux/modules/user';

const EmailSignIn = () => {
  const dispatch = useDispatch();
  // email 중복 체크(중복 된 이메일 있으면 true, 없으면 false)
  const emailCheckStatus = useSelector(state => state.user.is_email);

  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPwd, setCheckPwd] = useState(true);
  const [textColor, setTextColor] = useState('#c1c1c1');
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

    // select box 폰트 컬로 변경
    if (name === 'mbti' && e.target.value !== null) {
      setTextColor('#000000');
    }
  };

  const handleBlur = e => {
    const { classList } = e.target;

    // 아아디
    if (classList.contains('email')) {
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (!regExp.test(email)) {
        setCheckEmail(false);
        return false;
      } else {
        setCheckEmail(true);
      }
    }

    // 비밀번호
    if (classList.contains('pwd')) {
      // 비밀번호 형식 체크(8이상의 영문 숫자 조합)
      const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!regExp.test(pwd)) {
        setCheckPwd(false);
        return false;
      } else {
        // dispatch(userActions.isNicknameDB(nickname));
        setCheckPwd(true);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.signinDB(email, pwd));
  };

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
            placeholder='아이디로 설정할 이메일을 입력해주세요'
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
        <span
          onClick={() => {
            history.push('./signin_findpwd');
          }}
          className={style.pwdcheck}
        >
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

export default EmailSignIn;
