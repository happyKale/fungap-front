import React from 'react';
import style from './chatting.module.css';
import { history } from '../../redux/configureStore';
import { Chat } from '../../components';

import jinro from '../../assets/friend_jinro.png';

const Chatting = () => {
  const friendList = [
    {
      name: '상담이',
      image: jinro,
      category: '진로상담',
      message: '오늘 상담 즐거웠어~!',
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
    <React.Fragment>
      <p className={style.title}>친구들</p>
      <div className={style.container}>
        {friendList.map(friend => {
          return <Chat key={friend.chatId} chat {...friend} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Chatting;
