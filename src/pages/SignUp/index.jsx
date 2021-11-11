import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import { userActions } from '../../redux/modules/user';
import { Goback, TypeOfMbti } from '../../components';
import style from './signup.module.css';

const SignUp = props => {
  const dispatch = useDispatch();
  // email 중복 체크(중복 된 이메일 있으면 true, 없으면 false)
  const emailCheckStatus = useSelector(state => state.user.is_email);
  const nicknameCheckStatus = useSelector(state => state.user.is_nickname);

  const [checkEmail, setCheckEmail] = useState(true);
  const [checkPwd, setCheckPwd] = useState(true);
  const [checkPwd2, setCheckPwd2] = useState(true);
  const [textColor, setTextColor] = useState('#c1c1c1');
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
        dispatch(userActions.isEmailDB(email));
        setCheckEmail(true);
      }
    }

    // 닉네임
    if (classList.contains('nickname')) {
      dispatch(userActions.isNicknameDB(nickname));
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

    // 비밀번호 확인
    if (classList.contains('pwdCheck')) {
      if (pwd !== pwdCheck) {
        setCheckPwd2(false);
        return false;
      } else {
        setCheckPwd2(true);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pwd !== pwdCheck) {
      alert('비밀번호를 다시 확인해주세요.');
      return false;
    }

    dispatch(userActions.signupDB(input));
  };

  return (
    <div className={style.wrap}>
      <Goback>로그인</Goback>
      <form //
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
        <p className={style.inputBox}>
          <label htmlFor='pwdCheck'>비밀번호확인</label>
          <input
            id='pwdCheck'
            name='pwdCheck'
            type='password'
            placeholder='8자 이상의 영문과 숫자의 조합으로 입력해주세요'
            defaultValue={pwdCheck}
            className={classnames('pwdCheck', !checkPwd2 && style.error)}
            onBlur={handleBlur}
          />
          {!checkPwd2 && (
            <span className={style.errorMeg}>
              비밀번호가 일치하지 않습니다.
            </span>
          )}
        </p>
        <p className={style.inputBox}>
          <label htmlFor='nickname'>닉네임</label>
          <input
            id='nickname'
            name='nickname'
            type='text'
            placeholder='닉네임'
            defaultValue={nickname}
            className={classnames(
              'nickname',
              nicknameCheckStatus && style.error,
            )}
            onBlur={handleBlur}
          />
          {nicknameCheckStatus && (
            <span className={style.errorMeg}>{nicknameCheckStatus}</span>
          )}
        </p>
        <p className={style.inputBox}>
          <label htmlFor='mbti'>MBTI유형</label>
          <TypeOfMbti
            id='mbti'
            name='mbti'
            color={textColor}
            defaultValue={mbti}
          />
        </p>
        <button
          className={classnames(
            style.btn,
            email && nickname && mbti && pwd && pwdCheck ? style.active : null,
          )}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
