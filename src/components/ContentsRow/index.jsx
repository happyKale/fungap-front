import React from 'react';
import style from './contentsRow.module.css';
import Slider from 'react-slick';
import { ContentsRowItem } from '../../components';
import classNames from 'classnames';

const ContentsRow = props => {
  const slidesToShow = props?.slidesToShow;
  const array = props?.list;
  const mode = props?.mode;
  const dots = props?.dots;
  // mode가 game일 때 map을 2번 돌리기 위해서
  const gameArray = [0, 0];

  React.useEffect(() => {
    const getDot = document.getElementsByClassName('slick-dots');
    getDot[1].style.bottom = '10px';
  }, []);

  const settings = {
    dots: dots,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    draggable: true,
    centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

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
                  item={array?.slice(2 * idx, 2 * (idx + 1))}
                  mode={mode}
                />
              );
            })
          : array?.map((item, idx) => {
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
