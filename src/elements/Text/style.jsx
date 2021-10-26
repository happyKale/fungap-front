import styled from 'styled-components';

const TextStyle = styled.p`
  width: 100%;
  font-size: ${props => (props.ft_size ? `${props.ft_size};` : `14px`)};
    font-family${props => (props.ff ? `${props.ff}` : ``)};
    color:${props => (props.color ? `${props.color}` : ``)};
    margin: ${props => (props.margin ? `${props.margin}` : ``)};
    font-weight: ${props => (props.ft_weight ? `${props.ft_weight}` : ``)};
    font-style: ${props => (props.ft_style ? `${props.ft_style}` : ``)};
    padding: ${props => (props.padding ? `${props.padding}` : ``)};
    text-align: ${props => (props.align ? `${props.align}` : ``)}

`;

export default TextStyle;
