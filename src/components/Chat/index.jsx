import React from 'react';
import style from './index.module.css';

const Chat = ({ ...rest }) => {
  return (
    <React.Fragment>
      <div className={style.userContent}>
        <img
          className={style.userImage}
          alt='유저이미지'
          src='https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
        />
        <div>
          <p>로그인 하러가기</p>
          <span>로그인 후 더 많은 이야기를 나눠 보세요</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chat;
