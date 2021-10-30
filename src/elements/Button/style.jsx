import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: ${props => (props.width ? `${props.width}` : ``)};
  height: ${props => (props.height ? `${props.height}` : ``)};
  border-radius: ${props => (props.radius ? `${props.radius}` : ``)};
  border: ${props => (props.border ? `${props.border}` : ``)};
  background-color: ${props => (props.bgColor ? `${props.bgColor}` : ``)};
  font-size: ${props => (props.ftSize ? `${props.ftSize}` : ``)};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}` : ``)};
  margin: ${props => (props.margin ? `${props.margin}` : ``)};
  cursor: pointer;
`;

export default ButtonStyle;
