import React from 'react';
import style from './gameParticipateChart.module.css';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const GameParticipateChart = props => {
  const gameState = props.gameState;
  const resultBtn = props.resultBtn;
  const quest1 = useSelector(state => state.game.quest1);
  const quest2 = useSelector(state => state.game.quest2);
  const gameCount1 = quest1?.count ? quest1.count : 0;
  const gameCount2 = quest2?.count ? quest2.count : 0;
  const game = useSelector(state => state.game.game);
  const gameCountAll = game?.participation_count;

  React.useEffect(() => {
    console.log('참여수탭인지 MBTI탭인지: ', resultBtn);

    const gameCountLeft = document?.getElementById('gameLeft');
    const gameCountRight = document?.getElementById('gameRight');
    const leftWidth = Math.round((gameCount1 / gameCountAll) * 100);
    const rightWidth = Math.round((gameCount2 / gameCountAll) * 100);

    if (leftWidth === 100) {
      gameCountLeft.style.width = `${leftWidth}%`;
      gameCountLeft.style.display = 'block';
      gameCountRight.style.display = 'none';
      gameCountLeft.style.borderTopRightRadius = '40px';
      gameCountLeft.style.borderBottomRightRadius = '40px';
      return;
    } else if (rightWidth === 100) {
      gameCountRight.style.display = 'block';
      gameCountLeft.style.display = 'none';
      gameCountRight.style.width = `${rightWidth}%`;
      gameCountRight.style.borderTopLeftRadius = '40px';
      gameCountRight.style.borderBottomLeftRadius = '40px';
      return;
    } else {
      gameCountLeft.style.display = 'block';
      gameCountRight.style.display = 'block';
      gameCountLeft.style.borderTopRightRadius = '0px';
      gameCountLeft.style.borderBottomRightRadius = '0px';
      gameCountRight.style.borderTopLeftRadius = '0px';
      gameCountRight.style.borderBottomLeftRadius = '0px';

      // 너비가 90% 넘어가면 그냥 90%로 하기위해서
      if (leftWidth > 90) {
        gameCountLeft.style.width = `90%`;
        gameCountRight.style.width = `10%`;
      } else if (rightWidth > 90) {
        gameCountLeft.style.width = `10%`;
        gameCountRight.style.width = `90%`;
      } else {
        // 총 득표수가 0일 때
        if (gameCount1 === 0 && gameCount2 === 0) {
          gameCountLeft.style.width = `50%`;
          gameCountRight.style.width = `50%`;
          return;
        }
        gameCountLeft.style.width = `${leftWidth}%`;
        gameCountRight.style.width = `${rightWidth}%`;
      }
    }
  }, [gameCount1, gameCount2, resultBtn, gameState]);

  return (
    <React.Fragment>
      <div>
        <div className={style.gameQuest1}>
          <span />
          {game?.game_quest1}
        </div>
        <div className={style.gameQuest2}>
          <span />
          {game?.game_quest2}
        </div>
        <div className={style.gameCountBox}>
          <span>총 참여수: </span>
          <span className={style.gameCountText}>{gameCountAll} 표</span>
        </div>
        <div className={style.gameCountBar}>
          <span
            id='gameLeft'
            className={classNames(style.gameCountLeft, style.gameCount)}
          >
            {gameCount1}표
          </span>
          <span
            id='gameRight'
            className={classNames(style.gameCountRight, style.gameCount)}
          >
            {gameCount2}표
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GameParticipateChart;
