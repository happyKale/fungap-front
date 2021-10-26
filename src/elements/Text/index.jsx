import React from 'react';
import TextStyle from './style';

const Text = ({ children, ...rest }) => {
  return <TextStyle {...rest}>{children}</TextStyle>;
};

export default Text;
