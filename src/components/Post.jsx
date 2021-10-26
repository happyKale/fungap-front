import React from 'react';
import styled from 'styled-components';

const Post = ({ children, ...rest }) => {
  return <Card {...rest}>{children}</Card>;
};

const Card = styled.div`
  width: ${props => (props.width ? `${props.width}` : ``)};
  height: ${props => (props.height ? `${props.height}` : ``)};
  margin: ${props => (props.margin ? `${props.margin}` : ``)};
  padding: ${props => (props.padding ? `${props.padding}` : ``)};
  background-color: ${props => (props.bg_color ? `${props.bg_color}` : ``)};
  background-image: url('${props =>
    props.bg_image
      ? `${props.bg_image}`
      : `http://www.cams-it.com/wp-content/uploads/2015/05/default-placeholder-200x200.png`}');
  background-size: ${props => (props.bg_size ? `${props.bg_size}` : `cover`)};
  background-position: ${props =>
    props.bg_position ? `${props.bg_position}` : `center`};
  border-radiuse: ${props => (props.bd_radiuse ? `${props.bd_radiuse}` : ``)};
`;

export default Post;
