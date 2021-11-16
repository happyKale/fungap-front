import React from 'react';
import style from './carousel.module.css';
import './slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { history } from '../../redux/configureStore';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div
          className={style.imageBox}
          onClick={() => {
            history.push('/compatibility');
          }}
        >
          <div className={style.img} />
        </div>
        <div
          className={style.imageBox}
          onClick={() => {
            history.push('/detail/33');
          }}
        >
          <div className={style.img2} />
        </div>
        <div
          className={style.imageBox}
          onClick={() => {
            history.push('/detail/11');
          }}
        >
          <div className={style.img3} />
        </div>
        <div
          className={style.imageBox}
          onClick={() => {
            history.push('/detail/32');
          }}
        >
          <div className={style.img4} />
        </div>
        <div
          className={style.imageBox}
          onClick={() => {
            history.push('/detail/35');
          }}
        >
          <div className={style.img5} />
        </div>
        <div
          className={style.imageBox}
          onClick={() => {
            history.push('/detail/16');
          }}
        >
          <div className={style.img6} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
