import React from 'react';
import classnames from 'classnames';
// redux
import { useSelector } from 'react-redux';
// route
import { history } from '@redux/configureStore';
// css
import style from './navigation.module.css';

// images
import home from '@assets/icon/home.webp';
import homeClicked from '@assets/icon/home_c.webp';
import search from '@assets/icon/search.webp';
import searchClicked from '@assets/icon/search_c.webp';
import chat from '@assets/icon/chat.webp';
import chatClicked from '@assets/icon/chat_c.webp';
import user from '@assets/icon/user.webp';
import userClicked from '@assets/icon/user_c.webp';
import more from '@assets/icon/more.webp';
import moreClicked from '@assets/icon/more_c.webp';

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
          <span className={location === '/' ? style.yellow : ''}>홈</span>
        </li>
        <li data-name='search' className={style.btn}>
          <img //
            src={location === '/search' ? searchClicked : search}
            alt='검색'
          />
          <span className={location === '/search' ? style.yellow : ''}>
            검색
          </span>
        </li>
        <li data-name='chatting' className={style.btn}>
          <img //
            src={location === '/chatting' ? chatClicked : chat}
            alt='채팅'
          />
          <span className={location === '/chatting' ? style.yellow : ''}>
            채팅
          </span>
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
          <span className={location === '/userpage' ? style.yellow : ''}>
            {isLogin ? 'MY' : '더보기'}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
