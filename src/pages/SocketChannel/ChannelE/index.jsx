import React, { useEffect, useState } from 'react';
import { socket } from '../../../shared/socket';
//redux
import { useSelector } from 'react-redux';
//route
import { history } from '../../../redux/configureStore';
//components
import { Goback, Modal, MbtiTag } from '../../../components';
//css
import style from '../soketChannel.module.css';
//images
import placeholder from '../../../assets/profileplaceholder.png';

const ChannelE = () => {
  const [userCount, setUserCount] = useState();
  const [userList, setUserList] = useState();
  const [btnVisible, setBtnVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // const userMbti = JSON.parse(sessionStorage.getItem('user')).user_mbti
  const isLogin = useSelector(state => state.user.is_login);
  const roomName = 'E';

  useEffect(() => {
    socket.emit('join_room', roomName);
    socket.emit('current_usercount', roomName);
    socket.on('current_usercount', (userlist, usercount) => {
      const userArray = userlist.flat();
      setUserList(userArray);
    });
    return () => {
      socket.emit('left_room', roomName);
      socket.off('current_usercount', 'join_room');
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
      history.push('/roome');
    } else {
      openModal();
    }
  };
  return (
    <>
      <Goback>MBTI채팅방</Goback>
      <div className={style.image} />
      <h2>[E모임] 외향형 모여라</h2>
      <p className={style.text}>
        사람들 만나고 활동할 때 에너지 넘치는 편~ 다양한 친구들과 폭 넓은 관계를
        맺는 것 너무 좋아하는 사람들 모여라! 우리는 생동감 넘치는 E !
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

export default ChannelE;
