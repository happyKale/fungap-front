import styled from 'styled-components';

const FlexBoxStyle = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? `${props.direction};` : `row`)};
  justify-content: ${props =>
    props.justify ? `${props.justify}` : `flex-start`};
  align-items: ${props => (props.align ? `${props.align}` : `center`)};
  height: ${props => (props.height ? `${props.height}` : ``)};
  width: ${props => (props.width ? `${props.width}` : ``)};
  background-color: ${props => (props.bgColor ? `${props.bgColor}` : ``)};
  padding: ${props => (props.padding ? `${props.padding}` : ``)};
`;

export default FlexBoxStyle;
