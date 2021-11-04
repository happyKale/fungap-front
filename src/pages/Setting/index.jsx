import React, { useEffect } from 'react';
import style from './setting.module.css';
import { Chat, Modal } from '../../components/';
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
  const [visible, setVisible] = React.useState(false);

  const logOut = () => {
    dispatch(userActions.logout());
  };

  const goSigninPage = () => {
    history.push('/signin');
  };

  const goNotificationPage = () => {
    history.push('/notification');
  };

  const goAlarmPage = () => {
    history.push('/alarm');
  };

  const goTermsofUsePage = () => {
    history.push('/termsofuse');
  };

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const withdrawalMember = () => {
    dispatch(userActions.deleteUserInfoDB());
  };

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
          <p onClick={goNotificationPage}>공지사항</p>
        </div>
        <div>
          <img src={alram} alt='알림설정' className={style.alramImage} />
          <p onClick={goAlarmPage}>알림설정</p>
        </div>
        <div>
          <img src={contract} alt='이용약관' className={style.contractImage} />

          <p onClick={goTermsofUsePage}>이용약관</p>
        </div>
        <div>
          <img src={mail} alt='리뷰남기기' className={style.mailImage} />

          <p>리뷰남기기</p>
        </div>
        {isLogin ? (
          <div className={style.btn}>
            <button onClick={logOut}>로그아웃</button>
            <button onClick={openModal}>탈퇴하기</button>
          </div>
        ) : (
          <div className={style.btn}>
            <button onClick={goSigninPage}>로그인</button>
          </div>
        )}
      </div>
      {visible && (
        <Modal
          title='회원 탈퇴'
          visible={visible}
          desc='정말 탈퇴하시겠어요?'
          desc2='탈퇴 시 이전 정보는 복구되지 않습니다.'
          onClose={closeModal}
          btnLeft='취소'
          btnRight='탈퇴하기'
          clickBtnRight={withdrawalMember}
          maskClosable
        />
      )}
    </div>
  );
};

export default Setting;
