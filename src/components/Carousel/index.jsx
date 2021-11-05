import React from 'react';
import style from './carousel.module.css';
import './slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage from '../../assets/banner1.png';
import bannerImage2 from '../../assets/banner2.png';
import bannerImage3 from '../../assets/banner3.png';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    fade: true,
  };
  const bannerList = [bannerImage, bannerImage2, bannerImage3];
  return (
    <div>
      <Slider {...settings}>
        {bannerList.map((list, index) => {
          return (
            <div key={index} className={style.imageBox}>
              <img src={list} alt='배너이미지' className={style.img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
