import React from 'react';

import OptionStyle from './style';

const Option = ({ children, ...rest }) => {
  return <OptionStyle {...rest}>{children}</OptionStyle>;
};

export default Option;
