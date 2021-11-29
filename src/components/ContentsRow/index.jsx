import React, { useEffect } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
// css
import style from './contentsRow.module.css';
// components
import { ContentsRowItem } from '@components';

const ContentsRow = ({ slidesToShow, list, mode, dots }) => {
  // mode가 game일 때 map을 2번 돌리기 위해서
  const gameArray = [0, 0];
  const settings = {
    dots: dots,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    draggable: true,
    centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

  useEffect(() => {
    const getDot = document.getElementsByClassName('slick-dots');
    getDot[1].style.bottom = '10px';
  }, []);

  return (
    <div
      className={classNames(
        mode === 'game' ? style.gameContainer : style.container,
      )}
    >
      <Slider {...settings}>
        {mode === 'game'
          ? gameArray?.map((item, idx) => {
              return (
                <ContentsRowItem
                  key={Math.random() + 'game'}
                  item={list?.slice(2 * idx, 2 * (idx + 1))}
                  mode={mode}
                />
              );
            })
          : list?.map((item, idx) => {
              return (
                <ContentsRowItem
                  key={Math.random() + 'post'}
                  item={item}
                  mode={mode}
                />
              );
            })}
      </Slider>
    </div>
  );
};

export default ContentsRow;
