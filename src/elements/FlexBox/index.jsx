import React from 'react';
import FlexBoxStyle from './style';

const FlexBox = ({ children, ...rest }) => {
  return <FlexBoxStyle {...rest}>{children}</FlexBoxStyle>;
};

export default FlexBox;
