import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './scenario.module.css';
import ChatBot from 'react-simple-chatbot';
import data from './data.js';

import profile from '../../assets/profileplaceholder.png';
import jinro from '../../assets/friend_jinro.png';

const Scenario = props => {
  const mbti = props.previousStep.message.toUpperCase();
  console.log(data);
  const list = data.filter(item => item.id.split('-')[0] === mbti);

  // imgPosition-1 인덱스가 직업 선택하는 option있는 인덱스.
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
        <React.Fragment>
          <img
            className={style.jobImg}
            src={require(`../../assets/chatbot/${mbti}-${i + 1}.png`).default}
            alt={jobList[i]}
          />
        </React.Fragment>
      ),
      trigger: mbti + '-' + jobList[i] + '-' + 1,
    });
  }

  const userImg = JSON.parse(sessionStorage.getItem('user'));

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

  return (
    <React.Fragment>
      <div theme={otherFontTheme} className={style.chatBox} id='innerchatBox'>
        <ChatBot
          bubbleStyle={{ borderRadius: '8px', marginBottom: '10px' }}
          footerStyle={{ display: 'none' }}
          contentStyle={{
            position: 'relative',
            right: '0px',
            height: 'auto',
            width: '410px',
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
    </React.Fragment>
  );
};

export default Scenario;
