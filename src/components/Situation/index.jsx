import React, { useState } from 'react';
import styled from 'styled-components';

const SituationList = props => {
  const list = [0, 0, 0, 0, 0, 0, 0];

  React.useEffect(() => {
    let slider = document.querySelector('.slider');
    let innerSlider = document.querySelector('.silderInner');
    let pressed = false;
    let startx;
    let x;

    slider.addEventListener('mousedown', e => {
      pressed = true;
      startx = e.offsetX - innerSlider.offsetLeft;
      slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseenter', () => {
      slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
      slider.style.cursor = 'grab';
    });

    window.addEventListener('mouseup', () => {
      pressed = false;
    });

    slider.addEventListener('mousemove', e => {
      if (!pressed) return;
      e.preventDefault();
      x = e.offsetX;

      innerSlider.style.left = `${x - startx}px`;
      checkboundary();
    });

    function checkboundary() {
      let outer = slider.getBoundingClientRect();
      let inner = innerSlider.getBoundingClientRect();

      if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';
      } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
    }
  }, []);

  return (
    <Container>
      <StyledTitleBox>
        {/* 제목 */}
        <p>상황별</p>
        {/* 더보기 버튼*/}
        <button>더보기</button>
      </StyledTitleBox>
      {/* 게시글 목록 시작*/}
      <StyledSlideOuter className='slider'>
        {/* 게시글 */}
        <StyledSlideInner className='silderInner'>
          {list.map((item, idx) => {
            return (
              <StyledPost key={idx}>
                <StyledImage src='http://www.visualdive.com/wp-content/uploads/2020/09/%EC%9E%91%EC%97%852-819x1024.jpg' />
                <p>손절타이밍</p>
              </StyledPost>
            );
          })}
        </StyledSlideInner>
      </StyledSlideOuter>
      {/* 게시글 목록 끝 */}
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 450px;
  border: 3px solid black;
  margin: auto;
`;
const StyledTitleBox = styled.div`
  border: 5px solid pink;
  box-sizing: border-box;
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
`;
const StyledSlideOuter = styled.div`
  border: 5px solid skyblue;
  box-sizing: border-box;
  position: relative;
  height: 90%;
  overflow: hidden;
`;
const StyledSlideInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  display: grid;
  display: flex;
  pointer-events: none;
`;

const StyledPost = styled.div`
  border: 3px solid blue;
  box-sizing: border-box;
  height: 80%;
  width: 200px;
  margin: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 170px;
`;

export default SituationList;
