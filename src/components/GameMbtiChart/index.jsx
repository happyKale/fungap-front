import React from 'react';
import style from './gameMbtiChart.module.css';
import Chart from 'chart.js/auto';
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../../redux/modules/game';

const GameMbtiChart = props => {
  const dispatch = useDispatch();
  const resultBtn = props.resultBtn;
  const gameState = props.gameState;
  const game = useSelector(state => state.game.game);
  const quest1 = useSelector(state => state.game.quest1);
  const quest2 = useSelector(state => state.game.quest2);

  const mbtiList1 = {
    INFJ: 0,
    INFP: 0,
    ENFJ: 0,
    ENFP: 0,
    ISTP: 0,
    ISFP: 0,
    ESTP: 0,
    ESFP: 0,
    INTP: 0,
    INTJ: 0,
    ENTJ: 0,
    ENTP: 0,
    ISTJ: 0,
    ISFJ: 0,
    ESTJ: 0,
    ESFJ: 0,
  };

  const mbtiList2 = {
    INFJ: 0,
    INFP: 0,
    ENFJ: 0,
    ENFP: 0,
    ISTP: 0,
    ISFP: 0,
    ESTP: 0,
    ESFP: 0,
    INTP: 0,
    INTJ: 0,
    ENTJ: 0,
    ENTP: 0,
    ISTJ: 0,
    ISFJ: 0,
    ESTJ: 0,
    ESFJ: 0,
  };

  React.useEffect(() => {
    for (const key in quest1) {
      if (mbtiList1.hasOwnProperty(key)) {
        mbtiList1[key] = quest1[key];
      }
    }

    for (const key in quest2) {
      if (mbtiList2.hasOwnProperty(key)) {
        mbtiList2[key] = quest2[key];
      }
    }

    const leftData = Object.values(mbtiList1);
    const rightData = Object.values(mbtiList2);

    const chartHeight = document.getElementById('myChart');
    chartHeight.style.height = '700px';

    const ctx = document.getElementById('myChart')?.getContext('2d');

    const chartData = {
      labels: [
        'INFJ',
        'INFP',
        'ENFJ',
        'ENFP',
        'ISTP',
        'ISFP',
        'ESTP',
        'ESFP',
        'INTP',
        'INTJ',
        'ENTJ',
        'ENTP',
        'ISTJ',
        'ISFJ',
        'ESTJ',
        'ESFJ',
      ],
      datasets: [
        {
          axis: 'y',
          label: game?.game_quest1,
          data: leftData,
          fill: false,
          backgroundColor: ['rgb(255, 99, 133)'],
        },
        {
          axis: 'y',
          label: game?.game_quest2,
          data: rightData,
          fill: false,
          backgroundColor: ['rgb(255, 205, 86)'],
        },
      ],
    };

    const chartOptions = {
      responsive: false,
      indexAxis: 'y',
    };

    const chart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: chartOptions,
    });
  }, []);

  return (
    <React.Fragment>
      <div className={style.gameQuest1}>
        <span className={style.block} />
        <span className={style.questMsg}>{game?.game_quest1}</span>
        <div className={style.blank} />
        <span className={style.count}>
          {quest1?.count ? quest1?.count : 0}표
        </span>
      </div>
      <div className={style.gameQuest2}>
        <span className={style.block} />
        <span className={style.questMsg}>{game?.game_quest2}</span>
        <div className={style.blank} />
        <span className={style.count}>
          {quest2?.count ? quest2?.count : 0}표
        </span>
      </div>
      <div className={style.gameCountBox}>
        <span>총 참여수: </span>
        <div className={style.blank} />
        <span> {game.participation_count} 표</span>
      </div>
      <div className={style.myCanvas}>
        <canvas id='myChart'></canvas>
      </div>
    </React.Fragment>
  );
};

export default GameMbtiChart;
