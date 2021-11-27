import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
// css
import style from './chatRoom.module.css';
// components
import { Goback, Scenario } from '@components';
// images
import profile from '@assets/profileplaceholder.png';
import jinro from '@assets/friend_jinro.png';

const mbtiList = [
  'INFJ',
  'INFP',
  'ENFJ',
  'ENFP',
  'ISTP',
  'ISFP',
  'ESTP',
  'ESFP',
  'INTP',
  'INTJ',
  'ENTJ',
  'ENTP',
  'ISTJ',
  'ISFJ',
  'ESTJ',
  'ESFJ',
];

const OTHER_FONT_THEME = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#3441EC',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#F3F3F3',
  botFontColor: '#000',
  userBubbleColor: '#F7DE6F',
  userFontColor: '#4a4a4a',
};

const ChatRoom = props => {
  const userImg = JSON.parse(sessionStorage.getItem('user'));

  const steps = [
    {
      id: '1',
      message: '안녕~ 나는 상담이야!',
      trigger: '2',
    },
    {
      id: '2',
      message: '너의 성격유형에 맞는 직업을 추천해줄게~!',
      trigger: '3',
    },
    {
      id: '3',
      message: 'MBTI 유형을 입력해줘!',
      trigger: 'mbti',
    },
    {
      id: 'mbti',
      user: true,
      validator: value => {
        if (mbtiList.find(mbti => mbti === value.toUpperCase()) === undefined) {
          return 'MBTI를 입력해주세요!';
        }
        return true;
      },
      trigger: 'check',
    },
    {
      id: 'check',
      delay: false,
      component: <Scenario />,
      end: true,
    },
  ];

  return (
    <>
      <Goback use='chatbot'>캐릭터</Goback>
      <ThemeProvider theme={OTHER_FONT_THEME}>
        <div className={style.chatBox}>
          <ChatBot
            bubbleStyle={{ borderRadius: '8px', marginBottom: '10px' }}
            contentStyle={{
              height: 'calc(100% - 60px)',
              width: 'calc(100%)',
              boxsizing: 'border-box',
              border: 'none',
              padding: '0px 20px 0px 0px',
            }}
            inputStyle={{
              border: '3px solid rgb(245, 211, 59)',
            }}
            placeholder='ex) INFP'
            footerStyle={{
              borderTop: 'none',
              borderColor: 'white',
            }}
            botAvatar={jinro}
            userAvatar={userImg?.user_image ? userImg?.user_image : profile}
            steps={steps}
            customStyle={{
              boxShadow: 'none',
              padding: '0px',
              margin: '0px 0px 0px 0px',
              display: 'block',
            }}
          ></ChatBot>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ChatRoom;
