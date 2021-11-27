import React from 'react';
import classnames from 'classnames';
// css
import style from './settingItem.module.css';

const SettingItem = ({ title, iconName, handleClick }) => {
  return (
    <div className={style.content}>
      <div //
        name='아이콘'
        className={classnames(style.icon, style[iconName])}
      />
      <p className={style.title} onClick={handleClick}>
        {title}
      </p>
    </div>
  );
};

export default SettingItem;
