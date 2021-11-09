import React from 'react';
import style from './carousel.module.css';
import './slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage from '../../assets/topBanner.png';
import bannerImage2 from '../../assets/topBanner2.png';
import bannerImage3 from '../../assets/topBanner3.png';
import bannerImage4 from '../../assets/topBanner4.png';
import bannerImage5 from '../../assets/topBanner5.png';
import bannerImage6 from '../../assets/topBanner6.png';

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
  const bannerList = [
    bannerImage,
    bannerImage2,
    bannerImage3,
    bannerImage4,
    bannerImage5,
    bannerImage6,
  ];
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
