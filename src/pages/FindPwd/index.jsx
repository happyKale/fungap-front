import React, { useState } from 'react';
import classnames from 'classnames';
// api
import apis from '@shared/apis';
// redux
import { useDispatch } from 'react-redux';
import { userActions } from '@redux/modules/user';
// components
import { Goback } from '@components';
// util
import { idRegExp, pwdRegExp } from '@shared/validation';
// css
import style from './findPwd.module.css';

const FindPwd = () => {
  const dispatch = useDispatch();

  const [checkCorrectEmail, setCheckCorrectEmail] = useState(true);
  const [checkSendCode, setCheckSendCode] = useState(false);

  const [checkAuthEmail, setCheckAuthEmail] = useState(true);
  const [authCodeDB, setAuthCodeDB] = useState('');
  const [checkPwd, setCheckPwd] = useState(true);
  const [checkPwd2, setCheckPwd2] = useState(true);
  const [input, setInput] = useState({
    authEmail: '',
    authCodeUser: '',
    pwd: '',
    pwdCheck: '',
  });
  const { authEmail, authCodeUser, pwd, pwdCheck } = input;

  const sendAuthCode = async e => {
    e.preventDefault();

    const auth_email = {
      email: authEmail,
    };

    try {
      const response = await apis.authEmail(auth_email);
      const auth_code = response.data.auth_code;

      auth_code && setCheckCorrectEmail(true);
      auth_code && setCheckSendCode(true);
      setAuthCodeDB(auth_code);
    } catch (error) {
      error.response.data.errormessage && setCheckCorrectEmail(false);
      console.log(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleBlur = e => {
    const { classList, value } = e.target;

    // 아이디
    if (classList.contains('authEmail')) {
      if (!idRegExp.test(authEmail)) {
        setCheckAuthEmail(false);
        return false;
      } else {
        setCheckAuthEmail(true);
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

    // 비밀번호 확인
    if (classList.contains('pwdCheck')) {
      if (pwd !== pwdCheck) {
        setCheckPwd2(false);
        return false;
      } else {
        setCheckPwd2(true);
      }
    }

    // 인증코드 확인
    if (classList.contains('authCode')) {
      if (!value) {
        setCheckSendCode(true);
      } else {
        setCheckSendCode(false);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (authCodeDB !== authCodeUser) {
      alert('인증번호가 틀립니다. 다시 확인해주세요.');
      return false;
    }

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
          {/* 이메일 형식 체크 */}
          {!checkAuthEmail && checkCorrectEmail && (
            <span className={classnames(style.errorMeg, style.checkAuth)}>
              올바른 이메일 형식을 입력해주세요.
            </span>
          )}
          {/* 등록된 이메일인지 체크 */}
          {!checkCorrectEmail && (
            <span className={classnames(style.errorMeg, style.checkAuth)}>
              등록되지 않은 이메일입니다.
            </span>
          )}
        </div>
        <p className={style.inputBox}>
          <label htmlFor='authCodeUser'>인증번호 입력</label>
          <input
            id='authCodeUser'
            name='authCodeUser'
            type='text'
            placeholder='인증번호를 입력하세요.'
            defaultValue={authCodeUser}
            className={classnames('authCode', checkSendCode && style.confirm)}
            onBlur={handleBlur}
          />
          {/* 인증번호 체크 */}
          {checkSendCode && (
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
            authEmail && authCodeUser && pwd && pwdCheck ? style.active : null,
          )}
        >
          수정완료
        </button>
      </form>
    </>
  );
};

export default FindPwd;
