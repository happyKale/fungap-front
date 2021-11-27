import React from 'react';
// components
import { Chat } from '../../components';
// css
import style from './chatting.module.css';
// images
import jinro from '../../assets/friend_jinro.png';

const Chatting = () => {
  const friendList = [
    {
      name: '상담이',
      image: jinro,
      category: '진로상담',
      message: 'mbti유형에 따라 직업을 추천해줄게!',
      chatId: '1',
    },
    {
      name: '토닥이',
      image: '',
      category: '준비중',
      message: '',
      chatId: '2',
    },
    {
      name: '점쟁이',
      image: '',
      category: '준비중',
      message: '',
      chatId: '3',
    },
    {
      name: '연애코치',
      image: '',
      category: '준비중',
      message: '',
      chatId: '4',
    },
    {
      name: '음악이',
      image: '',
      category: '준비중',
      message: '',
      chatId: '5',
    },
  ];

  return (
    <>
      <p className={style.title}>친구들</p>
      <div className={style.container}>
        {friendList.map(friend => {
          return <Chat key={friend.chatId} chat {...friend} />;
        })}
      </div>
    </>
  );
};

export default Chatting;
