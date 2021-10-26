import React from 'react';
import styled from 'styled-components';

const FlexBox = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};

const Box = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? `${props.direction};` : `row`)};
  justify-content: ${props =>
    props.justify ? `${props.justify}` : `flex-start`};
  align-items: ${props => (props.align ? `${props.align}` : `center`)};
  ${props => (props.height ? `${props.height}` : ``)}
  ${props => (props.width ? `${props.width}` : ``)}
  background-color: ${props => (props.bg_color ? `${props.bg_color}` : ``)}
`;

export default FlexBox;
