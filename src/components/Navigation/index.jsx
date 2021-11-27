import React from 'react';

import { history } from '../../redux/configureStore';
import style from './navigation.module.css';
import chat from '../../assets/chat.svg';
import chatClicked from '../../assets/chat_clicked.png';
import home from '../../assets/home.png';
import search from '../../assets/search.png';
import ferris from '../../assets/ferriswheel.png';
import homeClicked from '../../assets/home_clicked.png';
import searchClicked from '../../assets/search_clicked.png';
import ferrisClicked from '../../assets/ferriswheel_clicked.png';
import user from '../../assets/user.png';
import userClicked from '../../assets/user_clicked.png';
import apps from '../../assets/apps.png';
import appsClicked from '../../assets/apps_clicked.png';
import { useSelector } from 'react-redux';

const Navigation = props => {
  const isLogin = useSelector(state => state.user.is_login);
  const location = window.location.pathname;
  const handleClick = e => {
    if (e.target === e.currentTarget) return false;

    const li = e.target.closest('li');
    const page = li.dataset.name;

    if (!li) return false;
    if (page === 'home') history.push('/');
    // if (page === 'contents') history.push('/contents_all');
    if (page === 'search') history.push('/search');
    if (page === 'chatting') history.push('/chatting');
    if (page === 'user') history.push('/userpage');
  };

  return (
    <nav className={style.nav}>
      <ul className={style.btnList} onClick={handleClick}>
        {/* <li data-name='home' className={style.btn}>
          <img //
            src={location === '/' ? homeClicked : home}
            alt='홈'
          />
          <span>홈</span>
        </li> */}
        <li data-name='home' className={style.btn}>
          <img //
            src={location === '/' ? homeClicked : home}
            alt='홈'
          />
          <span>홈</span>
        </li>
        <li data-name='search' className={style.btn}>
          <img //
            src={location === '/search' ? searchClicked : search}
            alt='검색'
          />
          <span>검색</span>
        </li>
        <li data-name='chatting' className={style.btn}>
          <img //
            src={location === '/chatting' ? chatClicked : chat}
            alt='채팅'
          />
          <span>채팅</span>
        </li>
        <li data-name='user' className={style.btn}>
          {isLogin ? (
            <img //
              className={style.btn}
              src={location === '/userpage' ? userClicked : user}
              alt='마이페이지'
            />
          ) : (
            <img //
              className={style.btn}
              src={location === '/userpage' ? appsClicked : apps}
              alt='더보기'
            />
          )}
          <span>{isLogin ? '마이페이지' : '더보기'}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
