import React, { useState } from 'react';
import style from './chatInput.module.css';
import { socket } from '../../shared/socket';
import placholder from '../../assets/friend_default.png';

const ChatInput = props => {
  const userInfo = JSON.parse(sessionStorage.getItem('user'));
  const userId = JSON.parse(sessionStorage.getItem('user')).user_id;
  const [Message, setMessage] = useState({
    message: '',
    name: userInfo.nickname,
    userImage: userInfo?.user_image === '' ? placholder : userInfo.user_image,
    userId: userId,
  });
  const roomname = props.roomname;

  const sendMessage = e => {
    const { name, message, userImage } = Message;

    if (Message.message == '') {
      window.alert('메시지를 입력하세요');
    } else {
      socket.emit('send_message', roomname, name, userId, message, userImage);
    }
    setMessage({
      message: '',
      name: userInfo.nickname,
      userImage: userInfo.user_image === '' ? placholder : userInfo.user_image,
    });
  };

  const onMessageChange = e => {
    setMessage({
      name: userInfo.nickname,
      message: e.target.value,
      userImage: userInfo?.user_image === '' ? placholder : userInfo.user_image,
    });
  };

  const pressEnter = e => {
    if (e.key == 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.chatInputForm}>
          <input
            placeholder='메시지를 입력하세요.'
            value={Message.message || ''}
            onChange={onMessageChange}
            className={style.Input}
            onKeyPress={pressEnter}
          ></input>
          <div
            type='button'
            className={Message.message ? style.onButton : style.offButton}
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
