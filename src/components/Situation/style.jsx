import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 450px;
  border: 1px solid black;
  margin: auto;
`;
export const StyledTitleBox = styled.div`
  border: 1px solid pink;
  box-sizing: border-box;
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;
export const StyledSlideOuter = styled.div`
  border: 1px solid skyblue;
  box-sizing: border-box;
  position: relative;
  height: 90%;
  overflow: hidden;
`;
export const StyledSlideInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  display: grid;
  display: flex;
  pointer-events: none;
`;

export const StyledPost = styled.div`
  border: 1px solid blue;
  box-sizing: border-box;
  height: 80%;
  width: 200px;
  margin: 20px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 170px;
`;
