import React from 'react';
import style from './chat.module.css';

const Chat = ({ ...rest }) => {
  const isLogin = false;

  return (
    <React.Fragment>
      <div className={style.userContent}>
        <img
          className={style.userImage}
          alt='유저이미지'
          src='https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
        />
        {isLogin ? (
          <div>
            <div className={style.userEdit}>
              <h3>임동건님</h3>
              <button>수정</button>
            </div>

            <p>즐거운 시간 되세요!</p>
            <span>INFJ</span>
          </div>
        ) : (
          <div>
            <h3>로그인 하러가기</h3>
            <p>로그인 후 더 많은 이야기를 나눠 보세요</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Chat;
