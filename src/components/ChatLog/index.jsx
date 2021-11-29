import React, { useEffect, useState, useRef } from 'react';
// redux
import { useSelector } from 'react-redux';
// util
import { socket } from '@shared/socket';
// css
import style from './chatLog.module.css';
// images
import placeholder from '@assets/background/profile_default.webp';

const ChatLog = props => {
  const userNickname = JSON.parse(sessionStorage.getItem('user')).nickname;
  const chatLogDB = useSelector(state => state.chat.logfromDB);
  const scrollRef = useRef();
  const [chat, setChat] = useState([]);

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  useEffect(() => {
    socket.on('receive_message', (name, message, userImage) => {
      setChat([...chat, { name, message, userImage }]);
    });

    scrollToBottom();
    return () => {
      socket.off('receive_message');
    };
  }, [chat]);

  useEffect(() => {
    setChat([...chatLogDB]);
  }, [chatLogDB]);

  return (
    <>
      <div ref={scrollRef}>
        {chat.map((msg, index) =>
          msg.name === userNickname ? (
            <div className={style.myMessageBox} key={index}>
              <p className={style.myMessage}>{msg.message}</p>
            </div>
          ) : (
            <div key={index} className={style.container}>
              <div className={style.userImage}>
                <img
                  src={msg.userImage === null ? placeholder : msg.userImage}
                  alt='유저이미지'
                />
              </div>
              <div className={style.chatBox}>
                <>
                  <span className={style.name}>{msg.name}</span>
                </>
                <p className={style.message}>{msg.message}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
};

export default ChatLog;
