import React from 'react';
import classnames from 'classnames';
// redux
import { useSelector } from 'react-redux';
// route
import { history } from '@redux/configureStore';
// css
import style from './userpageHeader.module.css';
// images
import defaultImg from '@assets/background/profile_default.webp';

const UserPageHeader = props => {
  const isLogin = useSelector(state => state.user.is_login);
  const userInfo = JSON.parse(sessionStorage.getItem('user'));

  const handleClick = e => {
    const { classList } = e.currentTarget;

    if (classList.contains('edit')) {
      history.push('/useredit');
    }
    if (classList.contains('signin')) {
      history.push('/signin');
    }
  };

  return (
    <div className={style.userInfo}>
      <div className={style.imageBox}>
        <img
          className={style.image}
          alt='유저이미지'
          src={userInfo?.user_image ? userInfo.user_image : defaultImg}
        />
      </div>
      {isLogin ? (
        <div
          className={classnames('edit', style.content)}
          onClick={handleClick}
        >
          <div>
            <h3>{userInfo.nickname}님</h3>
            {userInfo.user_mbti && (
              <span className={style.mbti}>{userInfo.user_mbti}</span>
            )}
          </div>
          <div className={style.btn}></div>
        </div>
      ) : (
        <div
          className={classnames('signin', style.content)}
          onClick={handleClick}
        >
          <h3>로그인 하러가기</h3>
          <div className={style.btn}></div>
        </div>
      )}
    </div>
  );
};

export default UserPageHeader;
