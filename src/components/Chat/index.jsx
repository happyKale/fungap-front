import React from 'react';
// route
import { history } from '@redux/configureStore';
// css
import style from './chat.module.css';

const Chat = ({ image, name, message, category, chatId }) => {
  return (
    <>
      <div
        className={style.chatContent}
        onClick={() => {
          if (category === '진로상담 #챗봇') {
            history.push(`/chatroom/${chatId}`);
          } else if (name === '[E모임] 외향형 모여라') {
            history.push('/channele');
          } else if (name === '[I모임] 내향형 모여라') {
            history.push('/channeli');
          } else if (name === '[F모임] 감정형 모여라') {
            history.push('/channelf');
          } else if (name === '[T모임] 사고형 모여라') {
            history.push('/channelt');
          }
        }}
      >
        <img src={image} className={style.chatUserImage} alt='캐릭터' />
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
