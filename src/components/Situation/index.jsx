import React from 'react';
import { Image, Text, Button } from '../../elements';
import {
  Container,
  StyledTitleBox,
  StyledSlideOuter,
  StyledSlideInner,
  StyledPost,
} from './style';

const SituationList = ({ list }) => {
  React.useEffect(() => {
    let slider = document.querySelector('.sliderOuter');
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
        <Text>상황별</Text>
        {/* 더보기 버튼*/}
        <Button>더보기</Button>
      </StyledTitleBox>
      {/* 게시글 목록 시작*/}
      <StyledSlideOuter className='sliderOuter'>
        {/* 게시글 */}
        <StyledSlideInner className='silderInner'>
          {list.map((item, idx) => {
            return (
              <StyledPost key={idx}>
                <Image
                  src='http://www.visualdive.com/wp-content/uploads/2020/09/%EC%9E%91%EC%97%852-819x1024.jpg'
                  width='100%'
                />
                <Text>손절타이밍</Text>
              </StyledPost>
            );
          })}
        </StyledSlideInner>
      </StyledSlideOuter>
      {/* 게시글 목록 끝 */}
    </Container>
  );
};

export default SituationList;
