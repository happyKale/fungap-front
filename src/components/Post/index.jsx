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
  background-color: ${props => (props.bgColor ? `${props.bgColor}` : ``)};
  background-image: url('${props =>
    props.bgImage
      ? `${props.bgImage}`
      : `http://www.cams-it.com/wp-content/uploads/2015/05/default-placeholder-200x200.png`}');
  background-size: ${props => (props.bgSize ? `${props.bgSize}` : `cover`)};
  background-position: ${props =>
    props.bgPosition ? `${props.bgPosition}` : `center`};
  border-radiuse: ${props => (props.bdRadiuse ? `${props.bdRradiuse}` : ``)};
`;

export default Post;
