import React from 'react';
import style from './actionCompleteMessage.module.css';

const ActionCompleteMessage = props => {
  return (
    <div className={style.container}>
      <span>{props.message}</span>
    </div>
  );
};

export default ActionCompleteMessage;
