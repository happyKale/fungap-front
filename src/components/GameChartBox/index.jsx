import React, { useEffect, useState } from 'react';
import style from './gameChartBox.module.css';
import { GameParticipateChart, GameMbtiChart } from '../../components';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../redux/modules/game';

const GameChartBox = props => {
  const dispatch = useDispatch();
  const [resultBtn, setResultBtn] = useState(true);
  const gameState = useSelector(state => state.game.game?.game_state);
  console.log('게임 스테이트!@!!!!: ', gameState);

  useEffect(() => {
    const resultBtn1 = document.getElementById('resultBtn1');
    const resultBtn2 = document.getElementById('resultBtn2');
    const resultInnerContainer = document.getElementById(
      'resultInnerContainer',
    );

    if (resultBtn === false) {
      resultBtn1.style.top = '0px';
      resultBtn2.style.top = '3px';
      resultInnerContainer.style.height = '820px';
      return;
    } else if (resultBtn === true) {
      resultBtn1.style.top = '3px';
      resultBtn2.style.top = '0px';
      resultInnerContainer.style.height = '140px';
    }
  }, [resultBtn]);

  return (
    <div id='resultContainer' className={style.gameResultContainer}>
      <div className={style.gameResultTitle}>
        <span>게임 결과</span>
        <button
          id='resultBtn1'
          className={style.resultBtn}
          onClick={() => {
            setResultBtn(true);
          }}
        >
          참여수
        </button>
        <button
          id='resultBtn2'
          className={style.resultBtn}
          onClick={() => {
            setResultBtn(false);
          }}
        >
          MBTI 차트
        </button>
      </div>
      <div
        id='resultInnerContainer'
        className={classNames(
          style.gameResultInnerContainer,
          !resultBtn ? style.mbtiChartBorder : '',
        )}
      >
        {resultBtn ? (
          <GameParticipateChart resultBtn={resultBtn} gameState={gameState} />
        ) : (
          <GameMbtiChart
            resultBtn={resultBtn}
            gameState={gameState}
            game={props.game}
          />
        )}
      </div>
    </div>
  );
};

export default GameChartBox;
