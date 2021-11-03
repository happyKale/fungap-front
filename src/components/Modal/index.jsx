import React, { useEffect } from 'react';
import classnames from 'classnames';

import style from './modal.module.css';

const Modal = ({ maskClosable, onClose }) => {
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; width:100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const closeModal = e => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <>
      <div className={style.overlay}></div>
      <div className={style.outer} onClick={maskClosable ? onMaskClick : null}>
        <div className={style.inner}>
          <h2>로그인</h2>
          <div className={style.desc}>
            <p>댓글은 로그인 해야만 쓸 수 있어요!</p>
            <p>로그인 하루 가시겠어요?</p>
          </div>
          <ul className={style.btns}>
            <li>
              <button
                className={classnames(style.btn, style.btnClose)}
                onClick={closeModal}
              >
                닫기
              </button>
            </li>
            <li>
              <button className={classnames(style.btn, style.btnSignin)}>
                로그인 하러가기
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Modal;
