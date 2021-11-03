import React, { useEffect } from 'react';
import style from './setting.module.css';
import { Chat } from '../../components/';
import adminicon from '../../assets/adminicon.png';
import notification from '../../assets/notification.png';
import alram from '../../assets/alram.png';
import contract from '../../assets/contract.png';
import mail from '../../assets/mail.png';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/modules/user';
import { history } from '../../redux/configureStore';
const Setting = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.is_login);
  const logOut = () => {
    dispatch(userActions.logout());
  };
  const goSigninPage = () => {
    history.push('/signin');
  };
  useEffect(() => {}, []);

  return (
    <div className={style.wrap}>
      <Chat />
      <div className={style.settingList}>
        <h2>설정</h2>
        {isLogin ? (
          <div>
            <img src={adminicon} alt='공지사항' className={style.adminImage} />
            <p>관리자페이지</p>
          </div>
        ) : (
          ''
        )}

        <div>
          <img
            src={notification}
            alt='공지사항'
            className={style.notificationImage}
          />
          <p>공지사항</p>
        </div>
        <div>
          <img src={alram} alt='알림설정' className={style.alramImage} />
          <p>알림설정</p>
        </div>
        <div>
          <img src={contract} alt='이용약관' className={style.contractImage} />

          <p>이용약관</p>
        </div>
        <div>
          <img src={mail} alt='리뷰남기기' className={style.mailImage} />

          <p>리뷰남기기</p>
        </div>
        {isLogin ? (
          <div className={style.btn}>
            <button onClick={logOut}>로그아웃</button>
            <button>탈퇴하기</button>
          </div>
        ) : (
          <div className={style.btn}>
            <button onClick={goSigninPage}>로그인</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
