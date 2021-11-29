import React from 'react';
import classnames from 'classnames';
// redux
import { useSelector } from 'react-redux';
// route
import { history } from '@redux/configureStore';
// css
import style from './navigation.module.css';

// images
import home from '@assets/icon/home.png';
import homeClicked from '@assets/icon/home_c.png';
import search from '@assets/icon/search.png';
import searchClicked from '@assets/icon/search_c.png';
import chat from '@assets/icon/chat.png';
import chatClicked from '@assets/icon/chat_c.png';
import user from '@assets/icon/user.png';
import userClicked from '@assets/icon/user_c.png';
import more from '@assets/icon/more.png';
import moreClicked from '@assets/icon/more_c.png';

const Navigation = props => {
  const isLogin = useSelector(state => state.user.is_login);
  const location = window.location.pathname;

  const handleClick = e => {
    if (e.target === e.currentTarget) return false;

    const li = e.target.closest('li');
    const page = li.dataset.name;

    if (!li) return false;
    if (page === 'home') history.push('/');
    if (page === 'search') history.push('/search');
    if (page === 'chatting') history.push('/chatting');
    if (page === 'user') history.push('/userpage');
  };

  return (
    <nav className={style.nav}>
      <ul className={style.btnList} onClick={handleClick}>
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
              className={classnames(style.btn, style.iconMy)}
              src={location === '/userpage' ? userClicked : user}
              alt='MY'
            />
          ) : (
            <img //
              className={style.btn}
              src={location === '/userpage' ? moreClicked : more}
              alt='더보기'
            />
          )}
          <span>{isLogin ? 'MY' : '더보기'}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
