import style from './channelt.module.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Goback, Modal } from '../../../components';
import { history } from '../../../redux/configureStore';
import { socket } from '../../../shared/socket';
import placeholder from '../../../assets/profileplaceholder.png';
const ChannelT = () => {
  const [userCount, setUserCount] = useState();
  const [userList, setUserList] = useState();
  const [btnVisible, setBtnVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const isLogin = useSelector(state => state.user.is_login);
  const roomName = 'T';

  useEffect(() => {
    socket.emit('join_room', roomName);
    socket.emit('current_usercount', roomName);
    socket.on('current_usercount', (userlist, usercount) => {
      const userArray = userlist.flat();
      setUserList(userArray);
      setUserCount(usercount);
    });
    return () => {
      socket.emit('left_room', roomName);
      socket.off('current_usercount');
    };
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const checkLogin = () => {
    if (isLogin == true) {
      history.push('/roomt');
    } else {
      openModal();
    }
  };

  return (
    <>
      <Goback>MBTI채팅방</Goback>
      <div className={style.image} />
      <h2>[T모임] 사고형 모여라</h2>
      <p className={style.text}>
        진실과 사실에 주 관심이 있는 T ! 과저어도 중요하지만 결과가 더 중요하지~
        ‘팩폭러’라는 말 한 번이라도 들어본 사람 손들어!
      </p>
      <div className={style.button} onClick={checkLogin}>
        입장하기
      </div>
      <h3>참여자({userList ? userList.length : 0}명)</h3>
      {btnVisible
        ? userList?.slice(0, 5).map((list, index) => {
            return (
              <div className={style.content} key={index}>
                <img
                  src={list?.user_image ? list.user_image : placeholder}
                  alt='유저이미지'
                  className={style.userImage}
                />
                <p>{list?.nickname}</p>
              </div>
            );
          })
        : userList?.map((list, index) => {
            return (
              <div className={style.content} key={index}>
                <img
                  src={list?.user_image ? list.user_image : placeholder}
                  alt='유저이미지'
                  className={style.userImage}
                />
                <p>{list?.nickname}</p>
              </div>
            );
          })}
      {userList?.length < '5' ? (
        ''
      ) : userList === undefined ? (
        ''
      ) : (
        <div
          className={style.visibleBtn}
          onClick={() => {
            setBtnVisible(!btnVisible);
          }}
        >
          멤버 모두 보기
        </div>
      )}
      {modalVisible && (
        <Modal
          title='로그인하기'
          visible={modalVisible}
          desc='채팅방 입장은 로그인이 필요합니다.'
          desc2='로그인 하루 가시겠어요?'
          onClose={closeModal}
          btnLeft='닫기'
          btnRight='로그인 하러가기'
          clickBtnRight={() => {
            history.push('/signin');
          }}
        />
      )}
    </>
  );
};

export default ChannelT;
