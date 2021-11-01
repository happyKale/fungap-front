import styled from 'styled-components';

const ImageStyle = styled.img`
  width: ${props => (props.width ? `${props.width}` : ``)};
  height: ${props => (props.height ? `${props.height}` : ``)};
  border-radius: ${props => (props.radius ? `${props.radius}` : ``)};
  margin: ${props => (props.margin ? `${props.margin}` : ``)};
  top: ${props => (props.top ? `${props.top}` : ``)};
  position: ${props => (props.position ? `${props.position}` : ``)};
  cursor: ${props => (props.cursor ? `${props.cursor}` : ``)};
`;

export default ImageStyle;
