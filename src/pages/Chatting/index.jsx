import React from 'react';
import style from './chatting.module.css';
import { history } from '../../redux/configureStore';
import { Chat } from '../../components';
import jinro from '../../assets/friend_jinro.png';
import Eimage from '../../assets/Eimage.png';
import Iimage from '../../assets/Iimage.png';
import Fimage from '../../assets/Fimage.png';
import Timage from '../../assets/Timage.png';
const Chatting = () => {
  const friend = {
    name: '상담이',
    image: jinro,
    category: '진로상담 #챗봇',
    message: 'mbti유형에 따라 직업을 추천해줄게!',
    chatId: '1',
  };
  const socketChattingList = [
    {
      name: '[E모임] 외향형 모여라',
      image: Eimage,
      category: '채팅',
      message: '시끌벅적한 외향형들과 함께!',
    },
    {
      name: '[I모임] 내향형 모여라',
      image: Iimage,
      category: '채팅',
      message: '잔잔하고 소소한 이야기 나누기! ',
    },
    {
      name: '[F모임] 감정형 모여라',
      image: Fimage,
      category: '채팅',
      message: '아무 생각없이 편하게 이야기하고싶어!',
    },
    {
      name: '[T모임] 사고형 모여라',
      image: Timage,
      category: '채팅',
      message: '이성적이 판단이 필요해?',
    },
  ];

  return (
    <React.Fragment>
      <p className={style.title}>채팅</p>
      <div className={style.container}>
        <Chat key={friend.chatId} chat {...friend} />
        {socketChattingList.map((Chatting, index) => {
          return <Chat key={index} chat {...Chatting} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Chatting;
