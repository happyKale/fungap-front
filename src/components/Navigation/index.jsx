import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './navigation.module.css';
// images
import home from '@assets/home.svg';
import chat from '@assets/chat.svg';
import user from '@assets/user.svg';

const Navigation = props => {
  const handleClick = e => {
    if (e.target === e.currentTarget) return false;

    const li = e.target.closest('li');
    const page = li.dataset.name;

    if (!li) return false;
    if (page === 'home') history.push('/');
    if (page === 'chat') history.push('/chatting');
    if (page === 'user') history.push('/userpage');
  };

  return (
    <nav className={style.nav}>
      <ul className={style.btnList} onClick={handleClick}>
        <li data-name='home' className={style.btn}>
          <img //
            src={home}
            alt='홈'
          />
          <span>홈</span>
        </li>
        <li data-name='chat' className={style.btn}>
          <img //
            src={chat}
            alt='채팅'
          />
          <span>친구들</span>
        </li>
        <li data-name='user' className={style.btn}>
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
