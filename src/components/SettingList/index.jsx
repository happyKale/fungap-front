import React, { useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@redux/modules/user';
// route
import { history } from '@redux/configureStore';
// components
import { SettingItem, Modal } from '@components/';
// css
import style from './settingList.module.css';

const SettingList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([
    {
      title: '관리자페이지',
      iconName: 'adminIcon',
      handleClick: () => history.push('/admin'),
    },
    {
      title: '공지사항',
      iconName: 'notificationIcon',
      handleClick: () => history.push('/notification'),
    },
    {
      title: '알림설정',
      iconName: 'alramIcon',
      handleClick: () => history.push('/alarm'),
    },
    {
      title: '이용약관',
      iconName: 'contractIcon',
      handleClick: () => history.push('/termsofuse'),
    },
    {
      title: '리뷰남기기',
      iconName: 'reviewIcon',
      handleClick: () => window.open('https://forms.gle/HFRkJ96pPX5q71Jq8'),
    },
    {
      title: '로그아웃',
      iconName: 'logoutIcon',
      handleClick: () => dispatch(userActions.logout()),
    },
    {
      title: '회원탈퇴',
      iconName: 'withdrawalIcon',
      handleClick: () => setVisible(true),
    },
  ]);
  const isLogin = useSelector(state => state.user.is_login);
  const isAdmin = JSON.parse(sessionStorage.getItem('user'))?.user_authority;

  const [visible, setVisible] = useState(false);

  const closeModal = () => setVisible(false);

  const withdrawalMember = () => dispatch(userActions.deleteUserInfoDB());

  return (
    <>
      <div className={style.wrap}>
        {/* 관리자 권한 & 로그인 */}
        {isLogin && isAdmin === 'admin'
          ? list.map((item, index) => {
              return <SettingItem key={index} {...item} />;
            })
          : isLogin
          ? // 로그인
            list.slice(1, list.length).map((item, index) => {
              return <SettingItem key={index} {...item} />;
            })
          : // 로그인 X
            list.slice(1, 5).map((item, index) => {
              return <SettingItem key={index} {...item} />;
            })}
      </div>
      {visible && (
        <Modal
          title='정말 탈퇴하시겠어요?'
          desc='탈퇴 시 이전 정보는 복구되지 않습니다.'
          btnLeft='취소'
          btnRight='탈퇴하기'
          btnRightType='leave'
          visible={visible}
          onClose={closeModal}
          clickBtnRight={withdrawalMember}
          maskClosable
        />
      )}
    </>
  );
};

export default SettingList;
