import React, { useEffect, useState, useRef } from 'react';
import { socket } from '../../shared/socket';
import style from './chatLog.module.css';
import { useSelector } from 'react-redux';
import placeholder from '../../assets/profileplaceholder.png';

const ChatLog = props => {
  const scrollRef = useRef();
  const chatLogDB = useSelector(state => state.chat.logfromDB);
  const [chat, setChat] = useState([]);
  const userNickname = JSON.parse(sessionStorage.getItem('user')).nickname;

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  useEffect(() => {
    socket.on(
      'receive_message',
      (roomname, name, userId, message, userImage) => {
        setChat([...chat, { name, message, userImage }]);
      },
    );

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
