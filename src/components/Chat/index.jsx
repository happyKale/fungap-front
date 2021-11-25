import React from 'react';
import style from './chat.module.css';
import { useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
import profileImg from '../../assets/profileplaceholder.png';
import friendDefault from '../../assets/friend_default.png';

const Chat = ({ chat, image, name, message, category, chatId }) => {
  const isLogin = useSelector(state => state.user.is_login);
  const userInfo = JSON.parse(sessionStorage.getItem('user'));

  const goProfileEdit = () => {
    history.push('/useredit');
  };
  const goSigninPage = () => {
    history.push('/signin');
  };

  if (!chat) {
    return (
      <React.Fragment>
        <div className={style.userContent}>
          <img
            className={style.userImage}
            alt='유저이미지'
            src={userInfo?.user_image ? userInfo.user_image : profileImg}
          />
          {isLogin ? (
            <div className={style.box} onClick={goProfileEdit}>
              <div>
                <h3>{userInfo.nickname}님</h3>
                <span>{userInfo.user_mbti}</span>
              </div>

              <div className={style.btn}></div>
            </div>
          ) : (
            <div className={style.box} onClick={goSigninPage}>
              <h3>로그인 하러가기</h3>
              <div className={style.btn}></div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  } else if (chat) {
    return (
      <React.Fragment>
        <div
          className={style.chatContent}
          onClick={() => {
            if (category === '진로상담 #챗봇') {
              history.push(`/chatroom/${chatId}`);
            } else if (name === '[E모임] 외향형 모여라') {
              history.push('/channele');
            } else if (name === '[I모임] 내향형 모여라') {
              history.push('/channeli');
            } else if (name === '[F모임] 감정형 모여라') {
              history.push('/channelf');
            } else if (name === '[T모임] 사고형 모여라') {
              history.push('/channelt');
            }
          }}
        >
          <img
            src={image ? image : friendDefault}
            className={style.chatUserImage}
            alt='캐릭터'
          />
          <div className={style.chatDesc}>
            <h3 className={style.chatName}>
              {name} <span className={style.chatCategory}>{category}</span>
            </h3>
            <p className={style.chatMessage}>
              {category !== '준비중'
                ? message
                : '준비중입니다. 조금만 기다려주세요.'}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Chat;
