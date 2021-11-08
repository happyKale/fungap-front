import React from 'react';
import style from './chatRoom.module.css';
import { Goback } from '../../components';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const ChatRoom = props => {
  const chatId = props.match.params.id;
  // Goback의 children은 친구들 리스트에서 chatId에 해당하는 친구의 이름을 가져오면 될 듯.
  const mbtiList = [
    { key: 'INFJ' },
    { key: 'INFP' },
    { key: 'ENFJ' },
    { key: 'ENFP' },
    { key: 'ISTP' },
    { key: 'ISFP' },
    { key: 'ESTP' },
    { key: 'ESFP' },
    { key: 'INTP' },
    { key: 'INTJ' },
    { key: 'ENTJ' },
    { key: 'ENTP' },
    { key: 'ISTJ' },
    { key: 'ISFJ' },
    { key: 'ESTJ' },
    { key: 'ESFJ' },
  ];

  const otherFontTheme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#3441EC',
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: '#3441EC',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const steps = [
    {
      id: '1',
      message: '안녕~ 나는 진로야!',
      trigger: '2',
    },
    {
      id: '2',
      message: '너의 성격유형에 맞는 직업을 추천해줄게~!',
      trigger: '3',
    },
    {
      id: '3',
      message: '너의 MBTI를 알려줄래?',
      trigger: '4',
    },

    {
      id: '4',
      options: [
        { value: 1, label: 'INTJ', trigger: '1' },
        { value: 2, label: 'INTP', trigger: 'INTP-1' },
        { value: 3, label: 'ENTJ', trigger: '1' },
        { value: 4, label: 'ENTP', trigger: 'ENTP-1' },
        { value: 5, label: 'INFJ', trigger: 'INFJ-1' },
        { value: 6, label: 'INFP', trigger: 'INFP-1' },
        { value: 7, label: 'ENFJ', trigger: '1' },
        { value: 8, label: 'ENFP', trigger: '1' },
        { value: 9, label: 'ISTJ', trigger: '1' },
        { value: 10, label: 'ISFJ', trigger: 'ISFJ-1' },
        { value: 11, label: 'ESTJ', trigger: '1' },
        { value: 12, label: 'ESFJ', trigger: '1' },
        { value: 13, label: 'ISTP', trigger: 'ISTP-1' },
        { value: 14, label: 'ISFP', trigger: 'ISFP-1' },
        { value: 15, label: 'ESTP', trigger: 'ESTP-1' },
        { value: 16, label: 'ESFP', trigger: '1' },
      ],
    },
    {
      id: 'INTP-1',
      message: 'INTP라구? 그렇다면 논리적인 생각을 좋아하지! 맞아?',
      trigger: 'INTP-2',
    },
    {
      id: 'INTP-2',
      options: [
        { value: 1, label: '응 맞아!', trigger: 'INTP-3' },
        { value: 2, label: '음... 그런거 같은데?', trigger: 'INTP-3' },
      ],
    },
    {
      id: 'INTP-3',
      message:
        '후후, 그리고 남들과는 다른 독창성과 창의력을 가지고 있어 그렇지? ',
      trigger: 'INTP-4',
    },
    {
      id: 'INTP-4',
      options: [
        { value: 1, label: '맞아! 난 창의적이라구!', trigger: 'INTP-5' },
        { value: 2, label: '흠... 어떻게 알았지?', trigger: 'INTP-5' },
      ],
    },
    {
      id: 'INTP-5',
      message: `INTP는 전체 인구의 3% 정도를 차지하는 흔치 않는 유형이야!`,
      trigger: 'INTP-6',
    },
    {
      id: 'INTP-6',
      message: '너만의 독특한 관점과 왕성한 지적호기심을 가지고 있지! 맞아?',
      trigger: 'INTP-7',
    },
    {
      id: 'INTP-7',
      options: [
        { value: 1, label: '맞아 호기심이 많아!', trigger: 'INTP-8' },
        { value: 2, label: '나에 대해 잘 아는걸?', trigger: 'INTP-8' },
      ],
    },
    {
      id: 'INTP-8',
      message: '혹시 가끔 너만의 몽상에 빠져서 시간을 보내기도 하지?',
      trigger: 'INTP-9',
    },
    {
      id: 'INTP-9',
      options: [
        { value: 1, label: '그건 들키고 싶지 않았는데!', trigger: 'INTP-10' },
        { value: 2, label: '그랬을지도...?', trigger: 'INTP-10' },
      ],
    },
    {
      id: 'INTP-10',
      message: '좋아! 논리적인 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'INTP-11',
    },
    {
      id: 'INTP-11',
      options: [
        { value: 1, label: '연구원', trigger: 'INTP-연구원' },
        { value: 2, label: '심리학자', trigger: 'INTP-심리학자-1' },
        { value: 3, label: '프로그래머', trigger: 'INTP-프로그래머-1' },
        { value: 4, label: '수학자', trigger: 'INTP-수학자-1' },
      ],
    },
    {
      id: 'INTP-연구원',
      component: (
        <img
          className={style.image}
          src='https://blog.kakaocdn.net/dn/bTEhUV/btqECug9iOs/mxgZUk4MLJVCK3xtcNe6NK/img.jpg'
          alt='연구원이미지'
        />
      ),
      trigger: 'INTP-연구원-1',
    },
    {
      id: 'INTP-연구원-1',
      message:
        '연구원이 하는 일은 전문적인 분야에서 실험을 통한 결과를 논리적으로 분석하여 기술적인 발전에 기여하는 일을 해! ',
      trigger: 'INTP-연구원-2',
    },
    {
      id: 'INTP-연구원-2',
      message: '연봉은 석사 연구원 4천만원 박사 연구원 5천만원 정도야',
      trigger: 'INTP-연구원-3',
    },
    {
      id: 'INTP-연구원-3',
      message:
        '현재 꾸준히 연봉이 늘어나고 있어서 유망 분야에선 전망이 아주 좋아',
      trigger: 'INTP-연구원-4',
    },
    {
      id: 'INTP-연구원-4',
      message:
        ' 성장이 기대되는 분야는 신재생에너지, 제약, 인공지능, 유전공학 등이 있어! ',
      trigger: 'INTP-연구원-5',
    },
    {
      id: 'INTP-연구원-5',
      message: '다른 직업들도 다시 볼래?',
      trigger: 'INTP-연구원-6',
    },
    {
      id: 'INTP-연구원-6',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'INTP-심리학자-1',
      message:
        '심리학자는 인간의 행동과 정신적 과정을 과학적이고 체계적 방법을 통해 연구해!',
      trigger: 'INTP-심리학자-2',
    },
    {
      id: 'INTP-심리학자-2',
      message:
        '연구 결과를 통해 의학이나 교육, 산업 현장에서 응용할 수 있는 심리학적 지식과 정보 등을 제공하지! ',
      trigger: 'INTP-심리학자-3',
    },
    {
      id: 'INTP-심리학자-3',
      message: '심리학자의 연봉은 3235만원부터 시작해!',
      trigger: 'INTP-심리학자-4',
    },
    {
      id: 'INTP-심리학자-4',
      message:
        '현대사회에서 국민의 정신 보건에 대한 중요성이 강조되고, 인사선발과정, 인사컨설팅, ',
      trigger: 'INTP-심리학자-5',
    },
    {
      id: 'INTP-심리학자-5',
      message:
        '청소년의 진로개발 등의 분야에서도 심리검사 수요가 증가하고 있어 고용 수가 연 1.9% 증가할 전망이야! ',
      trigger: 'INTP-심리학자-6',
    },
    {
      id: 'INTP-심리학자-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'INTP-심리학자-7',
    },
    {
      id: 'INTP-심리학자-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'INTP-프로그래머-1',
      message:
        '프로그래머는 컴퓨터 프로그램의 논리나 알고리즘을 설계하고, 원시 코드를 작성하여 테스트하는 사람이야!',
      trigger: 'INTP-프로그래머-2',
    },
    {
      id: 'INTP-프로그래머-2',
      message:
        '프로그래머로서 일을 하기 위해서는 적어도 컴퓨터에 대한 충분한 지식이 필요하구 세심한 주의력과 깊은 추리력이 요구돼! ',
      trigger: 'INTP-프로그래머-3',
    },
    {
      id: 'INTP-프로그래머-3',
      message:
        '연봉은 3577만원 정도로 시작하구 연차에 따라 7천만원까지도 상승해!',
      trigger: 'INTP-프로그래머-4',
    },
    {
      id: 'INTP-프로그래머-4',
      message:
        ' 4차 산업혁명의 시대가 본격화 되면서 기업체의 수요도가 나날이 증가해 전망이 좋다구! ',
      trigger: 'INTP-프로그래머-5',
    },
    {
      id: 'INTP-프로그래머-5',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'INTP-프로그래머-6',
    },
    {
      id: 'INTP-프로그래머-6',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'INTP-수학자-1',
      message: '수학적 지식과 이론을 발전시키기 위한 연구를 수행하며 ',
      trigger: 'INTP-수학자-2',
    },
    {
      id: 'INTP-수학자-2',
      message:
        '수학적 이론과 기법을 활용하여 경제학, 과학, 공학, 물리학 등의 관련 문제를 해결하기 위한 연구를 하는 직업이야!',
      trigger: 'INTP-수학자-3',
    },
    {
      id: 'INTP-수학자-3',
      message: '연봉은 4576만원 정도구',
      trigger: 'INTP-수학자-4',
    },
    {
      id: 'INTP-수학자-4',
      message: '향후 10년간 고용은 연평균 2.4% 증가할 것으로 전망돼. ',
      trigger: 'INTP-수학자-5',
    },
    {
      id: 'INTP-수학자-5',
      message:
        '4차 산업혁명 시대에는 빅데이터와 접목한 비즈니스가 활발해지고 있어서 ',
      trigger: 'INTP-수학자-6',
    },
    {
      id: 'INTP-수학자-6',
      message:
        '데이터 분석에 접목할 수 있는 수학연구원에 대한 인력수요가 증가한다고 해!',
      trigger: 'INTP-수학자-7',
    },
    {
      id: 'INTP-수학자-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'INTP-수학자-8',
    },
    {
      id: 'INTP-수학자-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },

    {
      id: 'ISFJ-1',
      message: 'ISFJ구나~ 용감한 수호자! 라는데 맞는거 같아?',
      trigger: 'ISFJ-2',
    },
    {
      id: 'ISFJ-2',
      options: [
        { value: 1, label: '응 맞아!', trigger: 'ISFJ-3' },
        { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ISFJ-3' },
      ],
    },
    {
      id: 'ISFJ-3',
      message:
        '타인을 향한 연민이나 동정심이 있으면서도 가족이나 친구를 보호해야 할 때는 가차 없는 모습을 보이기도 하지. 맞니?',
      trigger: 'ISFJ-4',
    },
    {
      id: 'ISFJ-4',
      options: [
        { value: 1, label: '음... 맞는 거 같아!', trigger: 'ISFJ-5' },
        { value: 2, label: '맞는거 같기두?', trigger: 'ISFJ-5' },
      ],
    },
    {
      id: 'ISFJ-5',
      message: `ISFJ는 전체 인구의 13% 정도로 꽤 높은 인구 비율을 차지해!`,
      trigger: 'ISFJ-6',
    },
    {
      id: 'ISFJ-6',
      message:
        '완벽주의자만큼이나 세심하고 꼼꼼한 면모를 보이기도 하지, 안그래?',
      trigger: 'ISFJ-7',
    },
    {
      id: 'ISFJ-7',
      options: [
        { value: 1, label: '맞아 난 세심한 사람이야!', trigger: 'ISFJ-8' },
        { value: 2, label: '나에 대해 잘 아는걸?', trigger: 'ISFJ-8' },
      ],
    },
    {
      id: 'ISFJ-8',
      message:
        '후후! 넌 가치 있다고 여기는 일이 마무리되지 않고 있으면 게으르게 가만히 앉아만 있지 못하는 성격이지?',
      trigger: 'ISFJ-9',
    },
    {
      id: 'ISFJ-9',
      options: [
        { value: 1, label: '어떻게 알았어?', trigger: 'ISFJ-10' },
        { value: 2, label: '그런것 같아!', trigger: 'ISFJ-10' },
      ],
    },
    {
      id: 'ISFJ-10',
      message: '좋아! 세심하고 마음 따뜻한 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'ISFJ-11',
    },
    {
      id: 'ISFJ-11',
      options: [
        { value: 1, label: '물리치료사', trigger: 'ISFJ-물리치료사-1' },
        { value: 2, label: '치과의사', trigger: 'ISFJ-치과의사-1' },
        { value: 3, label: '상담사', trigger: 'ISFJ-상담사-1' },
        {
          value: 4,
          label: '스포츠 트레이너',
          trigger: 'ISFJ-스포츠 트레이너-1',
        },
      ],
    },
    {
      id: 'ISFJ-물리치료사-1',
      message:
        '물리치료사는 온열치료, 전기치료, 광선치료, 수치료, 기계 및 기구 치료, 마사지, 기능훈련, 신체교정운동 및 재활훈련과 같은 물리요법적 치료를 하는 사람이야! ',
      trigger: 'ISFJ-물리치료사-2',
    },
    {
      id: 'ISFJ-물리치료사-2',
      message: '연봉은 3037만원 정도야!',
      trigger: 'ISFJ-물리치료사-3',
    },
    {
      id: 'ISFJ-물리치료사-3',
      message:
        '최근에 발달장애 아동 및 노인의 재활분야에 대한 사회복지 제도가 확대되면서',
      trigger: 'ISFJ-물리치료사-4',
    },
    {
      id: 'ISFJ-물리치료사-4',
      message: '물리치료사의 수요 증가 요인으로 작용하고 있어!',
      trigger: 'ISFJ-물리치료사-5',
    },
    {
      id: 'ISFJ-물리치료사-5',
      message: '따라서 향후 10년간 고용은 연평균 2.3% 증가할 것으로 전망된대!',
      trigger: 'ISFJ-물리치료사-6',
    },
    {
      id: 'ISFJ-물리치료사-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISFJ-물리치료사-7',
    },
    {
      id: 'ISFJ-물리치료사-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISFJ-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISFJ-치과의사-1',
      message:
        '치과의사는 치아와 구강의 질환을 치료, 교정, 대치하여 예방하는 일을 해!',
      trigger: 'ISFJ-치과의사-2',
    },
    {
      id: 'ISFJ-치과의사-2',
      message:
        '충치나 손상된 치아를 치료하며 인공적 장치물로 대치시키기도 하지! ',
      trigger: 'ISFJ-치과의사-3',
    },
    {
      id: 'ISFJ-치과의사-3',
      message: '치과의사의 연봉은 평균 9234만원이야!',
      trigger: 'ISFJ-치과의사-4',
    },
    {
      id: 'ISFJ-치과의사-4',
      message: '향후 10년간 고용은 연평균 2.1% 증가할 것으로 전망돼!',
      trigger: 'ISFJ-치과의사-5',
    },
    {
      id: 'ISFJ-치과의사-5',
      message:
        '건강보험제도 혜택의 범위가 구강건강까지 확대되고 있고, 평균 수명이 늘어나면서 보철 및 임플란트 수요가 증가되었기 때문이야!',
      trigger: 'ISFJ-치과의사-6',
    },
    {
      id: 'ISFJ-치과의사-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISFJ-치과의사-7',
    },
    {
      id: 'ISFJ-치과의사-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISFJ-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISFJ-상담사-1',
      message:
        '상담사는 성격, 적성, 지능, 진로 및 신체적ㆍ정서적 증상 등에 대해서 어려움을 겪고 있거나',
      trigger: 'ISFJ-상담사-2',
    },
    {
      id: 'ISFJ-상담사-2',
      message:
        '변화를 모색하는 개인에게 심리검사, 상담 프로그램 등을 활용해 문제 해결을 돕고 지원하는 일을 해! ',
      trigger: 'ISFJ-상담사-3',
    },
    {
      id: 'ISFJ-상담사-3',
      message: '연봉은 2900만원 정도야',
      trigger: 'ISFJ-상담사-4',
    },
    {
      id: 'ISFJ-상담사-4',
      message: '현대사회에서 국민의 정신보건에 대한 중요성이 강조되고 있고, ',
      trigger: 'ISFJ-상담사-5',
    },
    {
      id: 'ISFJ-상담사-5',
      message:
        '스트레스나 우울증, 대인기피증, 정신분열증 등 현대인의 정신건강이 사회적 문제가 되면서 적극적인 예방과 치료에 대한 필요인식이 증가되고있어! ',
      trigger: 'ISFJ-상담사-6',
    },
    {
      id: 'ISFJ-상담사-6',
      message:
        '따라서 향후 10년간 고용은 연평균 1.9% 증가할 것으로 전망되고 있어! ',
      trigger: 'ISFJ-상담사-7',
    },
    {
      id: 'ISFJ-상담사-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISFJ-상담사-8',
    },
    {
      id: 'ISFJ-상담사-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISFJ-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISFJ-스포츠 트레이너-1',
      message: '스포츠 트레이너는 운동선수들의 건강상태를 확인하고',
      trigger: 'ISFJ-스포츠 트레이너-2',
    },
    {
      id: 'ISFJ-스포츠 트레이너-2',
      message:
        '선수들이 경기에서 최상의 컨디션을 발휘할 수 있도록 조언하고 훈련시키는 일을 해!',
      trigger: 'ISFJ-스포츠 트레이너-3',
    },
    {
      id: 'ISFJ-스포츠 트레이너-3',
      message: '연봉은 3505만원 정도야!',
      trigger: 'ISFJ-스포츠 트레이너-4',
    },
    {
      id: 'ISFJ-스포츠 트레이너-4',
      message: '운동선수 뿐만 아니라 재활병원, 일반인을 대상으로도. ',
      trigger: 'ISFJ-스포츠 트레이너-5',
    },
    {
      id: 'ISFJ-스포츠 트레이너-5',
      message:
        '부상방지 및 재활에 스포츠 트레이너의 역할이 강조되고 있기 때문에',
      trigger: 'ISFJ-스포츠 트레이너-6',
    },
    {
      id: 'ISFJ-스포츠 트레이너-6',
      message: '향후 10년간 고용은 연평균 2.1% 증가되는 전망이래!',
      trigger: 'ISFJ-스포츠 트레이너-7',
    },
    {
      id: 'ISFJ-스포츠 트레이너-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISFJ-스포츠 트레이너-8',
    },
    {
      id: 'ISFJ-스포츠 트레이너-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISFJ-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },

    {
      id: 'INFP-1',
      message: 'INFP 구나~ 열정적인 중재자! 맞는거 같아?',
      trigger: 'INFP-2',
    },
    {
      id: 'INFP-2',
      options: [
        { value: 1, label: '응 맞아!', trigger: 'INFP-3' },
        { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'INFP-3' },
      ],
    },
    {
      id: 'INFP-3',
      message:
        '음... 긍정적이고 더 나은 상황을 만들고자 노력하는 진정한 이상주의자! 맞니?',
      trigger: 'INFP-4',
    },
    {
      id: 'INFP-4',
      options: [
        { value: 1, label: '음... 맞는 거 같아!', trigger: 'INFP-5' },
        { value: 2, label: '맞는거 같기두?', trigger: 'INFP-5' },
      ],
    },
    {
      id: 'INFP-5',
      message: `INFP는 전체 인구의 대략 4% 정도로 희소성이 높은 MBTI야`,
      trigger: 'INFP-6',
    },
    {
      id: 'INFP-6',
      message:
        '조용하거나 겸손해 보일 수 있지만 내면에는 활기차고 열정적인 마음을 가지고 있지! 안그래?',
      trigger: 'INFP-7',
    },
    {
      id: 'INFP-7',
      options: [{ value: 1, label: '맞아! 잘 아는걸?', trigger: 'INFP-8' }],
    },
    {
      id: 'INFP-8',
      message:
        '후후! 낭만이 많은 성격이며 관심분야에 대한 혼자만의 취미생활이 있지? ',
      trigger: 'INFP-9',
    },
    {
      id: 'INFP-9',
      options: [
        { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'INFP-10' },
        { value: 2, label: '그런것 같아!', trigger: 'INFP-10' },
      ],
    },
    {
      id: 'INFP-10',
      message: '좋아! 감성적이며 활기찬 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'INFP-11',
    },
    {
      id: 'INFP-11',
      options: [
        { value: 1, label: '프로듀서', trigger: 'INFP-프로듀서-1' },
        { value: 2, label: '작가', trigger: 'INFP-작가-1' },
        { value: 3, label: '심리학자', trigger: 'INFP-심리학자-1' },
        { value: 4, label: '영양사', trigger: 'INFP-영양사-1' },
      ],
    },
    {
      id: 'INFP-프로듀서-1',
      message:
        '프로듀서는 라디오 또는 텔레비전의 프로그램을 기획하고 제작하는 일을 해!',
      trigger: 'INFP-프로듀서-2',
    },
    {
      id: 'INFP-프로듀서-2',
      message:
        '완성된 대본을 평가하고 프로그램을 기획해 제작진과 연기자들을 선출하지',
      trigger: 'INFP-프로듀서-3',
    },
    {
      id: 'INFP-프로듀서-3',
      message:
        '뿐만 아니라 의상, 무대배경, 음악, 카메라작업 등을 결정하기 위해 제작진과 협의하는 사람이지!',
      trigger: 'INFP-프로듀서-4',
    },
    {
      id: 'INFP-프로듀서-4',
      message: '연봉은 4701만원 정도야!',
      trigger: 'INFP-프로듀서-5',
    },
    {
      id: 'INFP-프로듀서-5',
      message: '뉴미디어의 발전으로 방송이 점차 다매체, 다채널화 되어',
      trigger: 'INFP-프로듀서-6',
    },
    {
      id: 'INFP-프로듀서-6',
      message:
        '방송프로그램의 제작 수가 증가함에 따라 인력수요도 증가하고 있어!',
      trigger: 'INFP-프로듀서-7',
    },
    {
      id: 'INFP-프로듀서-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'INFP-프로듀서-8',
    },
    {
      id: 'INFP-프로듀서-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'INFP-작가-1',
      message: '작가는 예술과 취미의 분야에서 작품을 창작하는 사람을 말해!',
      trigger: 'INFP-작가-2',
    },
    {
      id: 'INFP-작가-2',
      message: '연봉은 3309만원 정도야!',
      trigger: 'INFP-작가-3',
    },
    {
      id: 'INFP-작가-3',
      message:
        '앞으로의 전망은 국민의 소득상승과 생활수준 향상으로 문화콘텐츠의 수요가 증가하고 있고',
      trigger: 'INFP-작가-4',
    },
    {
      id: 'INFP-작가-4',
      message:
        '특히 하나의 콘텐츠가 뜨게 되면 영화, 드라마, 애니메이션 등의 기타 연관 산업으로까지 활용되기 때문에 작가의 인력수요는 다소 증가할 것으로 보여!',
      trigger: 'INFP-작가-5',
    },
    {
      id: 'INFP-작가-5',
      message: '향후 10년간 고용은 연평균 1.3% 증가될 것으로 나타난대!',
      trigger: 'INFP-작가-6',
    },
    {
      id: 'INFP-작가-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'INFP-작가-7',
    },
    {
      id: 'INFP-작가-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'INFP-심리학자-1',
      message:
        '심리학자는 인간의 행동과 정신적 과정을 과학적이고 체계적 방법을 통해 연구해!',
      trigger: 'INFP-심리학자-2',
    },
    {
      id: 'INFP-심리학자-2',
      message:
        '연구 결과를 통해 의학이나 교육, 산업 현장에서 응용할 수 있는 심리학적 지식과 정보 등을 제공하지! ',
      trigger: 'INFP-심리학자-3',
    },
    {
      id: 'INFP-심리학자-3',
      message: '심리학자의 연봉은 3235만원부터 시작해!',
      trigger: 'INFP-심리학자-4',
    },
    {
      id: 'INFP-심리학자-4',
      message:
        '현대사회에서 국민의 정신 보건에 대한 중요성이 강조되고, 인사선발과정, 인사컨설팅, ',
      trigger: 'INFP-심리학자-5',
    },
    {
      id: 'INFP-심리학자-5',
      message:
        '청소년의 진로개발 등의 분야에서도 심리검사 수요가 증가하고 있어 고용 수가 연 1.9% 증가할 전망이야! ',
      trigger: 'INFP-심리학자-6',
    },
    {
      id: 'INFP-심리학자-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'INFP-심리학자-7',
    },
    {
      id: 'INFP-심리학자-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'INFP-영양사-1',
      message: '영양사는 학교, 병원, 회사, 호텔과 같은 시설에서',
      trigger: 'INFP-영양사-2',
    },
    {
      id: 'INFP-영양사-2',
      message:
        '급식대상자의 기호, 영양가, 조리능력, 비용 등을 기초로 하여 섭식의 준비를 기획하고 작성하지!',
      trigger: 'INFP-영양사-3',
    },
    {
      id: 'INFP-영양사-3',
      message: '연봉은 2907만원 정도야!',
      trigger: 'INFP-영양사-4',
    },
    {
      id: 'INFP-영양사-4',
      message:
        "국민의 영양 및 건강 증진을 도모하기 위한 '국민영양관리법'이 제정됨에 따라. ",
      trigger: 'INFP-영양사-5',
    },
    {
      id: 'INFP-영양사-5',
      message:
        '1회 급식인원 100인 이상의 산업체의 경우 영양사를 의무배치 하도록 식품위생법이 개정되어서',
      trigger: 'INFP-영양사-6',
    },
    {
      id: 'INFP-영양사-6',
      message: '향후 10년간 고용은 연평균 1.9% 증가되는 전망이래!',
      trigger: 'INFP-영양사-7',
    },
    {
      id: 'INFP-영양사-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'INFP-영양사-8',
    },
    {
      id: 'INFP-영양사-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ESTP-1',
      message: 'ESTP 모험을 즐기는 사업가구나~ ',
      trigger: 'ESTP-2',
    },
    {
      id: 'ESTP-2',
      message:
        '넌 사실적이고 관대하며 개방적이고 사람이나 사물에 대한 선입견이 별로 없지? ',
      trigger: 'ESTP-3',
    },
    {
      id: 'ESTP-3',
      options: [
        { value: 1, label: '오... 맞는거 같은데?', trigger: 'ESTP-4' },
        { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ESTP-4' },
      ],
    },
    {
      id: 'ESTP-4',
      message: '음... 긴 설명을 싫어하고 현실적이고 실용적인 것을 좋아하지?',
      trigger: 'ESTP-5',
    },
    {
      id: 'ESTP-5',
      options: [
        { value: 1, label: '음... 맞는 거 같아!', trigger: 'ESTP-6' },
        { value: 2, label: '맞는거 같기두?', trigger: 'ESTP-6' },
      ],
    },
    {
      id: 'ESTP-6',
      message: `ESTP는 전체 인구의 대략 4% 정도로 희소성이 높은 MBTI야`,
      trigger: 'ESTP-7',
    },
    {
      id: 'ESTP-7',
      message:
        '충만한 영감과 설득력, 그리고 다양한 성격을 가지고 팀을 이끄는 타고난 리더형이라고 하는데 맞아?',
      trigger: 'ESTP-8',
    },
    {
      id: 'ESTP-8',
      options: [{ value: 1, label: '맞아! 잘 아는걸?', trigger: 'ESTP-9' }],
    },
    {
      id: 'ESTP-9',
      message:
        '스릴을 좋아하는 편이며 무대의 중심에 서는 것과 관심을 즐기는 편이지?',
      trigger: 'ESTP-10',
    },
    {
      id: 'ESTP-10',
      options: [
        { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ESTP-11' },
        { value: 2, label: '그런것 같아!', trigger: 'ESTP-11' },
      ],
    },
    {
      id: 'ESTP-11',
      message:
        '좋아! 개방적이지고 스릴을 즐기지만 현실적인 사람인 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'ESTP-12',
    },
    {
      id: 'ESTP-12',
      options: [
        { value: 1, label: '기자', trigger: 'ESTP-기자-1' },
        { value: 2, label: '경찰', trigger: 'ESTP-경찰-1' },
        {
          value: 3,
          label: '빅데이터 전문가',
          trigger: 'ESTP-빅데이터전문가-1',
        },
        { value: 4, label: '요리사', trigger: 'ESTP-요리사-1' },
      ],
    },
    {
      id: 'ESTP-기자-1',
      message:
        '기자는 우리 주변에서 일어나는 각종 사고, 사건 ,정치, 경제 소식, 생활 정보 등을',
      trigger: 'ESTP-기자-2',
    },
    {
      id: 'ESTP-기자-2',
      message:
        '신문, 잡지, 라디오, TV, 인터넷 등을 통해 일반인에게 신속하게 알려주는 일을 해',
      trigger: 'ESTP-기자-3',
    },
    {
      id: 'ESTP-기자-3',
      message: '연봉은 3992만원 정도야!',
      trigger: 'ESTP-기자-4',
    },
    {
      id: 'ESTP-기자-4',
      message: '인터넷에 기반한 새로운 뉴스 매체들의 시장진입과',
      trigger: 'ESTP-기자-5',
    },
    {
      id: 'ESTP-기자-5',
      message:
        '뉴미디어의 발전으로 방송이 점차 다매체, 다채널화로 뉴스 소비패턴이 다양화되면서',
      trigger: 'ESTP-기자-6',
    },
    {
      id: 'ESTP-기자-6',
      message:
        '뉴스 콘텐츠 수요가 증가하고 있어! 향후 10년간 고용률도 연평균 1.0% 증가할 전망이야!',
      trigger: 'ESTP-기자-7',
    },
    {
      id: 'ESTP-기자-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ESTP-기자-8',
    },
    {
      id: 'ESTP-기자-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ESTP-11' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ESTP-경찰-1',
      message: '경찰관은 국민의 생명과 재산을 보호하는 역할을 해!',
      trigger: 'ESTP-경찰-2',
    },
    {
      id: 'ESTP-경찰-2',
      message:
        '범죄 수사를 통해 범인을 잡고, 안전한 사회를 만들기 위해 노력하지!',
      trigger: 'ESTP-경찰-3',
    },
    {
      id: 'ESTP-경찰-3',
      message: '연봉은 3783만원 정도야',
      trigger: 'ESTP-경찰-4',
    },
    {
      id: 'ESTP-경찰-4',
      message:
        '민생치안을 위한 경찰인력 증원이 필요하다는 국민의 공감대가 형성되어',
      trigger: 'ESTP-경찰-5',
    },
    {
      id: 'ESTP-경찰-5',
      message: '향후 10년간 고용은 연평균 1.7% 증가할 것으로 전망된대!',
      trigger: 'ESTP-경찰-6',
    },
    {
      id: 'ESTP-경찰-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ESTP-경찰-7',
    },
    {
      id: 'ESTP-경찰-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ESTP-11' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ESTP-빅데이터전문가-1',
      message:
        '빅데이터 전문가는 분석할 빅데이터 자원을 수집하여 프로그램을 만들고 통계학적으로 분석하는 일을 해!',
      trigger: 'ESTP-빅데이터전문가-2',
    },
    {
      id: 'ESTP-빅데이터전문가-2',
      message:
        '대용량의 데이터를 처리하는 플랫폼을 통해 빅데이터를 처리한 후 분석결과를 시각화 하지! ',
      trigger: 'ESTP-빅데이터전문가-3',
    },
    {
      id: 'ESTP-빅데이터전문가-3',
      message: '연봉은 3670만원부터 시작한다고 해!',
      trigger: 'ESTP-빅데이터전문가-4',
    },
    {
      id: 'ESTP-빅데이터전문가-4',
      message:
        '빅데이터는 다양한 분야의 서비스, 소프트웨어, 하드웨어 등에 매우 큰 영향을 미치기도 하기 때문에',
      trigger: 'ESTP-빅데이터전문가-5',
    },
    {
      id: 'ESTP-빅데이터전문가-5',
      message:
        '경영학, 통계학, 컴퓨터공학 등 다양한 분야의 협력이 반드시 필요하다는 점에서 발전 가능성이 크고 이에 따라 빅 데이터 전문가의 직업적 전망도 밝다고 할 수 있어!',
      trigger: 'ESTP-빅데이터전문가-6',
    },
    {
      id: 'ESTP-빅데이터전문가-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ESTP-빅데이터전문가-7',
    },
    {
      id: 'ESTP-빅데이터전문가-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ESTP-11' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },

    {
      id: 'ESTP-요리사-1',
      message:
        '요리사는 준비한 재료에 물리적, 화학적 방법을 가하여 음식을 만드는 일을 해!',
      trigger: 'ESTP-요리사-2',
    },
    {
      id: 'ESTP-요리사-2',
      message:
        '각종 양념, 조미료 등을 준비하고, 오븐, 솥, 전자렌지 등 각종 요리기구를 사용하여 적당한 조리법에 따라 요리하지!',
      trigger: 'ESTP-요리사-3',
    },
    {
      id: 'ESTP-요리사-3',
      message: '연봉은 3499만원 정도야!',
      trigger: 'ESTP-요리사-4',
    },
    {
      id: 'ESTP-요리사-4',
      message:
        '다른 산업에 비해 진입이 쉬워 청년층 뿐만 아니라 은퇴한 중년층의 음식점 창업에 몰리면서 외식시장이 포화상태에 있다고 해!',
      trigger: 'ESTP-요리사-5',
    },
    {
      id: 'ESTP-요리사-5',
      message: '조리사 및 주방장에 대한 인력수요는 증가할 것으로 전망된대!',
      trigger: 'ESTP-요리사-6',
    },
    {
      id: 'ESTP-요리사-6',
      message: '향후 10년간 고용은 연평균 1.9% 증가할 것이라네!',
      trigger: 'ESTP-요리사-7',
    },
    {
      id: 'ESTP-요리사-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ESTP-요리사-8',
    },
    {
      id: 'ESTP-요리사-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ESTP-11' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },

    {
      id: 'ENTP-1',
      message: 'ENTP구나! 너는 자존감과 자기 확신이 높아 맞아?',
      trigger: 'ENTP-2',
    },
    {
      id: 'ENTP-2',
      options: [
        { value: 1, label: '응 맞아!', trigger: 'ENTP-3' },
        { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ENTP-3' },
      ],
    },
    {
      id: 'ENTP-3',
      message: '그리고 혼자서도 뭐든 잘놀고 재밌게 생활 할 수 있어 맞니?',
      trigger: 'ENTP-4',
    },
    {
      id: 'ENTP-4',
      options: [
        { value: 1, label: '음... 맞는 거 같아!', trigger: 'ENTP-5' },
        { value: 2, label: '맞는거 같기두?', trigger: 'ENTP-5' },
      ],
    },
    {
      id: 'ENTP-5',
      message: `창의적이며 관심있는 분야에서 대단한 열정과 수행 능력을 보이지?`,
      trigger: 'ENTP-6',
    },

    {
      id: 'ENTP-6',
      options: [{ value: 1, label: '맞아! 잘 아는걸?', trigger: 'ENTP-7' }],
    },
    {
      id: 'ENTP-7',
      message:
        'ENTP는 전체 인구의 대략 3%만 차지하고 있다고 해! 꽤나 희소한걸?',
      trigger: 'ENTP-8',
    },
    {
      id: 'ENTP-8',
      message: '마지막으로, 너는 뚜렷한 가치관이 있어 그러니?',
      trigger: 'ENTP-9',
    },
    {
      id: 'ENTP-9',
      options: [
        { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ENTP-10' },
        { value: 2, label: '그런것 같아!', trigger: 'ENTP-10' },
      ],
    },
    {
      id: 'ENTP-10',
      message:
        '좋아! 카리스마와 창의력, 실행력을 지닌 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'ENTP-11',
    },
    {
      id: 'ENTP-11',
      options: [
        { value: 1, label: '발명가', trigger: 'ENTP-발명가-1' },
        { value: 2, label: '영화감독', trigger: 'ENTP-영화감독-1' },
        { value: 3, label: '정치인', trigger: 'ENTP-정치인-1' },
        { value: 4, label: '칼럼니스트', trigger: 'ENTP-칼럼니스트-1' },
      ],
    },
    {
      id: 'ENTP-발명가-1',
      message:
        '발명가는 아직까지 없던 기술이나 물건을 새로 생각하여 만들어 내는 일을 해!',
      trigger: 'ENTP-발명가-2',
    },
    {
      id: 'ENTP-발명가-2',
      message:
        '자신이 생각해 낸 발명품의 개요를 적어 개인 직접 특허청에 특허출원을 신청하거나 특허사무소나 변리사를 통하여 특허를 신청하기도 하지!',
      trigger: 'ENTP-발명가-3',
    },
    {
      id: 'ENTP-발명가-3',
      message:
        '혹은 자신이 발명한 특허기술을 바탕으로 벤처회사를 설립하거나 상품화하여 팔기도 해!',
      trigger: 'ENTP-발명가-4',
    },
    {
      id: 'ENTP-발명가-4',
      message:
        '연봉은 2295만원지만 자신이 개발한 발명품의 특허 수와 인기에 비례해서 격차가 어마어마해,',
      trigger: 'ENTP-발명가-5',
    },
    {
      id: 'ENTP-발명가-5',
      message:
        '요새는 유튜브 등 여러 플랫 폼을 통해서 대중들에게 쉽게 어필할 수 있게 되었어!',
      trigger: 'ENTP-발명가-6',
    },
    {
      id: 'ENTP-발명가-6',
      message:
        '우리나라의 특허 등록 현황을 보면 2019년 기준 세계 7번째의 지식재산권 대국이 되었어!',
      trigger: 'ENTP-발명가-7',
    },
    {
      id: 'ENTP-발명가-7',
      message: '그만큼 발명의 붐이 일어나고 있다는 뜻이야!',
      trigger: 'ENTP-발명가-8',
    },
    {
      id: 'ENTP-발명가-8',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ENTP-발명가-9',
    },
    {
      id: 'ENTP-발명가-9',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ENTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ENTP-영화감독-1',
      message: '영화감독은 영화제작을 위해 연출을 하고,',
      trigger: 'ENTP-영화감독-2',
    },
    {
      id: 'ENTP-영화감독-2',
      message:
        '연기자와 제작진, 그리고 편집과 녹음을 총괄하여 지도하는 일을 해!',
      trigger: 'ENTP-영화감독-3',
    },
    {
      id: 'ENTP-영화감독-3',
      message: '연봉은 3487만원 정도라고 해!',
      trigger: 'ENTP-영화감독-4',
    },
    {
      id: 'ENTP-영화감독-4',
      message:
        '앞으로의 전망은 국민의 소득상승과 생활수준 향상으로 문화콘텐츠의 수요가 증가하고 있고',
      trigger: 'ENTP-영화감독-5',
    },
    {
      id: 'ENTP-영화감독-5',
      message:
        '다양한 OTT 서비스(넷플릭스,왓챠 등)로 인해 영화 컨텐츠의 수요가 폭발적으로 늘어나 영화감독의 전망이 아주 좋다고해!',
      trigger: 'ENTP-영화감독-6',
    },
    {
      id: 'ENTP-영화감독-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ENTP-영화감독-7',
    },
    {
      id: 'ENTP-영화감독-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ENTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ENTP-정치인-1',
      message:
        '정치인은 정치에 활말이 참여하거나 매우 밀접한 관련을 갖는 직업을 가진 사람을 말해!',
      trigger: 'ENTP-정치인-2',
    },
    {
      id: 'ENTP-정치인-2',
      message:
        '언변술이나 리더쉽을 특히 필요로 하는 직업이야! 카리스마를 가진 너에게 딱이지!',
      trigger: 'ENTP-정치인-3',
    },
    {
      id: 'ENTP-정치인-3',
      message: '정치인의 연봉은 8500만원 정도야!',
      trigger: 'ENTP-정치인-4',
    },
    {
      id: 'ENTP-정치인-4',
      message:
        '국민 청원 어플리케이션 정치토론 인터넷 커뮤니티, SNS와 같은 다양한 매체들이 등장함으로써',
      trigger: 'ENTP-정치인-5',
    },
    {
      id: 'ENTP-정치인-5',
      message:
        '국민들의 정치에 관한 관심이 증가하였고 더 큰 영향력을 세울 수 있게 되었어!',
      trigger: 'ENTP-정치인-6',
    },
    {
      id: 'ENTP-정치인-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ENTP-정치인-7',
    },
    {
      id: 'ENTP-정치인-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ENTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ENTP-칼럼니스트-1',
      message: '칼럼니스트는 여러 언론기관이나 매체에서 특정란을 담당하여',
      trigger: 'ENTP-칼럼니스트-2',
    },
    {
      id: 'ENTP-칼럼니스트-2',
      message: '정기적, 계속적으로 집필하는 기자 또는 평론가야!',
      trigger: 'ENTP-칼럼니스트-3',
    },
    {
      id: 'ENTP-칼럼니스트-3',
      message: '연봉은 3632만원 정도야!',
      trigger: 'ENTP-칼럼니스트-4',
    },
    {
      id: 'ENTP-칼럼니스트-4',
      message:
        '일반 신문 뿐 아니라 인터넷을 통한 여러 매체에 전달이 가능하므로',
      trigger: 'ENTP-칼럼니스트-5',
    },
    {
      id: 'ENTP-칼럼니스트-5',
      message: '글을 가독성 있고 흥미롭게 쓰는 칼럼니스트의 전망은 좋다고 해!',
      trigger: 'ENTP-칼럼니스트-6',
    },
    {
      id: 'ENTP-칼럼니스트-6',
      message:
        '관심있는 분야에 대한 지식들 또한 필요로 하게 될거야! 너가 잘하는 일이지?',
      trigger: 'ENTP-칼럼니스트-7',
    },
    {
      id: 'ENTP-칼럼니스트-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ENTP-칼럼니스트-8',
    },
    {
      id: 'ENTP-칼럼니스트-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ENTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },

    //동건님 부분, 수정할 것 INFJ만 있다.
    {
      id: 'INFJ-1',
      message:
        'INFJ 구나! 전체 인구 중에 가장 희소한 성격유형이야! 1%도 되지 않는대!',
      trigger: 'INFJ-2',
    },
    {
      id: 'INFJ-2',
      message: '직관력이 뛰어나며 통찰력이 있다는데 맞아?',
      trigger: 'INFJ-3',
    },
    {
      id: 'INFJ-3',
      options: [
        { value: 1, label: '응 맞아!', trigger: 'INFJ-4' },
        { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'INFJ-4' },
      ],
    },
    {
      id: 'INFJ-4',
      message: `너만의 철칙이 뚜렷해서 고집이 세다는 소리를 많이 듣지?`,
      trigger: 'INFJ-5',
    },

    {
      id: 'INFJ-5',
      options: [
        { value: 1, label: '음... 맞는 거 같아!', trigger: 'INFJ-6' },
        { value: 2, label: '잘 모르겠어', trigger: 'INFJ-6' },
      ],
    },
    {
      id: 'INFJ-6',
      message: `사회적 불의에 민감하고 높은 도덕 관념을 지니고 있지?`,
      trigger: 'INFJ-7',
    },

    {
      id: 'INFJ-7',
      options: [{ value: 1, label: '맞아! 잘 아는걸?', trigger: 'INFJ-8' }],
    },
    {
      id: 'INFJ-8',
      message: '마음씨 따뜻한 친구구나!',
      trigger: 'INFJ-9',
    },
    {
      id: 'INFJ-9',
      message: '호기심이 많으며 열정적이고 언제나 의문을 갖는 편이지?',
      trigger: 'INFJ-10',
    },
    {
      id: 'INFJ-10',
      options: [
        { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'INFJ-11' },
        { value: 2, label: '그런것 같아!', trigger: 'INFJ-11' },
      ],
    },
    {
      id: 'INFJ-11',
      message:
        '좋아! 호기심이 많으며 마음 따뜻한 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'INFJ-12',
    },
    {
      id: 'INFJ-12',
      options: [
        { value: 1, label: '물리치료사', trigger: 'INFJ-물리치료사' },
        { value: 2, label: '보건 교사', trigger: 'INFJ-보건 교사' },
        { value: 3, label: '번역가', trigger: 'INFJ-번역가' },
        { value: 4, label: '디자이너', trigger: 'INFJ-디자이너' },
      ],
    },
    {
      id: 'INFJ',
      message: '다른 직업도 확인해봐!',
      trigger: 'INFJ-13',
    },
    {
      id: 'INFJ-13',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'INFJ-12' },
        { value: 2, label: '아니 그만할래', trigger: '1' },
      ],
    },
    {
      id: 'INFJ-물리치료사',
      message: ' 물리치료사에 관심이 있구나!!',
      trigger: 'INFJ-물리치료사-2',
    },
    {
      id: 'INFJ-물리치료사-2',
      message: ' 좋은 직업이지!',
      trigger: 'INFJ-물리치료사-3',
    },
    {
      id: 'INFJ-물리치료사-3',
      message:
        ' 물리치료사는 근골격계 또는 신경계 손상 환자들을 대상으로 온열치료, 전기치료, 광선치료, 수치료, 도수치료, 기계 및 기구치료, 치료적 마사지, 기능훈련, 신체교정운동 및 재활훈련과 이에 필요한 기기, 환자교육, 약품의 사용 및 관리 등의 일을 하는 분들이야!',
      trigger: 'INFJ-물리치료사-4',
    },
    {
      id: 'INFJ-물리치료사-4',
      message:
        ' 현재 대한민국에서 연간 배출인원은 약 3,100명 이고 물리치료사를 포함한 물리 및 작업치료사의 종사자 수는 48,000명이며, 최근에 발달장애 아동 및 노인의 재활분야에 대한 사회복지 제도가 확대되면서 물리치료사의 수요 증가 요인으로 작용하고 있어! 따라서 향후 10년간 고용은 연평균 2.3% 증가할 것으로 전망되지!',
      trigger: 'INFJ-물리치료사-5',
    },
    {
      id: 'INFJ-물리치료사-5',
      message: ' 전망증가 66%, 현상유지 20%, 감소 13%',
      trigger: 'INFJ-물리치료사-6',
    },
    {
      id: 'INFJ-물리치료사-6',
      message:
        ' 임금수준물리치료사 하위(25%) 2,841만원, 중위값 3,278만원, 상위(25%) 3,917만원',
      trigger: 'INFJ-물리치료사-7',
    },
    {
      id: 'INFJ-물리치료사-7',
      message: ' 직업만족도물리치료사에 대한 직업 만족도는 69.5% (백점 기준)',
      trigger: 'INFJ-물리치료사-8',
    },
    {
      id: 'INFJ-물리치료사-8',
      message: ' 전망증가 66%, 현상유지 20%, 감소 13%',
      trigger: 'INFJ',
    },
    {
      id: 'INFJ-보건 교사',
      message: '보건 교사에 관심이 있구나!!',
      trigger: 'INFJ-보건 교사-2',
    },
    {
      id: 'INFJ-보건 교사-2',
      message: '좋은 직업이지!',
      trigger: 'INFJ-보건 교사-3',
    },
    {
      id: 'INFJ-보건 교사-3',
      message:
        '보건교사는 학생과 교직원의 건강상태와 학교의 보건활동 진행상태를 평가하기 위해 정기적인 건강 진단 또는 검사를 실시하시고. 응급처치, 가정간호, 질병 및 전염병에 대한 보건교육과 건강상담을 담당하며 예방접종을 시행하시는 분이야!',
      trigger: 'INFJ-보건 교사-4',
    },
    {
      id: 'INFJ-보건 교사-4',
      message:
        '보건교사가 되기 위해서는 간호학사를 취득하고 각 시·도 교육청에서 실시하는 보건교사 임용시험에 합격해야해',
      trigger: 'INFJ-보건 교사-5',
    },
    {
      id: 'INFJ-보건 교사-5',
      message:
        '교육부는 비교과 분야의 보건·영양 등의 교원이 2018년도 법정정원에 현저히 미달되어 있어 이 분야 인력을 대규모로 채용하겠다고 발표했으며 실제로 2021년도엔 보건교사 모집이 역대 최대 수치로 이루어졌어!',
      trigger: 'INFJ-보건 교사-6',
    },
    {
      id: 'INFJ-보건 교사-6',
      message: '하위(25%) 3,488만 원, 중위값 4,078만 원, 상위(25%) 5,305만 원',
      trigger: 'INFJ',
    },
    {
      id: 'INFJ-번역가',
      message: '번역가에 관심이 있구나!!',
      trigger: 'INFJ-번역가-2',
    },
    {
      id: 'INFJ-번역가-2',
      message: '좋은 직업이지!',
      trigger: 'INFJ-번역가-3',
    },
    {
      id: 'INFJ-번역가-3',
      message:
        '번역가는 외국어를 국문으로, 국문을 외국어로 번역하고 글로 작성하는 역할을 하는 직업이야',
      trigger: 'INFJ-번역가-4',
    },
    {
      id: 'INFJ-번역가-4',
      message:
        '번역가 하위(25%) 3,137만 원, **중위값 3,736만 원**, 상위(25%) 4,335만 원',
      trigger: 'INFJ-번역가-5',
    },
    {
      id: 'INFJ-번역가-5',
      message:
        '향후 5년간 번역가의 고용은 현 상태를 유지하는 수준 또는 향상이 될 것으로 전망된다고 해! 전 세계적으로 문화교류가 증가하면서 각국의 문학작품이나 영상물 등 다양한 자료들의 번역 업무가 늘어나고 있기 때문이지!',
      trigger: 'INFJ-번역가-6',
    },
    {
      id: 'INFJ-번역가-6',
      message: '번역가로 유명한 사람으로는  안정효 님 류시화 시인님 등이 있어!',
      trigger: 'INFJ',
    },
    {
      id: 'INFJ-디자이너',
      message: '디자이너에 관심이 있구나!!',
      trigger: 'INFJ-디자이너-2',
    },
    {
      id: 'INFJ-디자이너-2',
      message: '좋은 직업이지!',
      trigger: 'INFJ-디자이너-3',
    },
    {
      id: 'INFJ-디자이너-3',
      message:
        '실물을 제작하기 전에 도면, 계획서, 설계도 등을 작성함으로써 그 구조나 형태를 계획하는 사람을  포괄적으로 디자이너라고해! 여기서 실물이라 함은 건물, 옷, 기계 등의 유형물일 수도 있고, 법률, 서비스, 비디오게임, 그래픽 등의 무형물일 수도 있지!',
      trigger: 'INFJ-디자이너-4',
    },
    {
      id: 'INFJ-디자이너-4',
      message:
        '하위(25%) 3,388만 원, **중위값 4,145만 원**, 상위(25%) 5,096만 원',
      trigger: 'INFJ-디자이너-5',
    },
    {
      id: 'INFJ-디자이너-5',
      message:
        '디자이너의 일자리 전망은 분야에 따라 상이한 양상을 보이지만, 철저히 능력위주로 평가받기 때문에 좋은 디자이너를 원하는 기업들은 점점더 많아 질것으로 전망되지! 지속적인 자기계발을 한다면 좋은 선택이 될 것이라고 평가받고 있어!',
      trigger: 'INFJ-디자이너-6',
    },
    {
      id: 'INFJ-디자이너-6',
      message:
        '디자이너로 유명한 사람으로는 레이먼드 로위,가브리엘 샤넬,TBWA,알렉세이 브로도비치 등이 있어!',
      trigger: 'INFJ',
    },

    //ISFP
    {
      id: 'ISFP-1',
      message: 'ISFP구나! 다른 사람이 부탁하면 거절하기 힘들어하는 편이지?',
      trigger: 'ISFP-2',
    },
    {
      id: 'ISFP-2',
      options: [
        { value: 1, label: '응 맞아!', trigger: 'ISFP-3' },
        { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ISFP-3' },
      ],
    },
    {
      id: 'ISFP-3',
      message: '혼자만의 시간을 매우 좋아하며 집에 있는 걸 선호하는 편이지?.',
      trigger: 'ISFP-4',
    },
    {
      id: 'ISFP-4',
      options: [
        { value: 1, label: '음... 맞는 거 같아!', trigger: 'ISFP-5' },
        { value: 2, label: '맞는거 같기두?', trigger: 'ISFP-5' },
      ],
    },
    {
      id: 'ISFP-5',
      message: `규칙 혹은 틀에 묶이는 걸 싫어하지?`,
      trigger: 'ISFP-6',
    },

    {
      id: 'ISFP-6',
      options: [{ value: 1, label: '맞아! 잘 아는걸?', trigger: 'ISFP-7' }],
    },
    {
      id: 'ISFP-7',
      message: '현재의 삶을 즐기는 온화한 성격이지만',
      trigger: 'ISFP-8',
    },
    {
      id: 'ISFP-8',
      message: '이따금식 충동적으로 어떤일을 하고 싶을 때가 있지?',
      trigger: 'ISFP-9',
    },
    {
      id: 'ISFP-9',
      options: [
        { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ISFP-10' },
        { value: 2, label: '그런것 같아!', trigger: 'ISFP-10' },
      ],
    },
    {
      id: 'ISFP-10',
      message:
        '좋아! 공감력과 통찰력을 지닌 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'ISFP-11',
    },
    {
      id: 'ISFP-11',
      options: [
        { value: 1, label: '전문의사', trigger: 'ISFP-전문의사-1' },
        { value: 2, label: '패션디자이너', trigger: 'ISFP-패션디자이너-1' },
        { value: 3, label: '연예인', trigger: 'ISFP-연예인-1' },
        { value: 4, label: '영양사', trigger: 'ISFP-영양사-1' },
      ],
    },
    {
      id: 'ISFP-전문의사-1',
      message:
        '전문의사는 환자가 가진 병의 원인을 찾아내어 치료하고 예방하는 일을 해!',
      trigger: 'ISFP-전문의사-2',
    },
    {
      id: 'ISFP-전문의사-2',
      message:
        '진단을 내리기 위한 논리적 분석능력 위급한 환자에 대한 빠른 판단력,',
      trigger: 'ISFP-전문의사-3',
    },
    {
      id: 'ISFP-전문의사-3',
      message:
        '투철한 사명감과 성실함, 환자에 대한 세심한 배려까지 필요로 하지!',
      trigger: 'ISFP-전문의사-4',
    },
    {
      id: 'ISFP-전문의사-4',
      message: '연봉은 약 5500만원 정도야!',
      trigger: 'ISFP-전문의사-5',
    },
    {
      id: 'ISFP-전문의사-5',
      message: '우리나라는 건강보험제도가 사회에 안정적으로 정착되어 있고,',
      trigger: 'ISFP-전문의사-6',
    },
    {
      id: 'ISFP-전문의사-6',
      message:
        '국민의 소득수준과 의식수준이 높아지면서 의료서비스의 수요가 높아지고 있어서',
      trigger: 'ISFP-전문의사-7',
    },
    {
      id: 'ISFP-전문의사-7',
      message: '향후 10년간 고용은 연평균 2.3% 증가할 것으로 전망된대!',
      trigger: 'ISFP-전문의사-8',
    },
    {
      id: 'ISFP-전문의사-8',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISFP-전문의사-9',
    },
    {
      id: 'ISFP-전문의사-9',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISFP-패션디자이너-1',
      message:
        '패션디자이너는 의복과 악세서리 등을 디자인하고 상품을 기획하는 일을 하는 직업이야!',
      trigger: 'ISFP-패션디자이너-2',
    },
    {
      id: 'ISFP-패션디자이너-2',
      message:
        '다른 사람들의 감정을 잘 이해하고, 이를 통하여 창의성과 통찰력으로',
      trigger: 'ISFP-패션디자이너-3',
    },
    {
      id: 'ISFP-패션디자이너-3',
      message:
        '사람들의 마음을 끌만한 아이디어를 이끌어낼 수 있는 너에게 어울릴 것 같아!',
      trigger: 'ISFP-패션디자이너-4',
    },
    {
      id: 'ISFP-패션디자이너-4',
      message: '연봉은 약 3600만원이야',
      trigger: 'ISFP-패션디자이너-5',
    },
    {
      id: 'ISFP-패션디자이너-5',
      message:
        '최근 SNS 등을 통해 개인의 개성이 주목받는 분위기가 커지고 있어서',
      trigger: 'ISFP-패션디자이너-6',
    },
    {
      id: 'ISFP-패션디자이너-6',
      message: '향후 10년간 고용은 연평균 1.1% 증가할 것으로 전망돼!',
      trigger: 'ISFP-패션디자이너-7',
    },
    {
      id: 'ISFP-패션디자이너-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISFP-패션디자이너-8',
    },
    {
      id: 'ISFP-패션디자이너-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISFP-연예인-1',
      message: '연예인은 자신이 가지고 있는 끼와 재능으로 각종 미디어 매체에서',
      trigger: 'ISFP-연예인-2',
    },
    {
      id: 'ISFP-연예인-2',
      message: '시청자를 웃거나 혹은 울리기도 하는 직업이야!',
      trigger: 'ISFP-연예인-3',
    },
    {
      id: 'ISFP-연예인-3',
      message:
        '너는 차분하고 우호적이고 민감하고 온화한 성격으로, 삶에서 당신의 주변에서 일어나는 모든 것을 느끼고',
      trigger: 'ISFP-연예인-4',
    },
    {
      id: 'ISFP-연예인-4',
      message:
        '이를 통해 주변사람들에게 많은 감정을 전달해 줄 수 있을거 같아서 이 직업을 추천해!',
      trigger: 'ISFP-연예인-5',
    },
    {
      id: 'ISFP-연예인-5',
      message:
        '연봉은 약 3000만원 정도고 연예인은 컴퓨터나 로봇이 대체할 수 없을 것 같다 라는 평가를 받고 있어서 전망은 나쁘지 않을 것 같아!',
      trigger: 'ISFP-연예인-6',
    },
    {
      id: 'ISFP-연예인-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISFP-연예인-7',
    },
    {
      id: 'ISFP-연예인-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISFP-영양사-1',
      message:
        '영양사는 영양의 균형을 고려하고 식단을 계획하고, 조리 및 공급을 감독하는 직업이야!',
      trigger: 'ISFP-영양사-2',
    },
    {
      id: 'ISFP-영양사-2',
      message:
        '다른 사람의 니즈를 금방 파악하고 맡은바 업무에 충실하며 다른사람을 배려하는 너에게 잘 어울리는 직업일 것 같아!',
      trigger: 'ISFP-영양사-3',
    },
    {
      id: 'ISFP-영양사-3',
      message: '연봉은 2907만원 정도야!',
      trigger: 'ISFP-영양사-4',
    },
    {
      id: 'ISFP-영양사-4',
      message:
        '국민의 영양 및 건강 증진을 도모하기 위한 "국민 영양관리법"이 제정됨에 따라',
      trigger: 'ISFP-영양사-5',
    },
    {
      id: 'ISFP-영양사-5',
      message:
        '1회 급식인원 100인 이상인 산업체의 경우 영양사를 의무배치 하도록 식품위생법이 개정됨에 따라',
      trigger: 'ISFP-영양사-6',
    },
    {
      id: 'ISFP-영양사-6',
      message: '향후 10년간 고용은 연평균 1.9% 증가할 전망이래!',
      trigger: 'ISFP-영양사-7',
    },
    {
      id: 'ISFP-영양사-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISFP-영양사-8',
    },
    {
      id: 'ISFP-영양사-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },

    //ISTP
    {
      id: 'ISTP-1',
      message:
        'ISTP 구나! 좋아하는 감정표현을 잘 안하는 편이고 공감을 바라는 위로를 잘 못하는 편이지??',
      trigger: 'ISTP-2',
    },
    {
      id: 'ISTP-2',
      options: [
        { value: 1, label: '응 맞아!', trigger: 'ISTP-3' },
        { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ISTP-3' },
      ],
    },
    {
      id: 'ISTP-3',
      message:
        '너는 가끔 혼자 시간을 보낼 자유가 필요하며 취미나 관심사가 같은 연인을 선호하지?',
      trigger: 'ISTP-4',
    },
    {
      id: 'ISTP-4',
      options: [
        { value: 1, label: '음... 맞는 거 같아!', trigger: 'ISTP-5' },
        { value: 2, label: '맞는거 같기두?', trigger: 'ISTP-5' },
      ],
    },
    {
      id: 'ISTP-5',
      message: `틀에 박힌 생활을 싫어하고 관심분야가 아니면 죽을때까지 쳐다보지도 않지?`,
      trigger: 'ISTP-6',
    },

    {
      id: 'ISTP-6',
      options: [
        { value: 1, label: '응 맞아', trigger: 'ISTP-7' },
        { value: 2, label: '쫌 그런거 같아', trigger: 'ISTP-7' },
      ],
    },
    {
      id: 'ISTP-7',
      message: '타인에게 잔소리를 듣거나 잔소리를 하는것을',
      trigger: 'ISTP-8',
    },
    {
      id: 'ISTP-8',
      message: '별로 좋아하지 않으며 타인을 조용히 지켜보고 관찰하는 편이지?',
      trigger: 'ISTP-9',
    },
    {
      id: 'ISTP-9',
      options: [
        { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ISTP-10' },
        { value: 2, label: '그런것 같아!', trigger: 'ISTP-10' },
      ],
    },
    {
      id: 'ISTP-10',
      message:
        '좋아! 논리적이고 차분하며 분석력이 뛰어난 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'ISTP-11',
    },
    {
      id: 'ISTP-11',
      options: [
        { value: 1, label: '경찰', trigger: 'ISTP-경찰-1' },
        {
          value: 2,
          label: '소프트웨어개발자',
          trigger: 'ISTP-소프트웨어개발자-1',
        },
        { value: 3, label: '경제학자', trigger: 'ISTP-경제학자-1' },
        { value: 4, label: '항공기 정비원', trigger: 'ISTP-항공기정비원-1' },
      ],
    },
    {
      id: 'ISTP-경찰-1',
      message:
        '전문의사는 환자가 가진 병의 원인을 찾아내어 치료하고 예방하는 일을 해!',
      trigger: 'ISTP-경찰-2',
    },
    {
      id: 'ISTP-경찰-2',
      message:
        '진단을 내리기 위한 논리적 분석능력 위급한 환자에 대한 빠른 판단력,',
      trigger: 'ISTP-경찰-3',
    },
    {
      id: 'ISTP-경찰-3',
      message:
        '투철한 사명감과 성실함, 환자에 대한 세심한 배려까지 필요로 하지!',
      trigger: 'ISTP-경찰-4',
    },
    {
      id: 'ISTP-경찰-4',
      message: '연봉은 약 5500만원 정도야!',
      trigger: 'ISTP-경찰-5',
    },
    {
      id: 'ISTP-경찰-5',
      message: '우리나라는 건강보험제도가 사회에 안정적으로 정착되어 있고,',
      trigger: 'ISTP-경찰-6',
    },
    {
      id: 'ISTP-경찰-6',
      message:
        '국민의 소득수준과 의식수준이 높아지면서 의료서비스의 수요가 높아지고 있어서',
      trigger: 'ISTP-경찰-7',
    },
    {
      id: 'ISTP-경찰-7',
      message: '향후 10년간 고용은 연평균 2.3% 증가할 것으로 전망된대!',
      trigger: 'ISTP-경찰-8',
    },
    {
      id: 'ISTP-경찰-8',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISTP-경찰-9',
    },
    {
      id: 'ISTP-경찰-9',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISTP-소프트웨어개발자-1',
      message:
        '패션디자이너는 의복과 악세서리 등을 디자인하고 상품을 기획하는 일을 하는 직업이야!',
      trigger: 'ISTP-소프트웨어개발자-2',
    },
    {
      id: 'ISTP-소프트웨어개발자-2',
      message:
        '다른 사람들의 감정을 잘 이해하고, 이를 통하여 창의성과 통찰력으로',
      trigger: 'ISTP-소프트웨어개발자-3',
    },
    {
      id: 'ISTP-소프트웨어개발자-3',
      message:
        '사람들의 마음을 끌만한 아이디어를 이끌어낼 수 있는 너에게 어울릴 것 같아!',
      trigger: 'ISTP-소프트웨어개발자-4',
    },
    {
      id: 'ISTP-소프트웨어개발자-4',
      message: '연봉은 약 3600만원이야',
      trigger: 'ISTP-소프트웨어개발자-5',
    },
    {
      id: 'ISTP-소프트웨어개발자-5',
      message:
        '최근 SNS 등을 통해 개인의 개성이 주목받는 분위기가 커지고 있어서',
      trigger: 'ISTP-소프트웨어개발자-6',
    },
    {
      id: 'ISTP-소프트웨어개발자-6',
      message: '향후 10년간 고용은 연평균 1.1% 증가할 것으로 전망돼!',
      trigger: 'ISTP-소프트웨어개발자-7',
    },
    {
      id: 'ISTP-소프트웨어개발자-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISTP-소프트웨어개발자-8',
    },
    {
      id: 'ISTP-소프트웨어개발자-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISTP-경제학자-1',
      message: '연예인은 자신이 가지고 있는 끼와 재능으로 각종 미디어 매체에서',
      trigger: 'ISTP-경제학자-2',
    },
    {
      id: 'ISTP-경제학자-2',
      message: '시청자를 웃거나 혹은 울리기도 하는 직업이야!',
      trigger: 'ISTP-경제학자-3',
    },
    {
      id: 'ISTP-경제학자-3',
      message:
        '너는 차분하고 우호적이고 민감하고 온화한 성격으로, 삶에서 당신의 주변에서 일어나는 모든 것을 느끼고',
      trigger: 'ISTP-경제학자-4',
    },
    {
      id: 'ISTP-경제학자-4',
      message:
        '이를 통해 주변사람들에게 많은 감정을 전달해 줄 수 있을거 같아서 이 직업을 추천해!',
      trigger: 'ISTP-경제학자-5',
    },
    {
      id: 'ISTP-경제학자-5',
      message:
        '연봉은 약 3000만원 정도고 연예인은 컴퓨터나 로봇이 대체할 수 없을 것 같다 라는 평가를 받고 있어서 전망은 나쁘지 않을 것 같아!',
      trigger: 'ISTP-경제학자-6',
    },
    {
      id: 'ISTP-경제학자-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISTP-경제학자-7',
    },
    {
      id: 'ISTP-경제학자-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ISTP-항공기정비원-1',
      message:
        '항공기정비원은 항공기가 본래의 기능을 수행, 유지 가능하도록 시스템을 점검하고 수리하는 일을 하는 사람이야!',
      trigger: 'ISTP-항공기정비원-2',
    },
    {
      id: 'ISTP-항공기정비원-2',
      message:
        '객관적으로 현재의 문제를 찾아내고 해결하는 능력과 도구를 다루는 손재주가 뛰어난 너에게 추천할 수 있는 직업 같아!',
      trigger: 'ISTP-항공기정비원-3',
    },
    {
      id: 'ISTP-항공기정비원-3',
      message: '연봉은 약 3700만원 이야!',
      trigger: 'ISTP-항공기정비원-4',
    },
    {
      id: 'ISTP-항공기정비원-4',
      message:
        '교통의 세계화에 따라 국내외 여객수송과 항공화물 수송의 실적이 지속적으로 증가하고 있어',
      trigger: 'ISTP-항공기정비원-5',
    },
    {
      id: 'ISTP-항공기정비원-5',
      message:
        '이러한 수송실적의 증가에 따라 항공기 및 항공기기의 수, 운송횟수도 증가되기 때문에',
      trigger: 'ISTP-항공기정비원-6',
    },
    {
      id: 'ISTP-항공기정비원-6',
      message:
        '교통안전을 위해 항공기정비원은 향후 10년간 고용은 연평균 1.9% 증가할 전망이래!',
      trigger: 'ISTP-항공기정비원-7',
    },
    {
      id: 'ISTP-항공기정비원-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ISTP-항공기정비원-8',
    },
    {
      id: 'ISTP-항공기정비원-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ISTP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },

    //ENFP
    {
      id: 'ENFP-1',
      message: 'ENFP구나! 너는 새로운 시도와 도전을 좋아하지? 맞아?',
      trigger: 'ENFP-2',
    },
    {
      id: 'ENFP-2',
      options: [
        { value: 1, label: '응 맞아!', trigger: 'ENFP-3' },
        { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ENFP-3' },
      ],
    },
    {
      id: 'ENFP-3',
      message: '그리고 사회적인 고정관념을 안좋아해',
      trigger: 'ENFP-4',
    },
    {
      id: 'ENFP-4',
      options: [
        { value: 1, label: '음... 맞는 거 같아!', trigger: 'ENFP-5' },
        { value: 2, label: '맞는거 같기두?', trigger: 'ENFP-5' },
      ],
    },
    {
      id: 'ENFP-5',
      message: `틀에 박힌 생활을 싫어하고 관심분야가 아니면 죽을때까지 쳐다보지도 않지?`,
      trigger: 'ENFP-6',
    },

    {
      id: 'ENFP-6',
      options: [
        { value: 1, label: '응 맞아', trigger: 'ENFP-7' },
        { value: 2, label: '쫌 그런거 같아', trigger: 'ENFP-7' },
      ],
    },
    {
      id: 'ENFP-7',
      message: '타인에게 잔소리를 듣거나 잔소리를 하는것을',
      trigger: 'ENFP-8',
    },
    {
      id: 'ENFP-8',
      message: '별로 좋아하지 않으며 타인을 조용히 지켜보고 관찰하는 편이지?',
      trigger: 'ENFP-9',
    },
    {
      id: 'ENFP-9',
      options: [
        { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ENFP-10' },
        { value: 2, label: '그런것 같아!', trigger: 'ENFP-10' },
      ],
    },
    {
      id: 'ENFP-10',
      message:
        '좋아! 논리적이고 차분하며 분석력이 뛰어난 너에게 어울리는 직업을 소개해줄게!',
      trigger: 'ENFP-11',
    },
    {
      id: 'ENFP-11',
      options: [
        { value: 1, label: '경찰', trigger: 'ENFP-경찰-1' },
        {
          value: 2,
          label: '소프트웨어개발자',
          trigger: 'ENFP-소프트웨어개발자-1',
        },
        { value: 3, label: '경제학자', trigger: 'ENFP-경제학자-1' },
        { value: 4, label: '항공기 정비원', trigger: 'ENFP-항공기정비원-1' },
      ],
    },
    {
      id: 'ENFP-경찰-1',
      message:
        '전문의사는 환자가 가진 병의 원인을 찾아내어 치료하고 예방하는 일을 해!',
      trigger: 'ENFP-경찰-2',
    },
    {
      id: 'ENFP-경찰-2',
      message:
        '진단을 내리기 위한 논리적 분석능력 위급한 환자에 대한 빠른 판단력,',
      trigger: 'ENFP-경찰-3',
    },
    {
      id: 'ENFP-경찰-3',
      message:
        '투철한 사명감과 성실함, 환자에 대한 세심한 배려까지 필요로 하지!',
      trigger: 'ENFP-경찰-4',
    },
    {
      id: 'ENFP-경찰-4',
      message: '연봉은 약 5500만원 정도야!',
      trigger: 'ENFP-경찰-5',
    },
    {
      id: 'ENFP-경찰-5',
      message: '우리나라는 건강보험제도가 사회에 안정적으로 정착되어 있고,',
      trigger: 'ENFP-경찰-6',
    },
    {
      id: 'ENFP-경찰-6',
      message:
        '국민의 소득수준과 의식수준이 높아지면서 의료서비스의 수요가 높아지고 있어서',
      trigger: 'ENFP-경찰-7',
    },
    {
      id: 'ENFP-경찰-7',
      message: '향후 10년간 고용은 연평균 2.3% 증가할 것으로 전망된대!',
      trigger: 'ENFP-경찰-8',
    },
    {
      id: 'ENFP-경찰-8',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ENFP-경찰-9',
    },
    {
      id: 'ENFP-경찰-9',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ENFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ENFP-소프트웨어개발자-1',
      message:
        '패션디자이너는 의복과 악세서리 등을 디자인하고 상품을 기획하는 일을 하는 직업이야!',
      trigger: 'ENFP-소프트웨어개발자-2',
    },
    {
      id: 'ENFP-소프트웨어개발자-2',
      message:
        '다른 사람들의 감정을 잘 이해하고, 이를 통하여 창의성과 통찰력으로',
      trigger: 'ENFP-소프트웨어개발자-3',
    },
    {
      id: 'ENFP-소프트웨어개발자-3',
      message:
        '사람들의 마음을 끌만한 아이디어를 이끌어낼 수 있는 너에게 어울릴 것 같아!',
      trigger: 'ENFP-소프트웨어개발자-4',
    },
    {
      id: 'ENFP-소프트웨어개발자-4',
      message: '연봉은 약 3600만원이야',
      trigger: 'ENFP-소프트웨어개발자-5',
    },
    {
      id: 'ENFP-소프트웨어개발자-5',
      message:
        '최근 SNS 등을 통해 개인의 개성이 주목받는 분위기가 커지고 있어서',
      trigger: 'ENFP-소프트웨어개발자-6',
    },
    {
      id: 'ENFP-소프트웨어개발자-6',
      message: '향후 10년간 고용은 연평균 1.1% 증가할 것으로 전망돼!',
      trigger: 'ENFP-소프트웨어개발자-7',
    },
    {
      id: 'ENFP-소프트웨어개발자-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ENFP-소프트웨어개발자-8',
    },
    {
      id: 'ENFP-소프트웨어개발자-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ENFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ENFP-경제학자-1',
      message: '연예인은 자신이 가지고 있는 끼와 재능으로 각종 미디어 매체에서',
      trigger: 'ENFP-경제학자-2',
    },
    {
      id: 'ENFP-경제학자-2',
      message: '시청자를 웃거나 혹은 울리기도 하는 직업이야!',
      trigger: 'ENFP-경제학자-3',
    },
    {
      id: 'ENFP-경제학자-3',
      message:
        '너는 차분하고 우호적이고 민감하고 온화한 성격으로, 삶에서 당신의 주변에서 일어나는 모든 것을 느끼고',
      trigger: 'ENFP-경제학자-4',
    },
    {
      id: 'ENFP-경제학자-4',
      message:
        '이를 통해 주변사람들에게 많은 감정을 전달해 줄 수 있을거 같아서 이 직업을 추천해!',
      trigger: 'ENFP-경제학자-5',
    },
    {
      id: 'ENFP-경제학자-5',
      message:
        '연봉은 약 3000만원 정도고 연예인은 컴퓨터나 로봇이 대체할 수 없을 것 같다 라는 평가를 받고 있어서 전망은 나쁘지 않을 것 같아!',
      trigger: 'ENFP-경제학자-6',
    },
    {
      id: 'ENFP-경제학자-6',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ENFP-경제학자-7',
    },
    {
      id: 'ENFP-경제학자-7',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ENFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
    {
      id: 'ENFP-항공기정비원-1',
      message:
        '항공기정비원은 항공기가 본래의 기능을 수행, 유지 가능하도록 시스템을 점검하고 수리하는 일을 하는 사람이야!',
      trigger: 'ENFP-항공기정비원-2',
    },
    {
      id: 'ENFP-항공기정비원-2',
      message:
        '객관적으로 현재의 문제를 찾아내고 해결하는 능력과 도구를 다루는 손재주가 뛰어난 너에게 추천할 수 있는 직업 같아!',
      trigger: 'ENFP-항공기정비원-3',
    },
    {
      id: 'ENFP-항공기정비원-3',
      message: '연봉은 약 3700만원 이야!',
      trigger: 'ENFP-항공기정비원-4',
    },
    {
      id: 'ENFP-항공기정비원-4',
      message:
        '교통의 세계화에 따라 국내외 여객수송과 항공화물 수송의 실적이 지속적으로 증가하고 있어',
      trigger: 'ENFP-항공기정비원-5',
    },
    {
      id: 'ENFP-항공기정비원-5',
      message:
        '이러한 수송실적의 증가에 따라 항공기 및 항공기기의 수, 운송횟수도 증가되기 때문에',
      trigger: 'ENFP-항공기정비원-6',
    },
    {
      id: 'ENFP-항공기정비원-6',
      message:
        '교통안전을 위해 항공기정비원은 향후 10년간 고용은 연평균 1.9% 증가할 전망이래!',
      trigger: 'ENFP-항공기정비원-7',
    },
    {
      id: 'ENFP-항공기정비원-7',
      message: ' 다른 직업들도 다시 볼래? ',
      trigger: 'ENFP-항공기정비원-8',
    },
    {
      id: 'ENFP-항공기정비원-8',
      options: [
        { value: 1, label: '응 좋아!', trigger: 'ENFP-10' },
        { value: 2, label: '아니~ 괜찮아!', trigger: '3' },
      ],
    },
  ];
  return (
    <div>
      <Goback page='/chatting'>캐릭터</Goback>
      <ThemeProvider theme={otherFontTheme}>
        <div className={style.chatBox}>
          <ChatBot steps={steps}></ChatBot>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ChatRoom;
