import React from 'react';

import SelectStyle from './style';

const Select = ({ children, ...rest }) => {
  return <SelectStyle {...rest}>{children}</SelectStyle>;
};

export default Select;
