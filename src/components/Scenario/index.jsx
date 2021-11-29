import React from 'react';
import ChatBot from 'react-simple-chatbot';
import data from './data.js';
// route
import { history } from '@redux/configureStore';
// css
import style from './scenario.module.css';
// images
import profile from '@assets/profileplaceholder.png';
import jinro from '@assets/chatbot/friend_carrer.webp';

const Scenario = props => {
  const mbti = props.previousStep.message.toUpperCase();
  const list = data.filter(item => item.id.split('-')[0] === mbti);
  const imgPosition = list.findIndex(item => item.id.split('-').length === 3);
  const imgPositionList = [];
  const jobList = [];

  list[imgPosition - 1].options.forEach(item => {
    jobList.push(item.label);
    item.trigger = item.label + 'img';
  });

  jobList.forEach(job => {
    imgPositionList.push(list.findIndex(item => item.id.split('-')[1] === job));
  });

  for (let i = 0; i < 4; i++) {
    list.splice(imgPositionList[i] + i, 0, {
      id: jobList[i] + 'img',
      component: (
        <>
          <img
            className={style.jobImg}
            src={require(`../../assets/chatbot/${mbti}-${i + 1}.png`).default}
            alt={jobList[i]}
          />
        </>
      ),
      trigger: mbti + '-' + jobList[i] + '-' + 1,
    });
  }

  // 새로운 step 추가를 위해서 마지막 step의 트리거를 변경함
  list.map((item, idx) => {
    if (item.hasOwnProperty('options')) {
      item.options.forEach(i => {
        if (i.hasOwnProperty('end')) {
          delete i.end;
          i.trigger = 'last';
        }
      });
    }
  });

  // 새로 추가한 step
  const lastStep = [
    {
      id: 'last',
      message: '그랭! >.< 다음에 또 찾아와줘~',
      trigger: 'link',
    },
    {
      id: 'link',
      component: (
        <>
          <button
            className={style.button}
            onClick={() => {
              history.push('/');
            }}
          >
            홈으로 가기
          </button>
          <button
            className={style.button}
            onClick={() => {
              history.push('/chatting');
            }}
          >
            뒤로가기
          </button>
        </>
      ),
      end: true,
    },
  ];
  list.push(...lastStep);

  const userImg = JSON.parse(sessionStorage.getItem('user'));

  const otherFontTheme = {
    botBubbleColor: '#F3F3F3',
    botFontColor: '#000',
    userBubbleColor: '#F7DE6F',
    userFontColor: '#4a4a4a',
  };

  return (
    <>
      <div theme={otherFontTheme} className={style.chatBox} id='innerchatBox'>
        <ChatBot
          bubbleStyle={{ borderRadius: '8px', marginBottom: '10px' }}
          footerStyle={{ display: 'none' }}
          contentStyle={{
            position: 'relative',
            right: '0px',
            height: 'auto',
            width: 'calc(100%)',
            padding: '0px 0px 0px 0px',
            overflow: 'hidden',
          }}
          botAvatar={jinro}
          userAvatar={userImg?.user_image ? userImg?.user_image : profile}
          customStyle={{
            width: 'auto',
            boxShadow: 'none',
            padding: '0px',
            margin: '0px 0px 10px 60px',
            display: 'block',
          }}
          steps={list}
        ></ChatBot>
      </div>
    </>
  );
};

export default Scenario;
