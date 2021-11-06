import React from 'react';
import style from './chatting.module.css';
import { history } from '../../redux/configureStore';
import { Chat } from '../../components';

const Chatting = () => {
  const friendList = [
    {
      name: '진로',
      category: '진로상담',
      message: '오늘 상담 즐거웠어~!',
      chatId: '1',
    },
    {
      name: '토탁이',
      category: '공감',
      message: '잘 할 수 있어. 우리 같이 힘내보자!',
      chatId: '2',
    },
    {
      name: '흥신소장',
      category: '닮은사람찾기',
      message: '다음에도 놀러와~',
      chatId: '3',
    },
  ];

  return (
    <React.Fragment>
      <p className={style.title}>친구들</p>
      {friendList.map(friend => {
        return <Chat key={friend.chatId} chat {...friend} />;
      })}
    </React.Fragment>
  );
};

export default Chatting;
