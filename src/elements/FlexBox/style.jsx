import styled from 'styled-components';

const FlexBoxStyle = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? `${props.direction};` : `row`)};
  justify-content: ${props =>
    props.justify ? `${props.justify}` : `flex-start`};
  align-items: ${props => (props.align ? `${props.align}` : `center`)};
  ${props => (props.height ? `${props.height}` : ``)}
  ${props => (props.width ? `${props.width}` : ``)}
  background-color: ${props => (props.bg_color ? `${props.bg_color}` : ``)}
`;

export default FlexBoxStyle;
