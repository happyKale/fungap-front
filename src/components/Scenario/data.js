export default [
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
      { value: 1, label: 'INTJ', trigger: 'INTJ-1' },
      { value: 2, label: 'INTP', trigger: 'INTP-1' },
      { value: 3, label: 'ENTJ', trigger: 'ENTJ-1' },
      { value: 4, label: 'ENTP', trigger: 'ENTP-1' },
      { value: 5, label: 'INFJ', trigger: 'INFJ-1' },
      { value: 6, label: 'INFP', trigger: 'INFP-1' },
      { value: 7, label: 'ENFJ', trigger: 'ENFJ-1' },
      { value: 8, label: 'ENFP', trigger: 'ENFP-1' },
      { value: 9, label: 'ISTJ', trigger: 'ISTJ-1' },
      { value: 10, label: 'ISFJ', trigger: 'ISFJ-1' },
      { value: 11, label: 'ESTJ', trigger: 'ESTJ-1' },
      { value: 12, label: 'ESFJ', trigger: 'ESFJ-1' },
      { value: 13, label: 'ISTP', trigger: 'ISTP-1' },
      { value: 14, label: 'ISFP', trigger: 'ISFP-1' },
      { value: 15, label: 'ESTP', trigger: 'ESTP-1' },
      { value: 16, label: 'ESFP', trigger: 'ESFP-1' },
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
      { value: 1, label: '연구원', trigger: 'INTP-연구원-1' },
      { value: 2, label: '심리학자', trigger: 'INTP-심리학자-1' },
      { value: 3, label: '프로그래머', trigger: 'INTP-프로그래머-1' },
      { value: 4, label: '수학자', trigger: 'INTP-수학자-1' },
    ],
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
    message: '완벽주의자만큼이나 세심하고 꼼꼼한 면모를 보이기도 하지, 안그래?',
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
      { value: 4, label: '스포츠 트레이너', trigger: 'ISFJ-스포츠 트레이너-1' },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
    message: '부상방지 및 재활에 스포츠 트레이너의 역할이 강조되고 있기 때문에',
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
    message: '방송프로그램의 제작 수가 증가함에 따라 인력수요도 증가하고 있어!',
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 3, label: '빅데이터전문가', trigger: 'ESTP-빅데이터전문가-1' },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  // ENTP 시작
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
    message: 'ENTP는 전체 인구의 대략 3%만 차지하고 있다고 해! 꽤나 희소한걸?',
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENTP-영화감독-1',
    message: '영화감독은 영화제작을 위해 연출을 하고,',
    trigger: 'ENTP-영화감독-2',
  },
  {
    id: 'ENTP-영화감독-2',
    message: '연기자와 제작진, 그리고 편집과 녹음을 총괄하여 지도하는 일을 해!',
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENTP-정치인-1',
    message:
      '정치인은 정치에 활발히 참여하거나 매우 밀접한 관련을 갖는 직업을 가진 사람을 말해!',
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
    message: '일반 신문 뿐 아니라 인터넷을 통한 여러 매체에 전달이 가능하므로',
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
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 1, label: '물리치료사', trigger: 'INFJ-물리치료사-1' },
      { value: 2, label: '보건교사', trigger: 'INFJ-보건교사-1' },
      { value: 3, label: '번역가', trigger: 'INFJ-번역가-1' },
      { value: 4, label: '디자이너', trigger: 'INFJ-디자이너-1' },
    ],
  },
  {
    id: 'INFJ-물리치료사-1',
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
    trigger: 'INFJ-물리치료사-9',
  },
  {
    id: 'INFJ-물리치료사-9',
    message: '다른 직업들도 다시 볼래?',
    trigger: 'INFJ-물리치료사-10',
  },
  {
    id: 'INFJ-물리치료사-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INFJ-12' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'INFJ-보건교사-1',
    message: '보건 교사에 관심이 있구나!!',
    trigger: 'INFJ-보건교사-2',
  },
  {
    id: 'INFJ-보건교사-2',
    message: '좋은 직업이지!',
    trigger: 'INFJ-보건교사-3',
  },
  {
    id: 'INFJ-보건교사-3',
    message:
      '보건교사는 학생과 교직원의 건강상태와 학교의 보건활동 진행상태를 평가하기 위해 정기적인 건강 진단 또는 검사를 실시하시고. 응급처치, 가정간호, 질병 및 전염병에 대한 보건교육과 건강상담을 담당하며 예방접종을 시행하시는 분이야!',
    trigger: 'INFJ-보건교사-4',
  },
  {
    id: 'INFJ-보건교사-4',
    message:
      '보건교사가 되기 위해서는 간호학사를 취득하고 각 시·도 교육청에서 실시하는 보건교사 임용시험에 합격해야해',
    trigger: 'INFJ-보건교사-5',
  },
  {
    id: 'INFJ-보건교사-5',
    message:
      '교육부는 비교과 분야의 보건·영양 등의 교원이 2018년도 법정정원에 현저히 미달되어 있어 이 분야 인력을 대규모로 채용하겠다고 발표했으며 실제로 2021년도엔 보건교사 모집이 역대 최대 수치로 이루어졌어!',
    trigger: 'INFJ-보건교사-6',
  },
  {
    id: 'INFJ-보건교사-6',
    message: '하위(25%) 3,488만 원, 중위값 4,078만 원, 상위(25%) 5,305만 원',
    trigger: 'INFJ-보건교사-7',
  },
  {
    id: 'INFJ-보건교사-7',
    message: '다른 직업들도 다시 볼래?',
    trigger: 'INFJ-보건교사-8',
  },
  {
    id: 'INFJ-보건교사-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INFJ-12' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'INFJ-번역가-1',
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
    trigger: 'INFJ-번역가-7',
  },

  {
    id: 'INFJ-번역가-7',
    message: '다른 직업들도 다시 볼래?',
    trigger: 'INFJ-번역가-8',
  },
  {
    id: 'INFJ-번역가-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INFJ-12' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'INFJ-디자이너-1',
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
    trigger: 'INFJ-디자이너-7',
  },
  {
    id: 'INFJ-디자이너-7',
    message: '다른 직업들도 다시 볼래?',
    trigger: 'INFJ-디자이너-8',
  },
  {
    id: 'INFJ-디자이너-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INFJ-12' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
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
    message: '좋아! 공감력과 통찰력을 지닌 너에게 어울리는 직업을 소개해줄게!',
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
    message: '투철한 사명감과 성실함, 환자에 대한 세심한 배려까지 필요로 하지!',
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
      { value: 1, label: '응 좋아!', trigger: 'ISFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
    message: '최근 SNS 등을 통해 개인의 개성이 주목받는 분위기가 커지고 있어서',
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
      { value: 1, label: '응 좋아!', trigger: 'ISFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 1, label: '응 좋아!', trigger: 'ISFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 1, label: '응 좋아!', trigger: 'ISFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },

  //ENTJ시작
  {
    id: 'ENTJ-1',
    message:
      'ENTJ 구나! 대담한 통솔자! 넌 자기주장이 강하면서 단호하고 지도력과 통솔력이 있지?!',
    trigger: 'ENTJ-2',
  },
  {
    id: 'ENTJ-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'ENTJ-3' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ENTJ-3' },
    ],
  },
  {
    id: 'ENTJ-3',
    message:
      '평소에 사교활동에 적극적이며 너가 직접 모임을 주도하고 적극적으로 대화를 이끌어 나가지, 맞니??',
    trigger: 'ENTJ-4',
  },
  {
    id: 'ENTJ-4',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'ENTJ-5' },
      { value: 2, label: '맞는거 같기두?', trigger: 'ENTJ-5' },
    ],
  },
  {
    id: 'ENTJ-5',
    message: `어려운 도전을 마다하지 않고 즐기며 일과 친한 편이니?`,
    trigger: 'ENTJ-6',
  },

  {
    id: 'ENTJ-6',
    options: [
      { value: 1, label: '응 맞아', trigger: 'ENTJ-7' },
      { value: 2, label: '쫌 그런거 같아', trigger: 'ENTJ-7' },
    ],
  },
  {
    id: 'ENTJ-7',
    message:
      'ENTJ는 전체 인구의 약 1.8%로 희소하지만 사회적으로 가장 성공하는 성격유형이라 영향력이 상당히 큰 편이야!',
    trigger: 'ENTJ-8',
  },
  {
    id: 'ENTJ-8',
    message: '넌 꼰대와 같은 권위주의자들을 보면 참지 못하지?',
    trigger: 'ENTJ-9',
  },
  {
    id: 'ENTJ-9',
    options: [
      { value: 1, label: '맞아! 꼰대는 못 참지!', trigger: 'ENTJ-10' },
      { value: 2, label: '조금 불편한 것 같아!', trigger: 'ENTJ-10' },
    ],
  },
  {
    id: 'ENTJ-10',
    message:
      '좋아! 통솔력, 도전적이며 성실한 너에게 어울리는 직업을 소개해줄게!',
    trigger: 'ENTJ-11',
  },
  {
    id: 'ENTJ-11',
    options: [
      { value: 1, label: '변호사', trigger: 'ENTJ-변호사-1' },
      { value: 2, label: '공인중개사', trigger: 'ENTJ-공인중개사-1' },
      { value: 3, label: '정치인', trigger: 'ENTJ-정치인-1' },
      { value: 4, label: '장교(군인)', trigger: 'ENTJ-장교(군인)-1' },
    ],
  },
  {
    id: 'ENTJ-변호사-1',
    message:
      '변호사란 법을 다루는 실무가로서, 형사소송에서 피고인 등을 위해 변호해주거나',
    trigger: 'ENTJ-변호사-2',
  },
  {
    id: 'ENTJ-변호사-2',
    message:
      '민사소송·행정소송 등에서 소송의 당사자들을 대리하여 소송을 수행하거나, ',
    trigger: 'ENTJ-변호사-3',
  },
  {
    id: 'ENTJ-변호사-3',
    message: '또는 법률 자문을 해주는 것을 직업으로 삼는 사람을 말해!',
    trigger: 'ENTJ-변호사-4',
  },
  {
    id: 'ENTJ-변호사-4',
    message: '연봉은 평균 8189만원 정도야!',
    trigger: 'ENTJ-변호사-5',
  },
  {
    id: 'ENTJ-변호사-5',
    message:
      '법에 대한 군민의 인식 향상과 법을 통한 분쟁해소, 자산규모 증가와 같은 이유로',
    trigger: 'ENTJ-변호사-6',
  },
  {
    id: 'ENTJ-변호사-6',
    message: '변호사에 대한 수요가 증가되고 있어서 ',
    trigger: 'ENTJ-변호사-7',
  },
  {
    id: 'ENTJ-변호사-7',
    message: '향후 10년간 변호사의 고용은 연평균 2% 증가될 것으로 전망돼!',
    trigger: 'ENTJ-변호사-8',
  },
  {
    id: 'ENTJ-변호사-8',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENTJ-변호사-9',
  },
  {
    id: 'ENTJ-변호사-9',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENTJ-공인중개사-1',
    message:
      '공인중개사는 부동산 매매과정에서 구매자와 판매자를 중개해주는 역할을 해!',
    trigger: 'ENTJ-공인중개사-2',
  },
  {
    id: 'ENTJ-공인중개사-2',
    message:
      '주거 및 상업용 부동산 판매 및 중개 등 부동산 관련 거의 모든 것이 부동산 중개인의 역할이라고 볼 수 있지!',
    trigger: 'ENTJ-공인중개사-3',
  },
  {
    id: 'ENTJ-공인중개사-3',
    message: '성실한 너에게 딱인 직업이지!',
    trigger: 'ENTJ-공인중개사-4',
  },
  {
    id: 'ENTJ-공인중개사-4',
    message: '연봉은 약 3300만원부터야!',
    trigger: 'ENTJ-공인중개사-5',
  },
  {
    id: 'ENTJ-공인중개사-5',
    message:
      '부동산의 흐름은 화폐의 흐름과 함께 한다고 보기 때문에 화폐의 필요성과 함께 간다고 볼 수 있어',
    trigger: 'ENTJ-공인중개사-6',
  },
  {
    id: 'ENTJ-공인중개사-6',
    message: '이로 인해 부동산 전망의 하락세는 없다고 해도 과언이 아니지!',
    trigger: 'ENTJ-공인중개사-7',
  },
  {
    id: 'ENTJ-공인중개사-7',
    message:
      '잠깐의 침체만 있을 뿐 화폐가 이용되는 사회라면 부동산 시장의 파이는 점점 커질 것이고',
    trigger: 'ENTJ-공인중개사-8',
  },
  {
    id: 'ENTJ-공인중개사-8',
    message: '이를 위해 공인 중개사의 역할 또한 중요시 될 거야!',
    trigger: 'ENTJ-공인중개사-9',
  },
  {
    id: 'ENTJ-공인중개사-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENTJ-공인중개사-10',
  },
  {
    id: 'ENTJ-공인중개사-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENTJ-정치인-1',
    message:
      '정치인은 입법, 사법, 행정 등의 작용에 관여하며 국가정치에 깊숙이 관여하는 사람 말해!',
    trigger: 'ENTJ-정치인-2',
  },
  {
    id: 'ENTJ-정치인-2',
    message:
      '정치가는 대표자로써 사회적 갈등을 쉽게 중재하고 대안을 제시하여 사회집단 간의 극단적인 대립을 막을 수 있지!',
    trigger: 'ENTJ-정치인-3',
  },
  {
    id: 'ENTJ-정치인-3',
    message: '너의 그 뛰어난 통솔력을 잘 발휘할 수 있는 직업일 것 같아!',
    trigger: 'ENTJ-정치인-4',
  },
  {
    id: 'ENTJ-정치인-4',
    message: '연봉은 약 8500만원 정도고 국회의원은 1억5천만원까지 간다고 해!',
    trigger: 'ENTJ-정치인-5',
  },
  {
    id: 'ENTJ-정치인-5',
    message:
      '국민 청원 어플리케이션 정치토론 인터넷 커뮤니티, SNS와 같은 다양한 매체들이 등장함으로써',
    trigger: 'ENTJ-정치인-6',
  },
  {
    id: 'ENTJ-정치인-6',
    message:
      '국민들의 정치에 관한 관심이 증가하였고 더 큰 영향력을 세울 수 있게 되었어!',
    trigger: 'ENTJ-정치인-7',
  },
  {
    id: 'ENTJ-정치인-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENTJ-정치인-8',
  },
  {
    id: 'ENTJ-정치인-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENTJ-장교(군인)-1',
    message: '장교는 육군, 해군, 공군으로 나뉘는데~',
    trigger: 'ENTJ-장교(군인)-2',
  },
  {
    id: 'ENTJ-장교(군인)-2',
    message:
      '육군 장교는 지상방위, 해군장교는 해양수호, 공군장교는 영공수호를 위한 지휘관으로서',
    trigger: 'ENTJ-장교(군인)-3',
  },
  {
    id: 'ENTJ-장교(군인)-3',
    message:
      '일반 병사를 지휘·통솔하거나 혹은 참모로서 지휘관 보좌 및 전술연구 등의 역할을 수행해!',
    trigger: 'ENTJ-장교(군인)-4',
  },
  {
    id: 'ENTJ-장교(군인)-4',
    message: '통솔력 있고 성실한 너에게 딱인 것 같아!',
    trigger: 'ENTJ-장교(군인)-5',
  },
  {
    id: 'ENTJ-장교(군인)-5',
    message: '연봉은 평균 3640만원 정도야!',
    trigger: 'ENTJ-장교(군인)-6',
  },
  {
    id: 'ENTJ-장교(군인)-6',
    message:
      '정부의 국방개혁으로 병력의 양적 성장보다는 질적 관리에 대한 요청이 커지고 있어서',
    trigger: 'ENTJ-장교(군인)-7',
  },
  {
    id: 'ENTJ-장교(군인)-7',
    message:
      '단계적으로 병력규모를 축소·조정하되 전문적이고 특수화된 업무 중심으로 군 병력을 유지할 계획이야!',
    trigger: 'ENTJ-장교(군인)-8',
  },
  {
    id: 'ENTJ-장교(군인)-8',
    message: '그래서 장교의 고용은 현 상태를 유지할 전망이라네!',
    trigger: 'ENTJ-장교(군인)-9',
  },
  {
    id: 'ENTJ-장교(군인)-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENTJ-장교(군인)-10',
  },
  {
    id: 'ENTJ-장교(군인)-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 4, label: '항공기정비원', trigger: 'ISTP-항공기정비원-1' },
    ],
  },
  {
    id: 'ISTP-경찰-1',
    message:
      '경찰은 국민의 생명과 재산보호 사회공공의 질서를 유지시키는 직업이야!',
    trigger: 'ISTP-경찰-2',
  },
  {
    id: 'ISTP-경찰-2',
    message: '민첩한 상황판단과 임기응변이 필요하고',
    trigger: 'ISTP-경찰-3',
  },
  {
    id: 'ISTP-경찰-3',
    message: '투철한 사명감과 성실함, 논리적이고 이성적인 성격이 필요로 하지!',
    trigger: 'ISTP-경찰-4',
  },
  {
    id: 'ISTP-경찰-4',
    message: '연봉은 약 3500만원 정도야!',
    trigger: 'ISTP-경찰-5',
  },
  {
    id: 'ISTP-경찰-5',
    message: '현재 학교폭력, 성폭력, 아동청소년 보호, 각종 범죄예방 등,',
    trigger: 'ISTP-경찰-6',
  },
  {
    id: 'ISTP-경찰-6',
    message:
      '민생치안을 위한 경찰인력 증원이 필요하다는 국민의 공감대가 형성되어 있어서',
    trigger: 'ISTP-경찰-7',
  },
  {
    id: 'ISTP-경찰-7',
    message: '향후 10년간 고용은 연평균 1.7% 증가할 것으로 전망되고 있어!',
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
      { value: 1, label: '응 좋아!', trigger: 'ISTP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ISTP-소프트웨어개발자-1',
    message:
      '소프트웨어개발자는 좁게는 소프트웨어 설계와 코딩, 넓게는 프로젝트 관리 업무를 수행하는 사람을 포함해~! ',
    trigger: 'ISTP-소프트웨어개발자-2',
  },
  {
    id: 'ISTP-소프트웨어개발자-2',
    message: '정밀하고 자기 기술에 심취할 수 있는 분야로 귀찮음이 많긴하지만',
    trigger: 'ISTP-소프트웨어개발자-3',
  },
  {
    id: 'ISTP-소프트웨어개발자-3',
    message:
      '순간 집중도 잘해서 분석해서 자료를 정리, 조직하는것을 좋아하는 너에게 추천할게!',
    trigger: 'ISTP-소프트웨어개발자-4',
  },
  {
    id: 'ISTP-소프트웨어개발자-4',
    message: '연봉은 약 3800만원이야~!',
    trigger: 'ISTP-소프트웨어개발자-5',
  },
  {
    id: 'ISTP-소프트웨어개발자-5',
    message:
      '특히 시스템소프트웨어는 고부가가치성 기술집약체의 핵심으로서, 최근에는 클라우드 컴퓨팅, 스마트폰 대중화, 사회관계망(SNS)으로 인한 환경변화에 따라 매출증대에 있어 고객관계관리(CRM)와 빅데이터 결합한 활용이 중요해지고 있어! ',
    trigger: 'ISTP-소프트웨어개발자-6',
  },
  {
    id: 'ISTP-소프트웨어개발자-6',
    message: '향후 10년간 고용은 연평균 0.7% 증가할 것으로 전망돼!',
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
      { value: 1, label: '응 좋아!', trigger: 'ISTP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ISTP-경제학자-1',
    message:
      '경제학자는 주로 사회에서 일어나는 경제현상을 분석, 연구하고 수학과 통계 등의 방법으로 경제적인 현상이 일어나는 이유를 설명해서 ',
    trigger: 'ISTP-경제학자-2',
  },
  {
    id: 'ISTP-경제학자-2',
    message:
      ' 여러 경제적, 사회적 문제들의 합리적 해결방법을 연구하는 사람이야!',
    trigger: 'ISTP-경제학자-3',
  },
  {
    id: 'ISTP-경제학자-3',
    message: '분석을 좋아하고 관찰력이 좋으며 ',
    trigger: 'ISTP-경제학자-4',
  },
  {
    id: 'ISTP-경제학자-4',
    message:
      '인과 관계나 객관적 원리에 관심이 많은 너에게 추천할 수 있을거 같아!',
    trigger: 'ISTP-경제학자-5',
  },
  {
    id: 'ISTP-경제학자-5',
    message:
      '연봉은 약 7000만원 정도고 최근 세계 경제가 장기 침체에 빠져 있어 경기전망을 비롯해 청년실업에 따른 각종 경제 현황을 분석하는 연구가 지속적으로 이루어지고 있어 향후 10년간 고용은 1.9% 증가할 것으로 전망되고 있어~!!',
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
      { value: 1, label: '응 좋아!', trigger: 'ISTP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
      { value: 1, label: '응 좋아!', trigger: 'ISTP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
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
    message: '그리고 사회적인 고정관념을 안좋아해 맞니?',
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
    message: `창의력을 펼칠 수 있는 일에 흥미를 느껴, 안그래?`,
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
      '따뜻하고 정열적이며 활기가 넘치며 상상력이 풍부한 너에게! 맞는 직업을 추천해줄게!',
    trigger: 'ENFP-11',
  },
  {
    id: 'ENFP-11',
    options: [
      { value: 1, label: '방송프로듀서', trigger: 'ENFP-방송프로듀서-1' },
      { value: 2, label: '드라마작가', trigger: 'ENFP-드라마작가-1' },
      { value: 3, label: '광고기획자', trigger: 'ENFP-광고기획자-1' },
      { value: 4, label: '기자', trigger: 'ENFP-기자-1' },
    ],
  },
  {
    id: 'ENFP-방송프로듀서-1',
    message:
      '프로듀서는 라디오 또는 텔레비전의 프로그램을 기획하고 제작하는 일을 해!',
    trigger: 'ENFP-방송프로듀서-2',
  },
  {
    id: 'ENFP-방송프로듀서-2',
    message:
      '완성된 대본을 평가하고 프로그램을 기획해 제작진과 연기자들을 선출하지',
    trigger: 'ENFP-방송프로듀서-3',
  },
  {
    id: 'ENFP-방송프로듀서-3',
    message:
      '뿐만 아니라 의상, 무대배경, 음악, 카메라작업 등을 결정하기 위해 제작진과 협의하는 사람이지!',
    trigger: 'ENFP-방송프로듀서-4',
  },
  {
    id: 'ENFP-방송프로듀서-4',
    message: '연봉은 4701만원 정도야!',
    trigger: 'ENFP-방송프로듀서-5',
  },
  {
    id: 'ENFP-방송프로듀서-5',
    message: '뉴미디어의 발전으로 방송이 점차 다매체, 다채널화 되어',
    trigger: 'ENFP-방송프로듀서-6',
  },
  {
    id: 'ENFP-방송프로듀서-6',
    message: '방송프로그램의 제작 수가 증가함에 따라 인력수요도 증가하고 있어!',
    trigger: 'ENFP-방송프로듀서-7',
  },
  {
    id: 'ENFP-방송프로듀서-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENFP-방송프로듀서-8',
  },
  {
    id: 'ENFP-방송프로듀서-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENFP-드라마작가-1',
    message:
      '드라마작가는 라디오나 텔레비전 드라마에 필요한 대본을 창작하고 글을 쓰는 일(집필)을 담당해!',
    trigger: 'ENFP-드라마작가-2',
  },
  {
    id: 'ENFP-드라마작가-2',
    message:
      '드라마의 주제를 선택하고 내용에 따른 역사적 현실이나 사건의 과정 등을 조사, 분석하여 작품의 줄거리를 구상하지!',
    trigger: 'ENFP-드라마작가-3',
  },
  {
    id: 'ENFP-드라마작가-3',
    message:
      '사람들의 마음을 끌만한 아이디어를 이끌어낼 수 있는 너에게 어울릴 것 같아!',
    trigger: 'ENFP-드라마작가-4',
  },
  {
    id: 'ENFP-드라마작가-4',
    message: '연봉은 3309만원 정도야!',
    trigger: 'ENFP-드라마작가-5',
  },
  {
    id: 'ENFP-드라마작가-5',
    message:
      '드라마콘텐츠가 한류열풍과 함께 해외수출액이 급격히 증가하고 방송통신기술이 발달하면서',
    trigger: 'ENFP-드라마작가-6',
  },
  {
    id: 'ENFP-드라마작가-6',
    message:
      '케이블방송, 인터넷방송, IPTV 등 채널이 확대됨에 따라 방송프로그램 제작 수도 증가하게 되었어!',
    trigger: 'ENFP-드라마작가-7',
  },
  {
    id: 'ENFP-드라마작가-7',
    message:
      '따라서 드라마작가의 향후 10년간의 고용은 연평균 1.3% 증가할 것으로 전망돼!',
    trigger: 'ENFP-드라마작가-8',
  },
  {
    id: 'ENFP-드라마작가-8',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENFP-드라마작가-9',
  },
  {
    id: 'ENFP-드라마작가-9',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENFP-광고기획자-1',
    message: '특정 상품이나 서비스에 대한 광고 제작 방향 및 전략 수립에서부터',
    trigger: 'ENFP-광고기획자-2',
  },
  {
    id: 'ENFP-광고기획자-2',
    message: '실제 광고 제작까지의 전체적인 관리와 감독 업무를 담당해!',
    trigger: 'ENFP-광고기획자-3',
  },
  {
    id: 'ENFP-광고기획자-3',
    message: '상상력이 풍부하고 창의력이 넘치는 너에게 추천하는 직업이야!',
    trigger: 'ENFP-광고기획자-4',
  },
  {
    id: 'ENFP-광고기획자-4',
    message: '연봉은 3281만원 정도야!',
    trigger: 'ENFP-광고기획자-5',
  },
  {
    id: 'ENFP-광고기획자-5',
    message:
      '인터넷, SNS를 이용한 광고 및 홍보가 급속도로 발전하고 있어 향후 10년간 고용은 연평균 1.6% 증가할 전망이야!',
    trigger: 'ENFP-광고기획자-6',
  },
  {
    id: 'ENFP-광고기획자-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENFP-광고기획자-7',
  },
  {
    id: 'ENFP-광고기획자-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENFP-기자-1',
    message:
      '기자는 우리 주변에서 일어나는 각종 사고ㆍ사건, 정치ㆍ경제 소식, 생활 정보 등을',
    trigger: 'ENFP-기자-2',
  },
  {
    id: 'ENFP-기자-2',
    message:
      '신문, 잡지, 라디오, TV, 인터넷 등을 통해 일반인에게 신속하게 알려주는 일을해!',
    trigger: 'ENFP-기자-3',
  },
  {
    id: 'ENFP-기자-3',
    message: '연봉은 약 3992만원 이야!',
    trigger: 'ENFP-기자-4',
  },
  {
    id: 'ENFP-기자-4',
    message:
      '교통의 세계화에 따라 국내외 여객수송과 항공화물 수송의 실적이 지속적으로 증가하고 있어',
    trigger: 'ENFP-기자-5',
  },
  {
    id: 'ENFP-기자-5',
    message:
      '이러한 수송실적의 증가에 따라 항공기 및 항공기기의 수, 운송횟수도 증가되기 때문에',
    trigger: 'ENFP-기자-6',
  },
  {
    id: 'ENFP-기자-6',
    message:
      '교통안전을 위해 항공기정비원은 향후 10년간 고용은 연평균 1.9% 증가할 전망이래!',
    trigger: 'ENFP-기자-7',
  },
  {
    id: 'ENFP-기자-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENFP-기자-8',
  },
  {
    id: 'ENFP-기자-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },

  //ENFJ 시작
  {
    id: 'ENFJ-1',
    message:
      'ENFP구나! 카리스마와 충만한 열정을 지닌 타고난 리더형이래! 맞는거 같아?',
    trigger: 'ENFJ-2',
  },
  {
    id: 'ENFJ-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'ENFJ-3' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ENFJ-3' },
    ],
  },
  {
    id: 'ENFJ-3',
    message: '사람을 좋아하고 연민과 동정, 이해심이 많지?',
    trigger: 'ENFJ-4',
  },
  {
    id: 'ENFJ-4',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'ENFJ-5' },
      { value: 2, label: '맞는거 같기두?', trigger: 'ENFJ-5' },
    ],
  },
  {
    id: 'ENFJ-5',
    message: `살기 좋은 공동체를 만들기 위해 사람들을 동참시키고 이끄는 데에서 큰 자부심과 행복을 느끼니?`,
    trigger: 'ENFJ-6',
  },

  {
    id: 'ENFJ-6',
    options: [
      { value: 1, label: '응 맞아', trigger: 'ENFJ-7' },
      { value: 2, label: '쫌 그런거 같아', trigger: 'ENFJ-7' },
    ],
  },
  {
    id: 'ENFJ-7',
    message: '인생을 따뜻하게 바라보며',
    trigger: 'ENFJ-8',
  },
  {
    id: 'ENFJ-8',
    message:
      '타인의 관심사에 귀 기울이며 그들을 배려하고 표현이 설득적이래, 맞니?',
    trigger: 'ENFJ-9',
  },
  {
    id: 'ENFJ-9',
    options: [
      { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ENFJ-10' },
      { value: 2, label: '그런것 같아!', trigger: 'ENFJ-10' },
    ],
  },
  {
    id: 'ENFJ-10',
    message:
      '따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많은 너에게! 맞는 직업을 추천해줄게!',
    trigger: 'ENFJ-11',
  },
  {
    id: 'ENFJ-11',
    options: [
      { value: 1, label: 'CEO', trigger: 'ENFJ-CEO-1' },
      { value: 2, label: '정신과의사', trigger: 'ENFJ-정신과의사-1' },
      { value: 3, label: '광고기획자', trigger: 'ENFJ-광고기획자-1' },
      { value: 4, label: '호텔지배인', trigger: 'ENFJ-호텔지배인-1' },
    ],
  },
  {
    id: 'ENFJ-CEO-1',
    message:
      'CEO는 기업의 업무 전반을 이끄는 사람으로 회장, 사장, 대표이사가 이에 해당되지!',
    trigger: 'ENFJ-CEO-2',
  },
  {
    id: 'ENFJ-CEO-2',
    message:
      '기업의 기본적인 경영방침과 사업목표를 계획하고, 해당 목표를 달성하기 위한 체계적인 전략과 정책을 수립해!',
    trigger: 'ENFJ-CEO-3',
  },
  {
    id: 'ENFJ-CEO-3',
    message:
      'CEO의 연봉은 천차만별이지만 평균적인 연봉은 2019년 기준으로 1억3천만원~1억8천만원 정도래!',
    trigger: 'ENFJ-CEO-4',
  },
  {
    id: 'ENFJ-CEO-4',
    message: '카리스마와 충만한 열정을 지닌 너에게 딱 맞을거 같아!',
    trigger: 'ENFJ-CEO-5',
  },
  {
    id: 'ENFJ-CEO-5',
    message:
      '기업의 지속적 경영을 위하여 전문경영인은 계속 필요로 할 것으로 예상돼!',
    trigger: 'ENFJ-CEO-6',
  },
  {
    id: 'ENFJ-CEO-6',
    message: '전망은 향후 5년간 현 고용 상태를 유지할 것이라고 해!',
    trigger: 'ENFJ-CEO-7',
  },
  {
    id: 'ENFJ-CEO-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENFJ-CEO-8',
  },
  {
    id: 'ENFJ-CEO-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENFJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENFJ-정신과의사-1',
    message:
      '정신과의사는 정신 장애와 스트레스와 연관된 다양한 신체 질환에 대한 예방적 접근을 하여',
    trigger: 'ENFJ-정신과의사-2',
  },
  {
    id: 'ENFJ-정신과의사-2',
    message:
      '환자와의 정신과적 면담, 정신상태 검사, 다양한 심리검사 및 뇌기능 검사 등을 하지!',
    trigger: 'ENFJ-정신과의사-3',
  },
  {
    id: 'ENFJ-정신과의사-3',
    message:
      '따뜻하고 적극적이며 사교성이 풍부하고 동정심이 많은 너에게 잘 맞을 것 같아!',
    trigger: 'ENFJ-정신과의사-4',
  },
  {
    id: 'ENFJ-정신과의사-4',
    message: '연봉은 9235만원이야!',
    trigger: 'ENFJ-정신과의사-5',
  },
  {
    id: 'ENFJ-정신과의사-5',
    message: '핵가족의 심화로 정신적 고통과 소외감 때문에',
    trigger: 'ENFJ-정신과의사-6',
  },
  {
    id: 'ENFJ-정신과의사-6',
    message: '어려움을 겪고 있는 사람들이 증가하고 있어',
    trigger: 'ENFJ-정신과의사-7',
  },
  {
    id: 'ENFJ-정신과의사-7',
    message: '향후 5년간 정신과 의사의 고용은 다소 증가할 것으로 전망돼!',
    trigger: 'ENFJ-정신과의사-8',
  },
  {
    id: 'ENFJ-정신과의사-8',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENFJ-정신과의사-9',
  },
  {
    id: 'ENFJ-정신과의사-9',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENFJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENFJ-광고기획자-1',
    message: '특정 상품이나 서비스에 대한 광고 제작 방향 및 전략 수립에서부터',
    trigger: 'ENFJ-광고기획자-2',
  },
  {
    id: 'ENFJ-광고기획자-2',
    message: '실제 광고 제작까지의 전체적인 관리와 감독 업무를 담당해!',
    trigger: 'ENFJ-광고기획자-3',
  },
  {
    id: 'ENFJ-광고기획자-3',
    message: '따뜻하고 적극적이며 책임감이 강한 너에게 추천하는 직업이야!',
    trigger: 'ENFJ-광고기획자-4',
  },
  {
    id: 'ENFJ-광고기획자-4',
    message: '연봉은 3281만원 정도야!',
    trigger: 'ENFJ-광고기획자-5',
  },
  {
    id: 'ENFJ-광고기획자-5',
    message:
      '인터넷, SNS를 이용한 광고 및 홍보가 급속도로 발전하고 있어 향후 10년간 고용은 연평균 1.6% 증가할 전망이야!',
    trigger: 'ENFJ-광고기획자-6',
  },
  {
    id: 'ENFJ-광고기획자-6',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENFJ-광고기획자-7',
  },
  {
    id: 'ENFJ-광고기획자-7',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENFJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ENFJ-호텔지배인-1',
    message: '호텔지배인은 호텔에서 이루어지는 예약업무, 판매업무, ',
    trigger: 'ENFJ-호텔지배인-2',
  },
  {
    id: 'ENFJ-호텔지배인-2',
    message: '접객, 식당, 주방, 홍보 등의 다양한 작업들이',
    trigger: 'ENFJ-호텔지배인-3',
  },
  {
    id: 'ENFJ-호텔지배인-3',
    message: '원할히 운용될 수 있도록 각종 활동들을 계획하고,',
    trigger: 'ENFJ-호텔지배인-4',
  },
  {
    id: 'ENFJ-호텔지배인-4',
    message: '종사원들의 업무를 종합적으로 관리 감독하는 일을 해!',
    trigger: 'ENFJ-호텔지배인-5',
  },
  {
    id: 'ENFJ-호텔지배인-5',
    message:
      '호텔을 방문하는 주요 소비자는 최고급 서비스를 제공받길 기대하기 때문에',
    trigger: 'ENFJ-호텔지배인-6',
  },
  {
    id: 'ENFJ-호텔지배인-6',
    message:
      '호텔지배인의 고용은 향후 10년간 연평균 0.9% 증가할 것으로 전망돼!',
    trigger: 'ENFJ-호텔지배인-7',
  },
  {
    id: 'ENFJ-호텔지배인-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ENFJ-호텔지배인-8',
  },
  {
    id: 'ENFJ-호텔지배인-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ENFJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  //ESFP 시작
  {
    id: 'ESFP-1',
    message:
      'ESFP구나! 넌 대중 앞에서 자기표현이나 어필, 연설로 가치관을 호소할 때 겁내지 않고 잘 말할 수 있지?',
    trigger: 'ESFP-2',
  },
  {
    id: 'ESFP-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'ESFP-3' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ESFP-3' },
    ],
  },
  {
    id: 'ESFP-3',
    message:
      '흥미를 갖고 정열을 기울이고 있는 것에 대해서는 유달리 열심히 목표를 의식하지?',
    trigger: 'ESFP-4',
  },
  {
    id: 'ESFP-4',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'ESFP-5' },
      { value: 2, label: '맞는거 같기두?', trigger: 'ESFP-5' },
    ],
  },
  {
    id: 'ESFP-5',
    message: `목표를 달성할 때는 효율적으로 이루기 위해서 계획을 세우며, 혼자서 할 수 없는 일은 도움을 구하는 편이지?`,
    trigger: 'ESFP-6',
  },

  {
    id: 'ESFP-6',
    options: [
      { value: 1, label: '응 맞아', trigger: 'ESFP-7' },
      { value: 2, label: '쫌 그런거 같아', trigger: 'ESFP-7' },
    ],
  },
  {
    id: 'ESFP-7',
    message: '예술, 음악, 노래, 춤 같은 것들을 좋아하고',
    trigger: 'ESFP-8',
  },
  {
    id: 'ESFP-8',
    message: '대중들 앞에서 부르는 것을 두려워하지 않지?',
    trigger: 'ESFP-9',
  },
  {
    id: 'ESFP-9',
    options: [
      { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ESFP-10' },
      { value: 2, label: '그런것 같아!', trigger: 'ESFP-10' },
    ],
  },
  {
    id: 'ESFP-10',
    message:
      '사교적이고 활동적이며 예술성이 뛰어난 너에게 맞는 직업을 추천해줄게!',
    trigger: 'ESFP-11',
  },
  {
    id: 'ESFP-11',
    options: [
      { value: 1, label: '일러스트레이터', trigger: 'ESFP-일러스트레이터-1' },
      { value: 2, label: '승무원', trigger: 'ESFP-승무원-1' },
      { value: 3, label: '배우', trigger: 'ESFP-배우-1' },
      { value: 4, label: '애니메이터', trigger: 'ESFP-애니메이터-1' },
    ],
  },
  {
    id: 'ESFP-일러스트레이터-1',
    message:
      '일러스트레이터는 주로 광고나 영상매체의 그림이나 문양을 도안하고 제작하는 일을 담당해!',
    trigger: 'ESFP-일러스트레이터-2',
  },
  {
    id: 'ESFP-일러스트레이터-2',
    message:
      '이 직업을 하기 위해서는 색채 감각과 조형 감각 및 세심함, 꼼꼼함이 요구돼!',
    trigger: 'ESFP-일러스트레이터-3',
  },
  {
    id: 'ESFP-일러스트레이터-3',
    message: '연봉은 평균 3000만원이야!',
    trigger: 'ESFP-일러스트레이터-4',
  },
  {
    id: 'ESFP-일러스트레이터-4',
    message:
      '일러스트레이터를 포함한 시각디자이너의 종사자 수는 62,000명이며, 멀티미디어가 발달하면서',
    trigger: 'ESFP-일러스트레이터-5',
  },
  {
    id: 'ESFP-일러스트레이터-5',
    message:
      '책, 잡지, 영상뿐만아니라 웹콘텐츠에도 활용되면서 수요가 증가하고 있어',
    trigger: 'ESFP-일러스트레이터-6',
  },
  {
    id: 'ESFP-일러스트레이터-6',
    message: '향후 10년간 고용은 연평균 0.9% 증가할 것으로 전망된다',
    trigger: 'ESFP-일러스트레이터-7',
  },
  {
    id: 'ESFP-일러스트레이터-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESFP-일러스트레이터-8',
  },
  {
    id: 'ESFP-일러스트레이터-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESFP-승무원-1',
    message:
      '승무원이 하는 일은 하늘 길에서 탑승객이 목적지까지 안전하고 쾌적하게',
    trigger: 'ESFP-승무원-2',
  },
  {
    id: 'ESFP-승무원-2',
    message:
      '여행할 수 있도록 편의와 안전을 도모하고 기내에서 각종 서비스를 제공하는 직업이야!',
    trigger: 'ESFP-승무원-3',
  },
  {
    id: 'ESFP-승무원-3',
    message: '이 직업은 봉사정신이 투철하고 친절한 사람에게 유리하다고 생각해!',
    trigger: 'ESFP-승무원-4',
  },
  {
    id: 'ESFP-승무원-4',
    message: '또한 장시간의 비행이 많기 때문에 강한 체력 또한 필수지!',
    trigger: 'ESFP-승무원-5',
  },
  {
    id: 'ESFP-승무원-5',
    message: '연봉은 평균 4000만원 정도야!',
    trigger: 'ESFP-승무원-6',
  },
  {
    id: 'ESFP-승무원-6',
    message:
      '주로 정규직으로 채용되며, 고용도 잘 유지되는 것으로 나타나고 있어!',
    trigger: 'ESFP-승무원-7',
  },
  {
    id: 'ESFP-승무원-7',
    message: '일자리의 창출과 성장이 활발하고 임금과 복리후생이 높아!',
    trigger: 'ESFP-승무원-8',
  },
  {
    id: 'ESFP-승무원-8',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESFP-승무원-9',
  },
  {
    id: 'ESFP-승무원-9',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESFP-배우-1',
    message:
      '배우가 하는일은 어떤 영화나 드라마에 캐스팅 되서 배역이 결정되면 캐릭터를 분석하고,',
    trigger: 'ESFP-배우-2',
  },
  {
    id: 'ESFP-배우-2',
    message:
      '연출자 및 감독, 작가 등과 논의하여 극중 인물에 맞는 표정, 행동, 대사 톤 등을 설정해',
    trigger: 'ESFP-배우-3',
  },
  {
    id: 'ESFP-배우-3',
    message: '촬영을 하거나 무대에서 공연을 하는 직업이야.',
    trigger: 'ESFP-배우-4',
  },
  {
    id: 'ESFP-배우-4',
    message:
      '배우의 연봉은 너무 천차만별이기에 정확한 답변을 주긴 어렵지만 유명 배우의 경우 광고촬영과 영화촬영, 드라마 촬영으로 수십-수백억원을 받아!',
    trigger: 'ESFP-배우-5',
  },
  {
    id: 'ESFP-배우-5',
    message:
      '한류로 인해 급격히 우리나라 문화산업이 성장하면서 방송, 영화, 연극, 공연 등의 엔터테인먼트 산업도 함께 성장하였어',
    trigger: 'ESFP-배우-6',
  },
  {
    id: 'ESFP-배우-6',
    message:
      '따라서 산업의 규모가 커짐에 따라 연기자의 인력수요는 향후 10년간 연평균 1.9% 증가할 것으로 전망된대!',
    trigger: 'ESFP-배우-7',
  },
  {
    id: 'ESFP-배우-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESFP-배우-8',
  },
  {
    id: 'ESFP-배우-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESFP-애니메이터-1',
    message:
      '애니메이터는 애니메이션의 기획부터 창작, 연출, 채색, 편집에 이르기까지 전 분야의 일을 담당해서 작업하는 직업이야~',
    trigger: 'ESFP-애니메이터-2',
  },
  {
    id: 'ESFP-애니메이터-2',
    message:
      '이 직업은 만화에 대한 애정이 있어야하고 그림 소질도 물론 있어야해!',
    trigger: 'ESFP-애니메이터-3',
  },
  {
    id: 'ESFP-애니메이터-3',
    message:
      '만화를 잘 만들기 위해서는 풍부한 상상력과 문장력, 창의성을 바탕으로',
    trigger: 'ESFP-애니메이터-4',
  },
  {
    id: 'ESFP-애니메이터-4',
    message:
      '만화를 제작하는 데 필요한 컴퓨터 프로그램을 조작할 수 있는 능력이 필요해.',
    trigger: 'ESFP-애니메이터-5',
  },
  {
    id: 'ESFP-애니메이터-5',
    message: '애니메이터의 평균 연봉은 3000만원이야~',
    trigger: 'ESFP-애니메이터-6',
  },
  {
    id: 'ESFP-애니메이터-6',
    message:
      '디지털미디어 환경의 변화로 온라인 플랫폼을 활용한 작가활동이 증가하는 추세야! ',
    trigger: 'ESFP-애니메이터-7',
  },
  {
    id: 'ESFP-애니메이터-7',
    message: '그리고 웹툰과 애니메이션에 대한 관심과 인기가 높아지고 있어서',
    trigger: 'ESFP-애니메이터-8',
  },
  {
    id: 'ESFP-애니메이터-8',
    message: '향후 지속적으로 고용이 증가할 것으로 전망되고 있어!',
    trigger: 'ESFP-애니메이터-9',
  },
  {
    id: 'ESFP-애니메이터-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESFP-애니메이터-10',
  },
  {
    id: 'ESFP-애니메이터-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESFP-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  // ISTJ 시작
  {
    id: 'ISTJ-1',
    message:
      'Istj는 청렴결백한 논리주의자야.  어.. mbti에 그리 관심있는 편이 아닌 걸로 알고 있는데, 잘왔어!',
    trigger: 'ISTJ-2',
  },
  {
    id: 'ISTJ-2',
    options: [{ value: 1, label: '안녕', trigger: 'ISTJ-3' }],
  },
  {
    id: 'ISTJ-3',
    message: '객관적이고 노력하고 성장하고 반성하는 유형이지?',
    trigger: 'ISTJ-4',
  },
  {
    id: 'ISTJ-4',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'ISTJ-5' },
      { value: 2, label: '맞는거 같기두?', trigger: 'ISTJ-5' },
    ],
  },
  {
    id: 'ISTJ-5',
    message: `자기 스스로는 물론이고 누군과의 약속도 잘 지키고, 계획도 철저해서 플래너나 메모장에 항상 적어두는 편이지?`,
    trigger: 'ISTJ-6',
  },

  {
    id: 'ISTJ-6',
    options: [
      { value: 1, label: '응 맞아', trigger: 'ISTJ-7' },
      { value: 2, label: '쫌 그런거 같아', trigger: 'ISTJ-7' },
    ],
  },
  {
    id: 'ISTJ-7',
    message: '다소 내향적이지만 틀에 짜여진 사회에서 주어진 임무를',
    trigger: 'ISTJ-8',
  },
  {
    id: 'ISTJ-8',
    message: '철저하게 완수하려 노력하며 규칙을 잘 준수하는 편이지?',
    trigger: 'ISTJ-9',
  },
  {
    id: 'ISTJ-9',
    options: [
      { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ISTJ-10' },
      { value: 2, label: '그런것 같아!', trigger: 'ISTJ-10' },
    ],
  },
  {
    id: 'ISTJ-10',
    message: '책임감 있는 현실주의자인 너에게 맞는 직업을 추천해줄게!',
    trigger: 'ISTJ-11',
  },
  {
    id: 'ISTJ-11',
    options: [
      { value: 1, label: '정치가', trigger: 'ISTJ-정치가-1' },
      { value: 2, label: '운동선수', trigger: 'ISTJ-운동선수-1' },
      { value: 3, label: '투자자', trigger: 'ISTJ-투자자-1' },
      { value: 4, label: '경영관리자', trigger: 'ISTJ-경영관리자-1' },
    ],
  },
  {
    id: 'ISTJ-정치가-1',
    message:
      '정치가는 정치에 활발히 참여하거나 매우 밀접한 관련을 갖는 직업을 가진 사람을 말해.',
    trigger: 'ISTJ-정치가-2',
  },
  {
    id: 'ISTJ-정치가-2',
    message:
      '이들이 정치에 참여하는 이유는, 개인적인 이익, 정당의 이익, 국민 이익 때문일 수 있어.',
    trigger: 'ISTJ-정치가-3',
  },
  {
    id: 'ISTJ-정치가-3',
    message:
      '이 직업을 가진 많은 사람들이 정치적인 성과를 내. 정치인들은 보통 관리 업무 일반에 상당히 숙달되어 있어.',
    trigger: 'ISTJ-정치가-4',
  },
  {
    id: 'ISTJ-정치가-4',
    message:
      '이들은 국민 복지 향상과 국가 이익 도모 사업에 상당한 영향력을 행사해!',
    trigger: 'ISTJ-정치가-5',
  },
  {
    id: 'ISTJ-정치가-5',
    message: '평균 연봉은 1억 2천 정도가 된다고해!',
    trigger: 'ISTJ-정치가-6',
  },
  {
    id: 'ISTJ-정치가-6',
    message:
      '앙겔라 메르켈은 독일의 총리이고 istj 유형이야. 앙겔라 메르켈의 명언을 알려줄게!',
    trigger: 'ISTJ-정치가-7',
  },
  {
    id: 'ISTJ-정치가-7',
    message:
      '앙겔라 메르켈은 독일의 총리이고 istj 유형이야. 앙겔라 메르켈의 명언을 알려줄게!',
    trigger: 'ISTJ-정치가-8',
  },
  {
    id: 'ISTJ-정치가-8',
    message: '다른 직업들도 다시 볼래? ',
    trigger: 'ISTJ-정치가-9',
  },
  {
    id: 'ISTJ-정치가-9',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ISTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ISTJ-운동선수-1',
    message: '운동선수는 다양한 운동 종목에 선수로 등록되어 경기에 참여해!',
    trigger: 'ISTJ-운동선수-2',
  },
  {
    id: 'ISTJ-운동선수-2',
    message: '좋은 성적을 거두기 위해 기술을 습득하고 전문적인 훈련을 하지.',
    trigger: 'ISTJ-운동선수-3',
  },
  {
    id: 'ISTJ-운동선수-3',
    message:
      '대부분 크게 프로팀에 소속되어 있는 선수와 실업팀에 소속되어 있는 선수로 구분되고,',
    trigger: 'ISTJ-운동선수-4',
  },
  {
    id: 'ISTJ-운동선수-4',
    message:
      '둘 다 매일 운동에 전념하는 것은 같지만 프로선수는 계약을 통해 경기를 위한 운동만 하고,',
    trigger: 'ISTJ-운동선수-5',
  },
  {
    id: 'ISTJ-운동선수-5',
    message:
      '실업선수는 지방자치단체, 시·도 체육회, 기업 등에 소속되어 직위를 부여받고 사원자격으로 운동을 하게 돼.',
    trigger: 'ISTJ-운동선수-6',
  },
  {
    id: 'ISTJ-운동선수-6',
    message:
      '평소 경기에 필요한 육체적, 기술적 훈련을 하고, 경기대회에 참여하여 좋은 기록과 성적을 내는 것이 운동선수의 역할이야.',
    trigger: 'ISTJ-운동선수-7',
  },
  {
    id: 'ISTJ-운동선수-7',
    message: '평균연봉은 5천만원 정도가 된다고해!',
    trigger: 'ISTJ-운동선수-8',
  },
  {
    id: 'ISTJ-운동선수-8',
    message:
      '처음부터 겁먹지 말자. 막상 가보면 아무것도 아닌게 세상엔 참으로 많다.',
    trigger: 'ISTJ-운동선수-9',
  },
  {
    id: 'ISTJ-운동선수-9',
    message:
      '물을 끓이는 마지막1도 포기하고 싶은 그 마지막 1도를 참아내는 것이다.',
    trigger: 'ISTJ-운동선수-10',
  },

  {
    id: 'ISTJ-운동선수-10',
    message:
      '이 순간을 넘어야 다음 문이 열린다. 그래야 내가 원하는 세상으로 갈 수 있다.',
    trigger: 'ISTJ-운동선수-11',
  },
  {
    id: 'ISTJ-운동선수-11',
    message: '다른 직업들도 다시 볼래?',
    trigger: 'ISTJ-운동선수-12',
  },
  {
    id: 'ISTJ-운동선수-12',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ISTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ISTJ-투자자-1',
    message:
      '투자자는 주식이나 채권 · 파생상품 · 부동산 · 통화 · 상품 등에 투자하는 개인 또는 법인을 말해!',
    trigger: 'ISTJ-투자자-2',
  },
  {
    id: 'ISTJ-투자자-2',
    message:
      '공적인 목적을 가지고 다수에게서 돈을 모아 투자하기도하고, 수수료를 받고 고객의 자산을 대리로 투자하여 운용해주기도 해.',
    trigger: 'ISTJ-투자자-3',
  },
  {
    id: 'ISTJ-투자자-3',
    message:
      '투자자의 연봉은 천차만별이긴한데 보통 7천만원에서 많게는 몇억 정도까지 된다고 해!',
    trigger: 'ISTJ-투자자-4',
  },
  {
    id: 'ISTJ-투자자-4',
    message:
      '워렌버핏은 미국 투자자이자 버크셔해서웨이 CEO이고 istj 유형이래. 워렌버핏의 명언을 알려줄게!',
    trigger: 'ISTJ-투자자-5',
  },
  {
    id: 'ISTJ-투자자-5',
    message: '남을 움직이게 하려면 나 자신을 움직여라.',
    trigger: 'ISTJ-투자자-6',
  },
  {
    id: 'ISTJ-투자자-6',
    message: '세상을 움직이려면 일단 나 자신부터 움직여야 한다.',
    trigger: 'ISTJ-투자자-7',
  },
  {
    id: 'ISTJ-투자자-7',
    message:
      '타고 있는 배가 항상 샌다는 것을 알게 되면 구멍을 막느니 차라리 배를 바꿔 타는 것이 생산적이다.',
    trigger: 'ISTJ-투자자-8',
  },
  {
    id: 'ISTJ-투자자-8',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ISTJ-투자자-9',
  },
  {
    id: 'ISTJ-투자자-9',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ISTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ISTJ-경영관리자-1',
    message:
      '경영관리자는 경영목표를 수립하고, 사업의 역량 제고 및 조직 체질 개선을 통해 경영목표 달성을 지원해!',
    trigger: 'ISTJ-경영관리자-2',
  },
  {
    id: 'ISTJ-경영관리자-2',
    message:
      '사업과 시장 환경 변화를 분석해서 이에 대응하는 중장기 성장 전략을 수립하고 실행하지.',
    trigger: 'ISTJ-경영관리자-3',
  },
  {
    id: 'ISTJ-경영관리자-3',
    message:
      '회사 운영의 전반적인 흐름을 파악하고 이해도를 향상시키는데 큰 역할을 해.',
    trigger: 'ISTJ-경영관리자-4',
  },
  {
    id: 'ISTJ-경영관리자-4',
    message:
      '또 기업조직이 어떻게 지속 가능할지에 대해서 기업 전반의 경영을 종합적으로 연구하는 경영학 분야라고 생각하면 돼.',
    trigger: 'ISTJ-경영관리자-5',
  },
  {
    id: 'ISTJ-경영관리자-5',
    message:
      '제프 베조스 는 아마존 ceo 이며 경영 관리자이고 istj 유형이래. 제프베조스의 명언을 알려줄게!',
    trigger: 'ISTJ-경영관리자-6',
  },
  {
    id: 'ISTJ-경영관리자-6',
    message:
      '만약 당신이 하고 있는 일의 세부사항을 이해하지 못한다면 실패할 것입니다.',
    trigger: 'ISTJ-경영관리자-7',
  },
  {
    id: 'ISTJ-경영관리자-7',
    message: '혁신을 하려면 오해 받는 것을 감수해야 합니다.',
    trigger: 'ISTJ-경영관리자-8',
  },
  {
    id: 'ISTJ-경영관리자-8',
    message:
      '두 종류의 회사가 있어요. 더 많은 요금을 부과하려는 회사와, 덜 부과하려고 일하는 회사. 우리는 두번째가 될 겁니다.',
    trigger: 'ISTJ-경영관리자-9',
  },
  {
    id: 'ISTJ-경영관리자-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ISTJ-경영관리자-10',
  },
  {
    id: 'ISTJ-경영관리자-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ISTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  // ESTJ  시작
  {
    id: 'ESTJ-1',
    message:
      'estj특징은 엄격한 관리자 유형이자 사업가 유형이야. 뭔가 일 또는 공부를 하고있느라고 바빠서 잘 안올 것 같은데 왔네!',
    trigger: 'ESTJ-2',
  },
  {
    id: 'ESTJ-2',
    options: [{ value: 1, label: '안녕', trigger: 'ESTJ-3' }],
  },
  {
    id: 'ESTJ-3',
    message:
      '늘 쓸모있는 사람이 되고 싶어하는 유형! 맞지? 항상 적극적이고 조장, 실습장 대표 맡아본 경험 한 번쯤은 있잖아.그치?',
    trigger: 'ESTJ-4',
  },
  {
    id: 'ESTJ-4',
    options: [
      { value: 1, label: '음... 맞는 거 같아!', trigger: 'ESTJ-5' },
      { value: 2, label: '맞는거 같기두?', trigger: 'ESTJ-5' },
    ],
  },
  {
    id: 'ESTJ-5',
    message: `자기 스스로는 물론이고 누군과의 약속도 잘 지키고, 계획도 철저해서 플래너나 메모장에 항상 적어두는 편이지?`,
    trigger: 'ESTJ-6',
  },

  {
    id: 'ESTJ-6',
    options: [
      { value: 1, label: '응 맞아', trigger: 'ESTJ-7' },
      { value: 2, label: '쫌 그런거 같아', trigger: 'ESTJ-7' },
    ],
  },
  {
    id: 'ESTJ-7',
    message: '효율을 중요시해서 지하철 오는 시간까지 계산해본 적있지? 공감?!',
    trigger: 'ESTJ-8',
  },
  {
    id: 'ESTJ-8',
    message:
      '애정있는 사람들한테는 잔소리도하고 ㅋㅋ 가만히 있으면 뭔가 허전하고 인생에 공백이 생길때마다 뭐라도 하는 유형이지?',
    trigger: 'ESTJ-9',
  },
  {
    id: 'ESTJ-9',
    options: [
      { value: 1, label: '어떻게 알았어? 맞아!', trigger: 'ESTJ-10' },
      { value: 2, label: '그런것 같아!ㅋㅋ', trigger: 'ESTJ-10' },
    ],
  },
  {
    id: 'ESTJ-10',
    message:
      '엄격하게 스스로를 관리하고 성장하는 재미로 인생을 즐기며 사는 유형 멋있다! 늘 열심히 살아서 한번씩 지칠때도 있을 것 같은데, 가끔식 쉬어주기도 해! 물론 쉬는 것또한 계획에 포함이겠지만 말이야. :)',
    trigger: 'ESTJ-11',
  },
  {
    id: 'ESTJ-11',
    message: '엄격한 관리자인 너에게 맞는 직업을 추천해줄게!',
    trigger: 'ESTJ-12',
  },
  {
    id: 'ESTJ-12',
    options: [
      { value: 1, label: '사업가', trigger: 'ESTJ-사업가-1' },
      { value: 2, label: '프로젝트매니저', trigger: 'ESTJ-프로젝트매니저-1' },
      { value: 3, label: '정치가', trigger: 'ESTJ-정치가-1' },
      { value: 4, label: '경영가', trigger: 'ESTJ-경영가-1' },
    ],
  },
  {
    id: 'ESTJ-사업가-1',
    message:
      '사업가는 회사를 운영하고 사원들을 통솔하며, 사업체를 통해 이익을 내고자 해.',
    trigger: 'ESTJ-사업가-2',
  },
  {
    id: 'ESTJ-사업가-2',
    message:
      '기발한 사업 아이템을 찾아내는 창의력,사원들을 잘 이끌어 갈 수 있는 지도력, 정당한 방법으로만 사업을 한다는 도덕관,',
    trigger: 'ESTJ-사업가-3',
  },
  {
    id: 'ESTJ-사업가-3',
    message:
      '이익을 자신과 직원들뿐만 사회에도 환원한다는 공동체 의식, 왕성한 사업활동을 하기위한 체력등의 역량이 필요해.',
    trigger: 'ESTJ-사업가-4',
  },
  {
    id: 'ESTJ-사업가-4',
    message:
      '사업가는 연봉제가 아니어서 사업하는 크기에 따라 천차만별이야! 사업은 유형 규모에 따라 매출도 다르기 때문이지.',
    trigger: 'ESTJ-사업가-5',
  },
  {
    id: 'ESTJ-사업가-5',
    message:
      '백종원은 다들 알다시피 성공한 요식업계의 사업가이고 estj 유형이야.',
    trigger: 'ESTJ-사업가-6',
  },
  {
    id: 'ESTJ-사업가-6',
    message: '백종원의 명언을 알려줄게!',
    trigger: 'ESTJ-사업가-7',
  },
  {
    id: 'ESTJ-사업가-7',
    message:
      '나 역시도 끊임없는 노력을 통해 이 자리에 섰다. 이 사회는 자기가 좋아하는 일을 해야 행복하다. 자신이 좋아하는 일에 도전하기 바란다.',
    trigger: 'ESTJ-사업가-8',
  },
  {
    id: 'ESTJ-사업가-8',
    message:
      '성공한 사람들은 다른 사람에게 힘을 주는 사람들이다. 다른 사람을 돕다 보면 당신도 성공할 수 있다.',
    trigger: 'ESTJ-사업가-9',
  },
  {
    id: 'ESTJ-사업가-9',
    message:
      '나는 참 행복한 사람입니다. 취미를 사업으로 만들고, 그래서 돈도 벌고 즐거움도 느끼니까요. 무엇보다 내가 창업한 식당에서 내가 개발한 음식을 맛보며 만족해하는 손님들을 보는 것은 큰 기쁨입니다.',
    trigger: 'ESTJ-사업가-10',
  },
  {
    id: 'ESTJ-사업가-10',
    message: '다른 직업들도 다시 볼래? ',
    trigger: 'ESTJ-사업가-11',
  },
  {
    id: 'ESTJ-사업가-11',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESTJ-12' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESTJ-프로젝트매니저-1',
    message:
      '프로젝트 매니저는 어떤 프로젝트가 있을 때 프로젝트를 계획하고 관리하고',
    trigger: 'ESTJ-프로젝트매니저-2',
  },
  {
    id: 'ESTJ-프로젝트매니저-2',
    message:
      '복잡한 이해관계자들 사이의 일을 해결할 때 이를 조정하거나 관리하는 사람을 말해.',
    trigger: 'ESTJ-프로젝트매니저-3',
  },
  {
    id: 'ESTJ-프로젝트매니저-3',
    message:
      '프로젝트의 기본을 설계하고 실제 그 게획을 수행하고 진척을 주기적으로 검토해.',
    trigger: 'ESTJ-프로젝트매니저-4',
  },
  {
    id: 'ESTJ-프로젝트매니저-4',
    message:
      ' IT 산업에서는 pm이라고 말할 수도 있고 넓은 범위에서 해석하면 어떤 프로젝트를 이끌어가고 계획하는 역할로 이해해주면 될 것 같아.',
    trigger: 'ESTJ-프로젝트매니저-5',
  },
  {
    id: 'ESTJ-프로젝트매니저-5',
    message: '평균연봉은 5천 400만원 정도가 된다고해.',
    trigger: 'ESTJ-프로젝트매니저-6',
  },
  {
    id: 'ESTJ-프로젝트매니저-6',
    message:
      '프로젝트 매니저의 큰 의미로서 이 직업을 대표하는 사람으로 최근 유명세를 탄 스트리트우먼파이터의 프라우드먼 팀의 ‘모니카’가 있어.',
    trigger: 'ESTJ-프로젝트매니저-7',
  },
  {
    id: 'ESTJ-프로젝트매니저-7',
    message:
      '댄서가 직업이지만 프라우드먼이라는 팀의 리더이기도하고, 프로젝트를 총괄하고 있어서 프로젝트 매니저라고 볼 수 있을 것 같아.',
    trigger: 'ESTJ-프로젝트매니저-8',
  },
  {
    id: 'ESTJ-프로젝트매니저-8',
    message: '모니카도 estj 유형이래.그럼 모니카 댄서의 명언을 알려줄게!',
    trigger: 'ESTJ-프로젝트매니저-9',
  },
  {
    id: 'ESTJ-프로젝트매니저-9',
    message:
      '다 괜찮은데 어리광만 부리지 말라고. 어떠한 결과가 나와도 책임을 지고 그 무게를 견디는 게 어른이라고.',
    trigger: 'ESTJ-프로젝트매니저-10',
  },

  {
    id: 'ESTJ-프로젝트매니저-10',
    message:
      '그런 순간을 살자. 오늘은 어떤 결과가 나와도 그 순간을 제대로 살아보는 것이 저희 팀의 목표입니다. 어른이 됩시다. 우리.',
    trigger: 'ESTJ-프로젝트매니저-11',
  },
  {
    id: 'ESTJ-프로젝트매니저-11',
    message: '다른 직업들도 다시 볼래?',
    trigger: 'ESTJ-프로젝트매니저-12',
  },
  {
    id: 'ESTJ-프로젝트매니저-12',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESTJ-12' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESTJ-정치가-1',
    message:
      '정치가는 정치에 활발히 참여하거나 매우 밀접한 관련을 갖는 직업을 가진 사람을 말해.',
    trigger: 'ESTJ-정치가-2',
  },
  {
    id: 'ESTJ-정치가-2',
    message:
      '이들이 정치에 참여하는 이유는, 개인적인 이익, 정당의 이익, 국민 이익 때문일 수 있어.',
    trigger: 'ESTJ-정치가-3',
  },
  {
    id: 'ESTJ-정치가-3',
    message:
      '이 직업을 가진 많은 사람들이 정치적인 성과를 내. 정치인들은 보통 관리 업무 일반에 상당히 숙달되어 있어.',
    trigger: 'ESTJ-정치가-4',
  },
  {
    id: 'ESTJ-정치가-4',
    message:
      '이들은 국민 복지 향상과 국가 이익 도모 사업에 상당한 영향력을 행사해!',
    trigger: 'ESTJ-정치가-5',
  },
  {
    id: 'ESTJ-정치가-5',
    message: '평균 연봉은 1억 2천 정도가 된다고해!',
    trigger: 'ESTJ-정치가-6',
  },
  {
    id: 'ESTJ-정치가-6',
    message:
      '미셸 오바마는 미국 전 대통령 버락 오바마의 부인이야. 미셸 오바마도 Estj 유형이래. 미셸 오바마의 명언을 알려줄게.',
    trigger: 'ESTJ-정치가-7',
  },
  {
    id: 'ESTJ-정치가-7',
    message:
      '비록 당신이 많은 것을 가지고 시작하지 않을지라도, 당신이 열심히 일하고 당신이 하기로 되어 있는 일을 해낸다면,',
    trigger: 'ESTJ-정치가-8',
  },
  {
    id: 'ESTJ-정치가-8',
    message:
      '당신은 스스로를 위한 괜찮은 삶과 자녀와 손자들을 위해서 훨씬 더 나은 삶을 만들어갈 수 있을 것이다.',
    trigger: 'ESTJ-정치가-9',
  },
  {
    id: 'ESTJ-정치가-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESTJ-정치가-10',
  },
  {
    id: 'ESTJ-정치가-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESTJ-12' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESTJ-경영가-1',
    message: '경영가는 다국적 기업 혹은 대기업의 최고 경영 책임자야.',
    trigger: 'ESTJ-경영가-2',
  },
  {
    id: 'ESTJ-경영가-2',
    message:
      '보통 CEO라고 하면 회사의 지분을 많이 가지고 있는 우두머리라고 생각하는 경우가 많은데,',
    trigger: 'ESTJ-경영가-3',
  },
  {
    id: 'ESTJ-경영가-3',
    message:
      '경영자, 관리자의 수장이지 기업의 지분을 갖고 있는 소유주,주주임을 꼭 보장하지는 않대.',
    trigger: 'ESTJ-경영가-4',
  },
  {
    id: 'ESTJ-경영가-4',
    message:
      '창업가와 조금 다른 개념인데, 창업가와 어떠한 혈연관계를 맺지 않고 있는 경우도 많거든.',
    trigger: 'ESTJ-경영가-5',
  },
  {
    id: 'ESTJ-경영가-5',
    message: '평균 연봉은 1억 8천 정도가 된다고해.',
    trigger: 'ESTJ-경영가-6',
  },
  {
    id: 'ESTJ-경영가-6',
    message: '스티브잡스 는 Apple 제6대 최고경영자야.',
    trigger: 'ESTJ-경영가-7',
  },
  {
    id: 'ESTJ-경영가-7',
    message:
      'PC 열풍을 불러와 대부분의 가정에 컴퓨터가 보급되도록 개인용 컴퓨터 시대를 연 인물이면서',
    trigger: 'ESTJ-경영가-8',
  },
  {
    id: 'ESTJ-경영가-8',
    message:
      '아이폰을 통해 스마트폰이 보급되도록 해서 오늘날의 모바일 시대를 만든 인물이라고 말할 수 있지! 스티브잡스의 명언을 알려줄게!',
    trigger: 'ESTJ-경영가-9',
  },
  {
    id: 'ESTJ-경영가-9',
    message:
      '나는 우리가 이뤄온 거서들만큼 우리가 아직 이루지 못한 것들이 자랑스럽다. ',
    trigger: 'ESTJ-경영가-10',
  },
  {
    id: 'ESTJ-경영가-10',
    message: '혁신은 현존하는 수천가지 것들에 ‘아니’라고 말하는 것입니다.',
    trigger: 'ESTJ-경영가-11',
  },
  {
    id: 'ESTJ-경영가-11',
    message: '일은 당신의 삶에서 큰 부분을 차지할 것입니다.',
    trigger: 'ESTJ-경영가-12',
  },
  {
    id: 'ESTJ-경영가-12',
    message:
      '삶에서 만족을 느끼기 위해선 당신이 위대하다고 생각하는 일을 해야 하죠',
    trigger: 'ESTJ-경영가-13',
  },
  {
    id: 'ESTJ-경영가-13',
    message: '위대한 일을 하는 방법은 당신이 하는 그 일을 사랑하는 것입니다.',
    trigger: 'ESTJ-경영가-14',
  },
  {
    id: 'ESTJ-경영가-14',
    message: ' 다른 직업들도 다시 볼래?',
    trigger: 'ESTJ-경영가-15',
  },
  {
    id: 'ESTJ-경영가-15',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESTJ-12' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },

  //ESFJ 시작
  {
    id: 'ESFJ-1',
    message:
      'ESFP! 너는 사교적인 외교관이구나! 친목도모형이라고도 할 수 있지 모든 MBTI 유형 중에서 ESFP와 함께 외향성 기질이 가장 강해 너를 간단히 표현하자면 ‘인기쟁이’야',
    trigger: 'ESFJ-2',
  },
  {
    id: 'ESFJ-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'ESFJ-3' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'ESFJ-3' },
    ],
  },
  {
    id: 'ESFJ-3',
    message:
      '인구의 대략 12%를 차지하는 꽤 보편적인 유형이기도 해. 타고난 협력자로서 동료애가 많고 친절하지! 이야기하는 걸 좋아하고 참을성이 많은 성격이야! 혹시 강의 들을 때 고개를 많이 끄덕이니?',
    trigger: 'ESFJ-4',
  },
  {
    id: 'ESFJ-4',
    options: [
      { value: 1, label: '음... 그런거 같아', trigger: 'ESFJ-5' },
      { value: 2, label: '맞아! 어떻게 알았어?', trigger: 'ESFJ-5' },
    ],
  },
  {
    id: 'ESFJ-5',
    message: `
    리액션이 좋은 편이라 그럴 줄 알았어!
    한편으로는 세상 물정에 밝고 현실주의자이기도 해.
    자존감이 높은 편이지만 티를 내지는 않지!
    너 참 매력있는 아이구나!
    `,
    trigger: 'ESFJ-6',
  },

  {
    id: 'ESFJ-6',
    options: [
      { value: 1, label: '고마워~', trigger: 'ESFJ-7' },
      { value: 2, label: '맞아, 난 최고야', trigger: 'ESFJ-7' },
    ],
  },
  {
    id: 'ESFJ-7',
    message: '사람들과 소통하기를 좋아하고',
    trigger: 'ESFJ-8',
  },
  {
    id: 'ESFJ-8',
    message: '다른사람들을 잘 도와주는 편이지?',
    trigger: 'ESFJ-9',
  },
  {
    id: 'ESFJ-9',
    options: [
      { value: 1, label: '맞아!', trigger: 'ESFJ-10' },
      { value: 2, label: '그런것 같아!', trigger: 'ESFJ-10' },
    ],
  },
  {
    id: 'ESFJ-10',
    message: '사교적이며 동정심이 많고 친절한 너에게 맞는 직업을 추천해줄게!',
    trigger: 'ESFJ-11',
  },
  {
    id: 'ESFJ-11',
    options: [
      { value: 1, label: '호텔지배인', trigger: 'ESFJ-호텔지배인-1' },
      { value: 2, label: '간호사', trigger: 'ESFJ-간호사-1' },
      { value: 3, label: '교사', trigger: 'ESFJ-교사-1' },
      { value: 4, label: '마케팅책임자', trigger: 'ESFJ-마케팅책임자-1' },
    ],
  },
  {
    id: 'ESFJ-호텔지배인-1',
    message: '호텔지배인을 선택했구나!',
    trigger: 'ESFJ-호텔지배인-2',
  },
  {
    id: 'ESFJ-호텔지배인-2',
    message:
      '호텔지배인은 객실 예약업무, 판매업무, 접객, 식당, 주방, 홍보 등 호텔에서 이루어지는',
    trigger: 'ESFJ-호텔지배인-3',
  },
  {
    id: 'ESFJ-호텔지배인-3',
    message: '다양한 작업들이 원활히 운용될 수 있도록 각종 활동들을 계획하고',
    trigger: 'ESFJ-호텔지배인-4',
  },
  {
    id: 'ESFJ-호텔지배인-4',
    message: '종사원들의 업무를 종합적으로 관리감독하는 직업이야!',
    trigger: 'ESFJ-호텔지배인-5',
  },
  {
    id: 'ESFJ-호텔지배인-5',
    message:
      '관습형과 사회형의 흥미를 가진 사람에게 적합하며, 협조심, 적응성 및 융통성, 남에 대한 배려 등을 가진 사람인 ESFJ에겐 안성맞춤인 직업이야!',
    trigger: 'ESFJ-호텔지배인-6',
  },
  {
    id: 'ESFJ-호텔지배인-6',
    message:
      '호텔지배인이 되기 위해서는 전문대학이나 대학교의 호텔 및 관광관련 학과를 졸업하는 것이 유리해.',
    trigger: 'ESFJ-호텔지배인-7',
  },
  {
    id: 'ESFJ-호텔지배인-7',
    message:
      '관련 직업분야에서 몇 년 정도의 경험을 쌓아야 하며, 틈틈이 호텔의 인턴십이나 아르바이트 등을 통해 실무경험을 쌓는 것이 좋아><',
    trigger: 'ESFJ-호텔지배인-8',
  },
  {
    id: 'ESFJ-호텔지배인-8',
    message:
      '호텔서비스사, 호텔관리사, 호텔경영사 같은 자격증도 있으니 알아둬!',
    trigger: 'ESFJ-호텔지배인-9',
  },
  {
    id: 'ESFJ-호텔지배인-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESFJ-호텔지배인-10',
  },
  {
    id: 'ESFJ-호텔지배인-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESFJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESFJ-간호사-1',
    message: '간호사를 선택했구나!',
    trigger: 'ESFJ-간호사-2',
  },
  {
    id: 'ESFJ-간호사-2',
    message:
      '간호사는 병원에서 의사, 여러 전문인력들과 협력하여, 24시간 환자 곁에서 의사의 처방이나 규정된 간호기술에 따라 치료하는 사람이야!',
    trigger: 'ESFJ-간호사-3',
  },
  {
    id: 'ESFJ-간호사-3',
    message:
      '간호사가 되려면 간호학과(4년제)를 졸업하고 국가(한국보건의료인 국가시험원)에서 시행하는',
    trigger: 'ESFJ-간호사-4',
  },
  {
    id: 'ESFJ-간호사-4',
    message: '간호사 시험을 합격한 후 간호사 면허증을 취득해야 해야만해!',
    trigger: 'ESFJ-간호사-5',
  },
  {
    id: 'ESFJ-간호사-5',
    message: '연봉은 4,351만원 정도야',
    trigger: 'ESFJ-간호사-6',
  },
  {
    id: 'ESFJ-간호사-6',
    message:
      '근 의료 관련 감염에 대한 사회적 관심이 늘고, 질병관리본부에서도 각종 세미나, 자문 의뢰 등을 하면서 관심이 커지고 있고,',
    trigger: 'ESFJ-간호사-7',
  },
  {
    id: 'ESFJ-간호사-7',
    message:
      '평균수명의 증가로 노인인구가 늘어나고 만성질환이 증가하면서 건강증진과 질병예방 등 건강관리에 대한 관심이 높아지고 있어서',
    trigger: 'ESFJ-간호사-8',
  },
  {
    id: 'ESFJ-간호사-8',
    message: '간호사의 앞으로의 전망은 좋을거라고 해!',
    trigger: 'ESFJ-간호사-9',
  },
  {
    id: 'ESFJ-간호사-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESFJ-간호사-10',
  },
  {
    id: 'ESFJ-간호사-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESFJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESFJ-교사-1',
    message: '교사를 선택했구나!',
    trigger: 'ESFJ-교사-2',
  },
  {
    id: 'ESFJ-교사-2',
    message:
      '교사는 학교에서 학생들과 함께 시간을 보내며 공부를 가르치고 생활태도를 지도하여 아이들의 성장을 돕는 일을 해.',
    trigger: 'ESFJ-교사-3',
  },
  {
    id: 'ESFJ-교사-3',
    message: '수업 과정과 학생들을 향한 열정이 필요해!',
    trigger: 'ESFJ-교사-4',
  },
  {
    id: 'ESFJ-교사-4',
    message:
      ' 긍정적인 학습 경험을 만들어 내야할 뿐만 아니라, 학생들과 긍정적인 관계를 형성하는 일도 중요하기 때문에 이야기하기를 좋아하는 ESFJ에게는 딱인 직업아닐까?',
    trigger: 'ESFJ-교사-5',
  },
  {
    id: 'ESFJ-교사-5',
    message:
      '교사는 유치원교사(유치원생), 초등교사(초등학생), 중등교사(중∙고등학생)로 나뉘고 가르치려고 하는 대상에 따라 다른 대학 및 학과를 선택해서 공부해야 해.',
    trigger: 'ESFJ-교사-6',
  },
  {
    id: 'ESFJ-교사-6',
    message:
      '대학에서 전공한 과목에 따라 취득할 수 있는 교사 자격증의 종류가 정해져!',
    trigger: 'ESFJ-교사-7',
  },
  {
    id: 'ESFJ-교사-7',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESFJ-교사-8',
  },
  {
    id: 'ESFJ-교사-8',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESFJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'ESFJ-마케팅책임자-1',
    message:
      '마케팅전문가는 마케팅과 소비자 행동 등에 대한 전문 지식을 활용하여 특정 상품의',
    trigger: 'ESFJ-마케팅책임자-2',
  },
  {
    id: 'ESFJ-마케팅책임자-2',
    message:
      '시장성, 소비자 취향, 잠재 구매 고객 등에 대해 조사하여 효율적인 판매 전략을 계획하고 실행해!',
    trigger: 'ESFJ-마케팅책임자-3',
  },
  {
    id: 'ESFJ-마케팅책임자-3',
    message:
      '특정 상품이나 서비스에 대한 홍보와 효율적인 판매전략을 계획하고 실행하는 회사의 중요한 역할을 하지!',
    trigger: 'ESFJ-마케팅책임자-4',
  },
  {
    id: 'ESFJ-마케팅책임자-4',
    message:
      '책임감과 조심성이 있는 사람에게 적합하며, 혁신, 적응성 및 융통성, 분석적 사고 등의 성격을 가진 사람들에게 유리해.',
    trigger: 'ESFJ-마케팅책임자-5',
  },
  {
    id: 'ESFJ-마케팅책임자-5',
    message:
      '소비자가 상품을 사게끔 만드는 혁신적이고 창의적인 생각을 할 수 있는 사람인 ESFJ에겐 안성맞춤인 직업이야!',
    trigger: 'ESFJ-마케팅책임자-6',
  },
  {
    id: 'ESFJ-마케팅책임자-6',
    message:
      '마케팅전문가가 되기 위해서는 대학교의 경영, 마케팅, 심리 관련 학과를 졸업하는 것이 유리하며,',
    trigger: 'ESFJ-마케팅책임자-7',
  },
  {
    id: 'ESFJ-마케팅책임자-7',
    message: '일부 업체에서는 석사 학위 이상의 학력을 요구하기도 해.',
    trigger: 'ESFJ-마케팅책임자-8',
  },
  {
    id: 'ESFJ-마케팅책임자-8',
    message:
      '마케팅전문가의 향후 10년간 고용은 연평균 1.6% 증가할 것으로 전망된대!',
    trigger: 'ESFJ-마케팅책임자-9',
  },
  {
    id: 'ESFJ-마케팅책임자-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'ESFJ-마케팅책임자-10',
  },
  {
    id: 'ESFJ-마케팅책임자-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'ESFJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },

  //INTJ 시작
  {
    id: 'INTJ-1',
    message:
      'INTJ! 너는 용의주도한 전략가구나! 전체 인구의 2%에 해당하는 이들은 유독 여성에게서는 더욱 찾아보기 힘든 유형이야 상상력이 풍부하면서도 결단력이 있지.',
    trigger: 'INTJ-2',
  },
  {
    id: 'INTJ-2',
    options: [
      { value: 1, label: '응 맞아!', trigger: 'INTJ-3' },
      { value: 2, label: '음... 잘 모르겠는걸?', trigger: 'INTJ-3' },
    ],
  },
  {
    id: 'INTJ-3',
    message: `관심 있는 특정 분야에 대한 그들의 방대한 지식을 다른 이들과 공유하고 싶어하는 성격이야! 혹시 어릴 때 '책벌레'라는 소리를 자주 들었니?`,
    trigger: 'INTJ-4',
  },
  {
    id: 'INTJ-4',
    options: [
      { value: 1, label: '음... 그런거 같아', trigger: 'INTJ-5' },
      { value: 2, label: '맞아! 어떻게 알았어?', trigger: 'INTJ-5' },
    ],
  },
  {
    id: 'INTJ-5',
    message: `
    지식을 향한 갈증이 있는 편이라 그럴 줄 알았어!
확신에 찬 자신감과 함부로 범접할 수 없는 신비로운 아우라를 발산하기도 하지.
완벽함을 추구하는 전략가라니!
너 정말 멋진 아이구나!
    `,
    trigger: 'INTJ-6',
  },

  {
    id: 'INTJ-6',
    options: [
      { value: 1, label: '고마워~', trigger: 'INTJ-7' },
      { value: 2, label: '맞아, 난 최고야', trigger: 'INTJ-7' },
    ],
  },
  {
    id: 'INTJ-7',
    message: '논리적이고 부지런하며 평균 지능 지수가 성격유형 중 1위라고 하네!',
    trigger: 'INTJ-8',
  },
  {
    id: 'INTJ-8',
    message: '너 정말 똑똑한 아이구나!',
    trigger: 'INTJ-9',
  },
  {
    id: 'INTJ-9',
    options: [
      { value: 1, label: '맞아!', trigger: 'INTJ-10' },
      { value: 2, label: '그런것 같아!', trigger: 'INTJ-10' },
    ],
  },
  {
    id: 'INTJ-10',
    message:
      '논리적이며 부지런하고 학구열이 강한 너에게 맞는 직업을 추천해 줄게!',
    trigger: 'INTJ-11',
  },
  {
    id: 'INTJ-11',
    options: [
      { value: 1, label: '회계사', trigger: 'INTJ-회계사-1' },
      { value: 2, label: '경제학자', trigger: 'INTJ-경제학자-1' },
      { value: 3, label: '파일럿', trigger: 'INTJ-파일럿-1' },
      { value: 4, label: '경영컨설턴트', trigger: 'INTJ-경영컨설턴트-1' },
    ],
  },
  {
    id: 'INTJ-회계사-1',
    message:
      '회계사는 개인이나 기업, 공공시설, 정부기관 등의 경영상태, 재무상태, 지급능력 등의 다양한 재무보고와 관련하여 상담을 해주거나 관련서류를 작성하는 일을 해!',
    trigger: 'INTJ-회계사-2',
  },
  {
    id: 'INTJ-회계사-2',
    message:
      '대상 기업에서 작성한 재무제표가 적절한지 감사하고, 감사 보고서를 작성하는 일도 해.',
    trigger: 'INTJ-회계사-3',
  },
  {
    id: 'INTJ-회계사-3',
    message:
      '회계 관련 서류들을 세밀하게 검토하고 계산상의 오류를 잡아낼 수 있는 수리능력과 분석력, 정확한 판단력이 필요해.',
    trigger: 'INTJ-회계사-4',
  },
  {
    id: 'INTJ-회계사-4',
    message:
      '진취형과 관습형의 흥미를 가진 사람에게 적합하기 때문에 INTJ에겐 딱이야!',
    trigger: 'INTJ-회계사-5',
  },
  {
    id: 'INTJ-회계사-5',
    message: '회계사가 되기 위한 학력에는 제한이 없으나',
    trigger: 'INTJ-회계사-6',
  },
  {
    id: 'INTJ-회계사-6',
    message:
      '대학이나 학점은행제를 통해 회계학 및 세무관련과목 12학점 이상, 경영학과목 9학점 이상, 경제학과목 3학점 이상을 이수해야만 공인회계사 시험에 응시할 수 있어.',
    trigger: 'INTJ-회계사-7',
  },
  {
    id: 'INTJ-회계사-7',
    message: '공인회계사 국가공인자격 취득이 필수기도 해!',
    trigger: 'INTJ-회계사-8',
  },
  {
    id: 'INTJ-회계사-8',
    message: '다른 직업들도 다시 볼래?',
    trigger: 'INTJ-회계사-9',
  },

  {
    id: 'INTJ-회계사-9',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'INTJ-경제학자-1',
    message: '경제학자를 선택했구나!',
    trigger: 'INTJ-경제학자-2',
  },
  {
    id: 'INTJ-경제학자-2',
    message:
      '경제학자는 재화와 용역의 생산, 분배 및 교환으로부터 발생하는 여러 경제적ㆍ사회적 문제들을 해결하기 위해',
    trigger: 'INTJ-경제학자-3',
  },
  {
    id: 'INTJ-경제학자-3',
    message: '경제학의 원리와 이론을 적용하여 합리적 해결방법을 연구해!',
    trigger: 'INTJ-경제학자-4',
  },
  {
    id: 'INTJ-경제학자-4',
    message:
      '수리능력과 통계 관련 프로그램의 활용능력이 필요하기 때문에 ESFJ에겐 안성맞춤인 직업이야!',
    trigger: 'INTJ-경제학자-5',
  },
  {
    id: 'INTJ-경제학자-5',
    message:
      '경제학자가 되기 위해서는  대학교를 졸업하고, 대학원에 진학하여 경제학 관련 분야의 석사 또는 박사 학위를 취득하는 것이 유리해.',
    trigger: 'INTJ-경제학자-6',
  },
  {
    id: 'INTJ-경제학자-6',
    message: '최근 세계 경제가 장기 침체에 빠져 있어 경기전망을 비롯해',
    trigger: 'INTJ-경제학자-7',
  },
  {
    id: 'INTJ-경제학자-7',
    message:
      '청년실업에 따른 각종 경제 현황을 분석하는 연구가 지속적으로 이루어지고 있어서',
    trigger: 'INTJ-경제학자-8',
  },
  {
    id: 'INTJ-경제학자-8',
    message: '경제학연구원의 향후 10년간 고용은 1.9% 증가할 것으로 전망된대!',
    trigger: 'INTJ-경제학자-9',
  },
  {
    id: 'INTJ-경제학자-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INTJ-경제학자-10',
  },
  {
    id: 'INTJ-경제학자-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'INTJ-파일럿-1',
    message: '파일럿을 선택했구나!',
    trigger: 'INTJ-파일럿-2',
  },
  {
    id: 'INTJ-파일럿-2',
    message:
      '파일럿은 승객이나 화물을 운반하기 위해 여객기, 전투기, 경비행기, 헬리콥터 등을 조종해.',
    trigger: 'INTJ-파일럿-3',
  },
  {
    id: 'INTJ-파일럿-3',
    message:
      '비행스케줄에 따라 항로, 목적지, 연료량. 기상 조건 등을 숙지하고 항공기 상태, 조종실 시스템 등을 점검하는 것도 중요한 업무야.',
    trigger: 'INTJ-파일럿-4',
  },
  {
    id: 'INTJ-파일럿-4',
    message:
      '비행하는 동안 비행기의 장으로 항공승무원의 활동을 지휘하며 운항일지를 기록하는 일도 하지!',
    trigger: 'INTJ-파일럿-5',
  },
  {
    id: 'INTJ-파일럿-5',
    message:
      '기상이변 등 갑작스런 상황 변화에 대한 정확한 판단력과 대처능력이 필요하며',
    trigger: 'INTJ-파일럿-6',
  },
  {
    id: 'INTJ-파일럿-6',
    message:
      '능숙한 외국어 구사 능력, 공간지각력, 운송, 지리, 물리, 통신에 대한 기본지식이 요구돼!',
    trigger: 'INTJ-파일럿-7',
  },
  {
    id: 'INTJ-파일럿-7',
    message: '강철같은 판단력을 가진 INTJ에게는 딱인 직업아닐까?',
    trigger: 'INTJ-파일럿-8',
  },
  {
    id: 'INTJ-파일럿-8',
    message:
      '항공기 조종사가 되기 위해서는 공군사관학교, 한국항공대학교, 한서대학교의 항공운항학과에 입학하는 방법이 일반적이야.',
    trigger: 'INTJ-파일럿-9',
  },
  {
    id: 'INTJ-파일럿-9',
    message:
      '항공기 조종사는 한국방송통신전파진흥원에서 주관하는 무선통신사를 우선적으로 취득해야해!',
    trigger: 'INTJ-파일럿-10',
  },
  {
    id: 'INTJ-파일럿-10',
    message:
      '또한 국토교통부에서 실시하고 교통안전공단이 주관하는 국가자격시험인 자가용 조종면허, 사업용 조종면허, 운송용 조종면허를 순차적으로 취득해야해.',
    trigger: 'INTJ-파일럿-11',
  },
  {
    id: 'INTJ-파일럿-11',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INTJ-파일럿-12',
  },
  {
    id: 'INTJ-파일럿-12',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
  {
    id: 'INTJ-경영컨설턴트-1',
    message:
      '경영컨설턴트는 기업경영에 관한 문제점을 분석하고 대책을 연구하며, 사업추진에 관한 상담과 자문을 제공하는 일을 해.',
    trigger: 'INTJ-경영컨설턴트-2',
  },
  {
    id: 'INTJ-경영컨설턴트-2',
    message: '기업의 인사, 조직, 노무, 사무관리에 진단과 지도를 돕기도 하지.',
    trigger: 'INTJ-경영컨설턴트-3',
  },
  {
    id: 'INTJ-경영컨설턴트-3',
    message:
      '효율적인 경영을 위해 재무관리와 회계의 진단과 지도를 돕는 아주 중요한 직업이야!',
    trigger: 'INTJ-경영컨설턴트-4',
  },
  {
    id: 'INTJ-경영컨설턴트-4',
    message:
      '신뢰성, 분석적 사고, 혁신 등의 성격을 가진 사람인 INTJ에겐 멋진 직업이지!',
    trigger: 'INTJ-경영컨설턴트-5',
  },
  {
    id: 'INTJ-경영컨설턴트-5',
    message:
      '경영컨설턴트가 되기 위해서는 대학에서 경영학, 경제학, 산업공학, 컴퓨터 및 정보관련 등의 전공을 하는 것이 유리하며',
    trigger: 'INTJ-경영컨설턴트-6',
  },
  {
    id: 'INTJ-경영컨설턴트-6',
    message: '경영학석사(MBA) 학위 소지자들이 많아.',
    trigger: 'INTJ-경영컨설턴트-7',
  },
  {
    id: 'INTJ-경영컨설턴트-7',
    message: '일부 업체에서는 석사 학위 이상의 학력을 요구하기도 해.',
    trigger: 'INTJ-경영컨설턴트-8',
  },
  {
    id: 'INTJ-경영컨설턴트-8',
    message:
      '「2015-2025 중장기 인력수급전망」(한국고용정보원, 2016)에 따르면, 경영컨설턴트는 연평균 0.6%씩 증가하여 2025년 약 4만1,200명에 이를 것으로 전망된대!',
    trigger: 'INTJ-경영컨설턴트-9',
  },
  {
    id: 'INTJ-경영컨설턴트-9',
    message: ' 다른 직업들도 다시 볼래? ',
    trigger: 'INTJ-경영컨설턴트-10',
  },
  {
    id: 'INTJ-경영컨설턴트-10',
    options: [
      { value: 1, label: '응 좋아!', trigger: 'INTJ-11' },
      { value: 2, label: '아니~ 괜찮아!', end: true },
    ],
  },
];
