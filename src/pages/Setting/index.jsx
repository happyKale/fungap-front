import React from 'react';
import style from './setting.module.css';
import { Chat, Modal } from '../../components/';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/modules/user';
import { history } from '../../redux/configureStore';

const Setting = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.is_login);
  const isAdmin = JSON.parse(sessionStorage.getItem('user'))?.user_authority;

  console.log(isAdmin);
  const [visible, setVisible] = React.useState(false);

  const logOut = () => {
    dispatch(userActions.logout());
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

  const goAdminPage = () => {
    history.push('/admin');
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
      <div />
      <Chat />

      <div className={style.settingList}>
        {isLogin && isAdmin === 'admin' ? (
          <div className={style.content}>
            <div name='이미지' className={style.adminIcon} />
            <p onClick={goAdminPage}>관리자 페이지</p>
            <div />
          </div>
        ) : (
          ''
        )}

        <div className={style.content}>
          <div name='이미지' className={style.notificationIcon} />
          <p onClick={goNotificationPage}>공지사항</p>
          <div />
        </div>
        <div className={style.content}>
          <div name='이미지' className={style.alramIcon} />
          <p onClick={goAlarmPage}>알림설정</p>
          <div />
        </div>
        <div className={style.content}>
          <div name='이미지' className={style.contractIcon} />
          <p onClick={goTermsofUsePage}>이용약관</p>
          <div />
        </div>
        <div className={style.content}>
          <div name='이미지' className={style.reviewIcon} />
          <p
            onClick={() => {
              window.open('https://forms.gle/HFRkJ96pPX5q71Jq8');
            }}
          >
            리뷰 남기기
          </p>
          <div />
        </div>

        {isLogin ? (
          <>
            <div className={style.content}>
              <div name='이미지' className={style.logoutIcon} />
              <p onClick={logOut}>로그아웃</p>
              <div />
            </div>
            <div className={style.content}>
              <div name='이미지' className={style.withdrawalIcon} />
              <p onClick={openModal}>회원탈퇴</p>
              <div />
            </div>
          </>
        ) : (
          ''
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
