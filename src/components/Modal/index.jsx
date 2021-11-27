import React, { useEffect } from 'react';
import classnames from 'classnames';
// css
import style from './modal.module.css';

const Modal = ({
  title,
  desc,
  btnLeft,
  btnRight,
  btnRightType,
  clickBtnRight,
  maskClosable,
  onClose,
}) => {
  const onMaskClick = e => {
    if (e.target !== e.currentTarget) return false;

    onClose(e);
  };

  const closeModal = e => {
    if (!onClose) return false;

    onClose(e);
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px; width:100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <>
      <div className={style.overlay}></div>
      <div className={style.outer} onClick={maskClosable ? onMaskClick : null}>
        <div className={style.inner}>
          <div className={style.contents}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.desc}>{desc}</p>
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
                className={
                  btnRightType === 'leave'
                    ? classnames(style.btn, style.btnLeave)
                    : classnames(style.btn, style.btnSignin)
                }
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
