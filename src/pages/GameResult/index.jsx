import React, { useState } from 'react';
import classNames from 'classnames';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
import { gameActions } from '../../redux/modules/game';
//components
import {
  Goback,
  GameChartBox,
  ContentFt,
  Comments,
  Modal,
  MbtiTag,
} from '../../components';
//css
import style from './gameResult.module.css';
//image
import vs from '../../assets/vs.png';
import defaultImg from '../../assets/profileplaceholder.png';

const GameResult = props => {
  const gameId = parseInt(props.match.params.id); // 투표 게시글 아이디
  const dispatch = useDispatch();
  const game = useSelector(state => state.game.game);
  const [visible, setVisible] = useState(false); // modal 컴포넌트 보이는 여부
  const isLogin = useSelector(state => state.user.is_login); // 로그인 여부
  const userMbti = useSelector(state => state.user.user?.user_mbti);
  const [modalTitle, setModalTitle] = useState(''); // modal 컴포넌트 제목

  React.useEffect(() => {
    dispatch(gameActions.getGameDB(gameId));
  }, []);

  const resultSubmit = () => {
    history.push(`/game/${gameId}`);
  };

  return (
    <div>
      <Goback page='/games'>MBTI 밸런스 게임</Goback>
      <div className={style.container}>
        <div className={style.userInfo}>
          <div className={style.userProfile}>
            <img
              className={style.userImg}
              src={game?.user_image ? game?.user_image : defaultImg}
              alt='프로필이미지'
            />
            <div>
              <span className={style.userName}>
                {game?.nickname} <MbtiTag mbti={userMbti}>{userMbti}</MbtiTag>
              </span>
              <span>2021.11.20</span>
            </div>
          </div>
        </div>
        {/* 투표 제목 */}
        <p className={style.gameTitle}>{game?.game_title}</p>
        {/* 투표 내용 */}
        <p className={style.gameDesc}>{game?.game_desc}</p>
        <div className={style.questContainer}>
          <div
            className={classNames(
              style.quest,
              game?.game_state === '1' ? style.checked : '',
            )}
          >
            {game?.game_quest1}
          </div>
          <img className={style.vs} src={vs} alt='vs' />
          <div
            className={classNames(
              style.quest,
              game?.game_state === '2' ? style.checked : '',
            )}
          >
            {game?.game_quest2}
          </div>
        </div>
      </div>
      <GameChartBox mode={'2square'} />
      <button className={style.resultButton} onClick={resultSubmit}>
        다시 투표하기
      </button>
      <div>
        <ContentFt
          post={{
            mode: 'game',
            view_count: game?.game_view_count,
            board_id: game?.game_id,
            like_count: game?.like_count,
            like_state: game?.like_state,
            board_title: game?.game_title,
          }}
        />
        <Comments boardId={gameId} mode={'game'} />
      </div>
      {visible && (
        <Modal
          title={modalTitle}
          btnLeft='아니요'
          btnRight='예'
          clickBtnRight={() => {
            if (!isLogin) {
              history.push('/signin');
              setVisible(false);
            } else {
              history.push(`/games`);
              dispatch(gameActions.deleteGameDB(gameId));
            }
          }}
          visible={visible}
          maskClosable
          onClose={() => {
            setVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default GameResult;
