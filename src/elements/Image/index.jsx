import React from 'react';
import ImageStyle from './style';

const Image = ({ src, alt, ...rest }) => {
  return <ImageStyle src={src} alt={alt} {...rest}></ImageStyle>;
};

export default Image;
