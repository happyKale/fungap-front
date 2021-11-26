import React from 'react';
import style from './chatRoom.module.css';
import { Goback, Scenario } from '../../components';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import profile from '../../assets/profileplaceholder.png';
import jinro from '../../assets/friend_jinro.png';

const ChatRoom = props => {
  const dispatch = useDispatch();
  const chatId = props.match.params.id;
  // Goback의 children은 친구들 리스트에서 chatId에 해당하는 친구의 이름을 가져오면 될 듯.
  const userImg = JSON.parse(sessionStorage.getItem('user'));
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

  const list = [0];
  const otherFontTheme = {
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
    <React.Fragment>
      <Goback page='/chatting'>캐릭터</Goback>
      <ThemeProvider theme={otherFontTheme}>
        <div className={style.chatBox}>
          {list.map(item => {
            return (
              <ChatBot
                bubbleStyle={{ borderRadius: '8px', marginBottom: '10px' }}
                contentStyle={{
                  height: 'calc(100% - 60px)',
                  width: 'calc(100%)',
                  boxsizing: 'border-box',
                  border: 'none',
                  padding: '0px 20px 0px 0px',
                  border: 'none',
                }}
                inputStyle={{
                  border: '3px solid rgb(245, 211, 59)',
                }}
                placeholder='ex) INFP'
                footerStyle={{
                  margin: '0px 20px 0px 0px',
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
            );
          })}
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default ChatRoom;
