import React from 'react';
import style from './chat.module.css';
import { useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
import profileImg from '../../assets/profileplaceholder.png';

const Chat = ({ chat, name, message, category, chatId }) => {
  const isLogin = useSelector(state => state.user.is_login);
  const userInfo = JSON.parse(sessionStorage.getItem('user'));

  const goProfileEdit = () => {
    history.push('/useredit');
  };

  if (!chat) {
    return (
      <React.Fragment>
        <div className={style.userContent}>
          <img
            className={style.userImage}
            alt='유저이미지'
            src={userInfo?.user_image ? userInfo.user_image : profileImg}
          />
          {isLogin ? (
            <div>
              <div className={style.userEdit}>
                <h3>{userInfo.nickname}님</h3>
                <button onClick={goProfileEdit}>></button>
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
  } else if (chat) {
    return (
      <React.Fragment>
        <div
          className={style.chatContent}
          onClick={() => {
            history.push(`/chatroom/${chatId}`);
          }}
        >
          <img src={profileImg} className={style.userImage} alt='캐릭터' />
          <div className={style.chatDesc}>
            <h3 className={style.chatName}>
              {name} <span className={style.chatCategory}>{category}</span>
            </h3>
            <p className={style.chatMessage}>{message}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Chat;
