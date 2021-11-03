import React, { useEffect } from 'react';
import classnames from 'classnames';

import { history } from '../../redux/configureStore';
import style from './modal.module.css';

const Modal = ({
  title,
  desc,
  desc2,
  btnLeft,
  btnRight,
  clickBtnRight,
  maskClosable,
  onClose,
}) => {
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
          <h2>{title}</h2>
          <div className={style.desc}>
            <p>{desc}</p>
            {desc2 && <p>{desc2}</p>}
          </div>
          <ul className={style.btns}>
            <li>
              <button
                className={classnames(style.btn, style.btnClose)}
                onClick={closeModal}
              >
                {btnLeft}
              </button>
            </li>
            <li>
              <button
                className={classnames(style.btn, style.btnSignin)}
                onClick={clickBtnRight}
              >
                {btnRight}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Modal;
