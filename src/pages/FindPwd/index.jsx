import React, { useState } from 'react';
import classnames from 'classnames';

import style from './findPwd.module.css';
import { Goback } from '../../components';
import apis from '../../shared/apis';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/modules/user';

const FindPwd = () => {
  const dispatch = useDispatch();
  const [checkAuthEmail, setCheckAuthEmail] = useState(true);
  const [checkCorrectEmail, setCheckCorrectEmail] = useState(true);
  const [checkSendCode, setCheckSendCode] = useState(true);
  const [checkPwd, setCheckPwd] = useState(true);
  const [checkPwd2, setCheckPwd2] = useState(true);
  const [authCodeDB, setAuthCodeDB] = useState('');
  const [input, setInput] = useState({
    authEmail: '',
    authCode: '',
    pwd: '',
    pwdCheck: '',
  });
  const { authEmail, authCode, pwd, pwdCheck } = input;

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const sendAuthCode = async e => {
    e.preventDefault();

    const auth_email = {
      email: authEmail,
    };

    console.log(auth_email);

    try {
      const response = await apis.authEmail(auth_email);
      const auth_code = response.data.auth_code;
      setAuthCodeDB(auth_code);
      setCheckCorrectEmail(true);
      setCheckSendCode(false);
    } catch (error) {
      if (error.response.data.errormessage === '존재하지 않는 이메일입니다.') {
        setCheckCorrectEmail(false);
      }
      console.log(error);
    }
  };

  const handleBlur = e => {
    const { classList } = e.target;

    // 아아디
    if (classList.contains('authEmail')) {
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (!regExp.test(authEmail)) {
        setCheckAuthEmail(false);
        return false;
      } else {
        setCheckAuthEmail(true);
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

    //인증번호 확인
    if (classList.contains('authCode')) {
      if (e.target.value.length > 0) {
        setCheckSendCode(true);
      } else {
        setCheckSendCode(false);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (authCodeDB !== authCode) {
      alert('인증번호가 틀립니다. 다시 확인해주세요.');
      return false;
    }

    // 바뀐 비밀번호를 서버로 전송.
    dispatch(userActions.changePwdDB(authEmail, pwd));
  };

  return (
    <>
      <Goback>비밀번호 찾기</Goback>
      <form
        className={style.form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className={style.authCheckBox}>
          <p className={style.inputBox}>
            <label htmlFor='authEmail'>인증받을 이메일 입력</label>
            <input
              id='authEmail'
              name='authEmail'
              type='text'
              placeholder='아이디를 입력하세요.'
              defaultValue={authEmail}
              className={classnames(
                'authEmail',
                !checkAuthEmail && style.error,
                !checkCorrectEmail && style.error,
              )}
              onBlur={handleBlur}
            />
          </p>
          <button
            className={classnames(style.btnSend, authEmail && style.active)}
            onClick={sendAuthCode}
          >
            전송
          </button>
          {!checkAuthEmail && checkCorrectEmail && (
            <span className={classnames(style.errorMeg, style.checkAuth)}>
              올바른 이메일 형식을 입력해주세요.
            </span>
          )}
          {!checkCorrectEmail && (
            <span className={classnames(style.errorMeg, style.checkAuth)}>
              등록되지 않은 이메일입니다.
            </span>
          )}
        </div>
        <p className={style.inputBox}>
          <label htmlFor='authCode'>인증번호 입력</label>
          <input
            id='authCode'
            name='authCode'
            type='text'
            placeholder='인증번호를 입력하세요.'
            defaultValue={authCode}
            className={classnames('authCode', !checkSendCode && style.confirm)}
            onBlur={handleBlur}
          />
          {!checkSendCode && (
            <span className={style.confirmMeg}>
              인증번호를 보냈습니다. 이메일을 확인해주세요.
            </span>
          )}
        </p>
        <p className={style.inputBox}>
          <label htmlFor='pwd'>새로운 비밀번호 입력</label>
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
          <label htmlFor='pwdCheck'>새로운 비밀번호 다시 입력</label>
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
        <button
          className={classnames(
            style.btn,
            authEmail && authCode && pwd && pwdCheck ? style.active : null,
          )}
        >
          수정완료
        </button>
      </form>
    </>
  );
};

export default FindPwd;
