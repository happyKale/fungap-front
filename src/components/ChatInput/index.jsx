import React, { useState } from 'react';
// util
import { socket } from '@shared/socket';
// css
import style from './chatInput.module.css';
// images
import defaultImage from '@assets/background/friend_default.webp';

const ChatInput = ({ roomname }) => {
  const userInfo = JSON.parse(sessionStorage.getItem('user'));
  const userId = JSON.parse(sessionStorage.getItem('user')).user_id;
  const [message, setMessage] = useState({
    text: '',
    name: userInfo.nickname,
    userImage: userInfo?.user_image === '' ? defaultImage : userInfo.user_image,
    userId: userId,
  });

  const sendMessage = e => {
    const { text, name, userImage } = message;

    if (message.message === '') {
      window.alert('메시지를 입력하세요');
    } else {
      socket.emit('send_message', roomname, text, name, userImage, userId);
    }

    setMessage({
      text: '',
      name: userInfo.nickname,
      userImage:
        userInfo.user_image === '' ? defaultImage : userInfo.user_image,
    });
  };

  const onMessageChange = e => {
    setMessage({
      text: e.target.value,
      name: userInfo.nickname,
      userImage:
        userInfo?.user_image === '' ? defaultImage : userInfo.user_image,
    });
  };

  const pressEnter = e => {
    if (e.key !== 'Enter') return false;

    sendMessage();
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.form}>
          <input
            placeholder='메시지를 입력하세요.'
            value={message.text || ''}
            onChange={onMessageChange}
            className={style.input}
            onKeyPress={pressEnter}
          ></input>
          <div
            type='button'
            className={message.text ? style.btnOn : style.btnOff}
            onClick={sendMessage}
          >
            전송
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInput;
