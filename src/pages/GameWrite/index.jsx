import React, { useRef, useState } from 'react';
import style from './gameWrite.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../redux/modules/game';

import { Goback, Modal } from '../../components';
import { history } from '../../redux/configureStore';
import classnames from 'classnames';

const GameWrite = props => {
  // 게임 게시글 아이디가 넘어오면 수정
  const gameId = props.match.params.id;
  const isEdit = gameId ? true : false;
  const gameInfo = useSelector(state => state.game.game);
  // const gameInfo = gameList.find(game => game.id === gameId);

  React.useEffect(() => {
    if (gameId) {
      dispatch(gameActions.getGameDB(gameId));
    }
  }, []);

  const dispatch = useDispatch();
  const [titleCnt, setTitleCnt] = useState(0);
  const [quest1Cnt, setQuest1Cnt] = useState(0);
  const [quest2Cnt, setQuest2Cnt] = useState(0);
  const [descCnt, setDescCnt] = useState(0);
  const titleRef = useRef();
  const descRef = useRef();
  const quest1Ref = useRef();
  const quest2Ref = useRef();
  const [dataConfirm, setDataConfirm] = useState(false);

  // modal 컴포넌트 보이는 여부
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  // 작성자 정보 저장
  const { user_id, nickname, user_image } = useSelector(
    state => state.user.user,
  );

  React.useEffect(() => {
    if (titleCnt !== 0 && descCnt !== 0 && quest1Cnt !== 0 && quest2Cnt !== 0) {
      setDataConfirm(true);
    } else if (
      titleRef.current.defaultValue.length !== 0 &&
      descRef.current.defaultValue.length !== 0 &&
      quest1Ref.current.defaultValue.length !== 0 &&
      quest2Ref.current.defaultValue.length !== 0
    ) {
      setTitleCnt(titleRef.current.defaultValue.length);
      setQuest1Cnt(quest1Ref.current.defaultValue.length);
      setQuest2Cnt(quest2Ref.current.defaultValue.length);
      setDescCnt(descRef.current.defaultValue.length);
      setDataConfirm(true);
    } else {
      setDataConfirm(false);
    }
  }, [titleCnt, descCnt, quest1Cnt, quest2Cnt]);

  const makeVote = () => {
    // 빈칸이면 저장되지 못하게 막기.
    if (!dataConfirm) {
      setVisible(true);
      return;
    }
    console.log(descRef.current.value);
    dispatch(
      gameActions.addGameDB({
        game_title: titleRef.current.value,
        game_desc: descRef.current.value,
        game_quest1: quest1Ref.current.value,
        game_quest2: quest2Ref.current.value,
      }),
    );
  };

  const editVote = () => {
    dispatch(
      gameActions.editGameDB(gameInfo?.game_id, {
        game_title: titleRef.current.value,
        game_desc: descRef.current.value,
        game_quest1: quest1Ref.current.value,
        game_quest2: quest2Ref.current.value,
      }),
    );
  };

  return (
    <div>
      {/* 페이지 제목 */}
      <Goback page='/games'>
        {gameId ? '게임 수정하기' : '나만의 게임 만들기'}
      </Goback>
      <div className={style.container}>
        {/* 제목 */}
        <div className={style.input}>
          <label htmlFor='title'>제목 입력</label>
          <input
            id='title'
            placeholder='제목'
            ref={titleRef}
            onChange={() => {
              setTitleCnt(titleRef.current.value.length);
            }}
            type='text'
            maxLength='20'
            defaultValue={isEdit ? gameInfo?.game_title : ''}
          />
          <span>{titleCnt} / 20</span>
        </div>

        {/* 설명 */}
        <div className={style.input}>
          <label>설명 입력</label>
          <textarea
            placeholder='설명'
            onChange={() => {
              setDescCnt(descRef.current.value.length);
            }}
            ref={descRef}
            defaultValue={isEdit ? gameInfo?.game_desc : ''}
          />
        </div>

        {/* 질문1 */}
        <div className={style.input}>
          <label>선택지 입력</label>
          <input
            placeholder='선택지1'
            ref={quest1Ref}
            onChange={() => {
              setQuest1Cnt(quest1Ref.current.value.length);
            }}
            type='text'
            maxLength='20'
            defaultValue={isEdit ? gameInfo?.game_quest1 : ''}
          />
          <span>{quest1Cnt} / 20</span>
          <input
            placeholder='선택지2'
            ref={quest2Ref}
            onChange={() => {
              setQuest2Cnt(quest2Ref.current.value.length);
            }}
            type='text'
            maxLength='20'
            defaultValue={isEdit ? gameInfo?.game_quest2 : ''}
          />
          <span>{quest2Cnt} / 20</span>
        </div>
        <button
          onClick={isEdit ? editVote : makeVote}
          className={
            dataConfirm
              ? classnames(style.buttonCompleted, style.button)
              : style.button
          }
        >
          등록하기
        </button>
      </div>
      {visible && (
        <Modal
          title='게임 정보를 모두 입력해야합니다.'
          desc='비어있는 정보들도 입력해주시기 바랍니다.'
          btnLeft='아니요'
          btnRight='예'
          clickBtnRight={() => {
            setVisible(false);
          }}
          visible={visible}
          maskClosable
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default GameWrite;
