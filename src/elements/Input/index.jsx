import React from 'react';
import InputStyle from './style';

const Input = ({ children, ...rest }) => {
  return <InputStyle {...rest} />;
};

export default Input;
