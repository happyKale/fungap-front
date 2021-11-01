import React from 'react';

import style from './index.module.css';
import home from '../../assets/home.svg';
import chat from '../../assets/chat.svg';
import user from '../../assets/user.svg';

const Navigation = props => {
  const handleClick = e => {
    const { tagName } = e.target;

    if (tagName !== 'UL') {
      console.log('icon click');
    }
  };

  return (
    <nav>
      <ul className={style.btnList} onClick={handleClick}>
        <li className={style.btn}>
          <img //
            src={home}
            alt='홈'
          />
          <span>홈</span>
        </li>
        <li className={style.btn}>
          <img //
            src={chat}
            alt='채팅'
          />
          <span>친구들</span>
        </li>
        <li className={style.btn}>
          <img //
            className={style.btnUser}
            src={user}
            alt='프로필'
          />
          <span>프로필</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
