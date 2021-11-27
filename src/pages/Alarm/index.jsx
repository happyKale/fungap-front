import React from 'react';
// components
import { Goback } from '@components';

const Alarm = () => {
  return (
    <div>
      <Goback>알림설정</Goback>
      <p
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          fontSize: '30px',
          textAlign: 'center',
          color: '#999',
        }}
      >
        준비 중 입니다.
      </p>
    </div>
  );
};

export default Alarm;
