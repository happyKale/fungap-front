import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './chat.module.css';
// images
import friendDefault from '@assets/friend_default.png';

const Chat = ({ image, name, message, category, chatId }) => {
  return (
    <>
      <div
        className={style.chatContent}
        onClick={() => {
          if (category === '준비중') {
            window.alert('아직 준비중인 컨텐츠입니다~!');
          } else {
            history.push(`/chatroom/${chatId}`);
          }
        }}
      >
        <img
          src={image ? image : friendDefault}
          className={style.chatUserImage}
          alt='캐릭터'
        />
        <div className={style.chatDesc}>
          <h3 className={style.chatName}>
            {name} <span className={style.chatCategory}>{category}</span>
          </h3>
          <p className={style.chatMessage}>
            {category !== '준비중'
              ? message
              : '준비중입니다. 조금만 기다려주세요.'}
          </p>
        </div>
      </div>
    </>
  );
};

export default Chat;
