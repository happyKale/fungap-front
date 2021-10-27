import styled from 'styled-components';

const TextStyle = styled.p`
  font-size: ${props => (props.ftSize ? `${props.ftSize};` : `14px`)};
  font-family: ${props => (props.ff ? `${props.ff}` : ``)};
  color: ${props => (props.color ? `${props.color}` : ``)};
  margin: ${props => (props.margin ? `${props.margin}` : ``)};
  font-weight: ${props => (props.ftWeight ? `${props.ftWeight}` : ``)};
  font-style: ${props => (props.ftStyle ? `${props.ftStyle}` : ``)};
  padding: ${props => (props.padding ? `${props.padding}` : ``)};
  text-align: ${props => (props.align ? `${props.align}` : ``)};
  text-overflow: ${props =>
    props.textOverflow ? `${props.textOverflow}` : ``};
  overflow: ${props => (props.overflow ? `${props.overflow}` : ``)};
  width: ${props => (props.width ? `${props.width}` : ``)};
  white-space: ${props => (props.whiteSpace ? `${props.whiteSpace}` : ``)};
`;

export default TextStyle;
