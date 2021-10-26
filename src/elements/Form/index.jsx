import React from 'react';

import FormStyle from './style';

const Form = ({ children, ...rest }) => {
  return <FormStyle {...rest}>{children}</FormStyle>;
};

export default Form;
