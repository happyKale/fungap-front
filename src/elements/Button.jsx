import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{chilren}</ButtonStyle>;
};

const ButtonStyle = styled.button``;

export default Button;
