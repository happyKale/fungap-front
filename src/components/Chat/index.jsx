import React from 'react';
import style from './chat.module.css';
import { useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
const Chat = ({ ...rest }) => {
  const isLogin = useSelector(state => state.user.is_login);
  const userInfo = JSON.parse(sessionStorage.getItem('user'));

  const goProfileEdit = () => {
    history.push('/useredit');
  };
  return (
    <React.Fragment>
      <div className={style.userContent}>
        <img
          className={style.userImage}
          alt='유저이미지'
          src={
            userInfo?.user_image
              ? userInfo.user_image
              : 'https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
          }
        />
        {isLogin ? (
          <div>
            <div className={style.userEdit}>
              <h3>{userInfo.nickname}님</h3>
              <button onClick={goProfileEdit}>수정</button>
            </div>

            <p>즐거운 시간 되세요!</p>
            <span>{userInfo.user_mbti}</span>
          </div>
        ) : (
          <div>
            <h3>로그인 하러가기</h3>
            <p>로그인 후 더 많은 이야기를 나눠 보세요</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Chat;
