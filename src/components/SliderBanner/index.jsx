import React from 'react';
import Slider from 'react-slick';
// components
import { SliderItem } from '@components';
// css
import './slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
  {
    page: '/compatibility',
    image: 'img',
  },
  {
    page: '/detail/33',
    image: 'img2',
  },
  {
    page: '/detail/11',
    image: 'img3',
  },
  {
    page: '/detail/32',
    image: 'img4',
  },
  {
    page: '/detail/35',
    image: 'img5',
  },
  {
    page: '/detail/16',
    image: 'img6',
  },
];

const SliderBanner = () => {
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
        {items.map((item, index) => {
          return <SliderItem key={index} {...item} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderBanner;
