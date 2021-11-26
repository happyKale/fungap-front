import React from 'react';
import classnames from 'classnames';
// css
import style from './loader.module.css';

const Loader = props => {
  return (
    <>
      <div className={style.container}>
        <div className={style.loadBox}>
          <img
            src='https://i.pinimg.com/originals/49/db/58/49db58121197c490352b4ab3d978b6b0.gif'
            className={classnames(style.image)}
            alt='spinner'
          />
          <p className={style.text}>Loading</p>
        </div>
      </div>
    </>
  );
};

export default Loader;
